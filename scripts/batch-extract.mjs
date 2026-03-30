#!/usr/bin/env node

/**
 * batch-extract.mjs - Batch extraction orchestrator for Unity documentation
 *
 * Processes all pending URLs from manifest.json using the extract-page.mjs pipeline.
 * Features:
 * - 10 concurrent page extractions with shared Puppeteer browser
 * - Auto-throttle on 403/rate-limit detection (reduces to 2 concurrent, exponential backoff)
 * - Content hash deduplication (SHA-256)
 * - Unity version tagging from URL or page content
 * - Manifest-driven resume (skips verified/duplicate URLs)
 * - Graceful shutdown on SIGINT/SIGTERM
 * - Progress reporting every 10 pages
 *
 * Usage:
 *   node scripts/batch-extract.mjs                    # Full extraction
 *   node scripts/batch-extract.mjs --source learn     # Extract only learn URLs
 *   node scripts/batch-extract.mjs --limit 50         # First N pending URLs
 *   node scripts/batch-extract.mjs --dry-run          # Show plan without extracting
 *
 * Requirements: EXTR-01 through EXTR-05
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createHash } from 'node:crypto';
import puppeteer from 'puppeteer';
import { extractPage } from './extract-page.mjs';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const MANIFEST_PATH = 'manifest.json';
const CONTENT_DIR = 'content';
const DEFAULT_CONCURRENCY = 10;
const THROTTLED_CONCURRENCY = 2;
const THROTTLE_DELAY_BASE_MS = 30_000; // 30s initial throttle delay
const THROTTLE_RECOVERY_MS = 60_000;   // 60s of success before restoring concurrency
const PROGRESS_INTERVAL = 10;          // Report every N pages

// Source priority order: learn first, manual second, api last
const SOURCE_PRIORITY = {
  'learn-tutorial': 0,
  'learn-course': 1,
  'learn-project': 2,
  'learn-other': 3,
  'best-practice': 4,
  'manual': 5,
  'package-docs': 6,
  'api-reference': 7,
};

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    source: null,
    limit: Infinity,
    dryRun: false,
    pendingOnly: false,
    help: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--source':
        opts.source = args[++i];
        break;
      case '--limit':
        opts.limit = parseInt(args[++i], 10);
        break;
      case '--dry-run':
        opts.dryRun = true;
        break;
      case '--pending-only':
        opts.pendingOnly = true;
        break;
      case '--help':
      case '-h':
        opts.help = true;
        break;
    }
  }

  return opts;
}

function printHelp() {
  console.log(`batch-extract.mjs - Batch extraction orchestrator for Unity documentation

Usage:
  node scripts/batch-extract.mjs                     Run full extraction
  node scripts/batch-extract.mjs --source learn      Extract only learn URLs
  node scripts/batch-extract.mjs --source manual     Extract only manual URLs
  node scripts/batch-extract.mjs --source api        Extract only API URLs
  node scripts/batch-extract.mjs --limit 50          Extract first N pending URLs
  node scripts/batch-extract.mjs --pending-only       Skip previously failed URLs
  node scripts/batch-extract.mjs --dry-run           Show extraction plan without running
  node scripts/batch-extract.mjs --help              Show this help

Source filter values:
  learn     All learn.unity.com sources (tutorial, course, project, other)
  manual    Manual + package docs
  api       API reference (ScriptReference)

Features:
  - 10 concurrent extractions with auto-throttle
  - Content hash deduplication (SHA-256)
  - Unity version tagging
  - Resumable: skips already verified/duplicate URLs
  - Graceful shutdown saves manifest
`);
}

// ---------------------------------------------------------------------------
// Manifest I/O
// ---------------------------------------------------------------------------

function loadManifest() {
  const raw = readFileSync(MANIFEST_PATH, 'utf-8');
  return JSON.parse(raw);
}

function saveManifest(manifest) {
  try {
    writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf-8');
  } catch (err) {
    console.error(`WARNING: Failed to save manifest: ${err.message}`);
  }
}

// ---------------------------------------------------------------------------
// URL filtering and sorting
// ---------------------------------------------------------------------------

/**
 * Filter URLs to those eligible for extraction.
 * @param {Array} urls - All manifest URL entries
 * @param {string|null} sourceFilter - Optional source filter
 * @returns {Array} Filtered and sorted URL entries
 */
function getEligibleUrls(urls, sourceFilter, pendingOnly = false) {
  let eligible = urls.filter(entry =>
    pendingOnly
      ? entry.status === 'pending'
      : (entry.status === 'pending' || entry.status === 'failed')
  );

  // Apply source filter
  if (sourceFilter) {
    eligible = eligible.filter(entry => {
      switch (sourceFilter) {
        case 'learn':
          return entry.source.startsWith('learn-') || entry.source === 'best-practice';
        case 'manual':
          return entry.source === 'manual' || entry.source === 'package-docs';
        case 'api':
          return entry.source === 'api-reference';
        default:
          return entry.source === sourceFilter;
      }
    });
  }

  // Sort by source priority: learn -> manual -> api
  // Within same priority, pending URLs come before failed ones (process new URLs first)
  eligible.sort((a, b) => {
    const prioA = SOURCE_PRIORITY[a.source] ?? 99;
    const prioB = SOURCE_PRIORITY[b.source] ?? 99;
    if (prioA !== prioB) return prioA - prioB;
    // Pending before failed
    if (a.status === 'pending' && b.status !== 'pending') return -1;
    if (a.status !== 'pending' && b.status === 'pending') return 1;
    return 0;
  });

  return eligible;
}

// ---------------------------------------------------------------------------
// Content file path derivation
// ---------------------------------------------------------------------------

/**
 * Maps a manifest source category to a content directory.
 */
function sourceToDir(source) {
  if (source.startsWith('learn-') || source === 'best-practice') return 'learn';
  if (source === 'manual' || source === 'package-docs') return 'manual';
  if (source === 'api-reference') return 'api';
  return 'other';
}

/**
 * Derives the content file path from a URL.
 * Examples:
 *   https://learn.unity.com/tutorial/get-started -> content/learn/tutorial-get-started.md
 *   https://docs.unity3d.com/6000.0/Documentation/Manual/UnityManual.html -> content/manual/unitymanual.md
 *   https://docs.unity3d.com/6000.0/Documentation/ScriptReference/MonoBehaviour.html -> content/api/monobehaviour.md
 */
function deriveContentPath(url, source) {
  const dir = sourceToDir(source);
  const parsed = new URL(url);
  let pathname = parsed.pathname;

  // Strip leading slash
  pathname = pathname.replace(/^\//, '');

  // For docs.unity3d.com: strip version prefix and Documentation/Manual or Documentation/ScriptReference
  // e.g. "6000.0/Documentation/Manual/UnityManual.html" -> "unitymanual"
  // e.g. "6000.0/Documentation/ScriptReference/MonoBehaviour.html" -> "monobehaviour"
  pathname = pathname
    .replace(/^\d+\.\d+\/Documentation\/(Manual|ScriptReference)\//i, '')
    .replace(/^Packages\/@latest\//i, 'pkg-');

  // Strip file extensions (.html, .htm)
  pathname = pathname.replace(/\.(html?|php|aspx?)$/i, '');

  // Replace path separators with dashes
  let slug = pathname.replace(/\//g, '-');

  // Lowercase
  slug = slug.toLowerCase();

  // Clean up: remove leading/trailing dashes, collapse multiple dashes
  slug = slug.replace(/^-+|-+$/g, '').replace(/-{2,}/g, '-');

  // Fallback for empty slug
  if (!slug) slug = 'index';

  return join(CONTENT_DIR, dir, `${slug}.md`);
}

// ---------------------------------------------------------------------------
// Content hash deduplication (EXTR-03)
// ---------------------------------------------------------------------------

/**
 * Computes SHA-256 hash of content string.
 */
function computeContentHash(content) {
  return createHash('sha256').update(content, 'utf-8').digest('hex');
}

/**
 * Builds an index of existing content hashes from the manifest.
 * Maps contentHash -> url (first seen / canonical).
 */
function buildHashIndex(urls) {
  const index = new Map();
  for (const entry of urls) {
    if (entry.contentHash && entry.status === 'verified') {
      if (!index.has(entry.contentHash)) {
        index.set(entry.contentHash, entry.url);
      }
    }
  }
  return index;
}

// ---------------------------------------------------------------------------
// Unity version tagging (EXTR-05)
// ---------------------------------------------------------------------------

/**
 * Extracts Unity version from URL or page content.
 * @param {string} url
 * @param {string} markdown - First 500 chars examined for version patterns
 * @returns {string} Version string or "unknown"
 */
function extractUnityVersion(url, markdown) {
  // Try URL first: /6000.0/, /6000.1/, /6000.2/
  const urlMatch = url.match(/\/(\d{4,}\.\d+)\//);
  if (urlMatch) return urlMatch[1];

  // For learn.unity.com and other URLs: scan first 500 chars of content
  const snippet = (markdown || '').slice(0, 500);

  // Match "Unity 6000.x" or "Unity 6" patterns
  const contentMatch = snippet.match(/Unity\s+(\d{4,}\.\d+)/i);
  if (contentMatch) return contentMatch[1];

  // Match "Unity 6" (the marketing name for Unity 6000.x)
  const unity6Match = snippet.match(/Unity\s+6\b/i);
  if (unity6Match) return '6000.0';

  // Match "Unity 2022" or "Unity 2023"
  const yearMatch = snippet.match(/Unity\s+(20\d{2}(?:\.\d+)?)/i);
  if (yearMatch) return yearMatch[1];

  return 'unknown';
}

// ---------------------------------------------------------------------------
// Concurrency control (semaphore)
// ---------------------------------------------------------------------------

class Semaphore {
  constructor(max) {
    this.max = max;
    this.current = 0;
    this._waiting = [];
  }

  get concurrency() {
    return this.max;
  }

  set concurrency(val) {
    this.max = val;
    // Release waiting tasks if concurrency increased
    this._tryRelease();
  }

  async acquire() {
    if (this.current < this.max) {
      this.current++;
      return;
    }
    return new Promise(resolve => {
      this._waiting.push(resolve);
    });
  }

  release() {
    this.current--;
    this._tryRelease();
  }

  _tryRelease() {
    while (this._waiting.length > 0 && this.current < this.max) {
      this.current++;
      const resolve = this._waiting.shift();
      resolve();
    }
  }
}

// ---------------------------------------------------------------------------
// Throttle controller
// ---------------------------------------------------------------------------

class ThrottleController {
  constructor(semaphore) {
    this.semaphore = semaphore;
    this.isThrottled = false;
    this.throttleLevel = 0;       // 0, 1, 2 for exponential backoff
    this.lastThrottleTime = 0;
    this.successSinceThrottle = 0;
    this.throttleRecoverAt = 0;
  }

  /**
   * Called when a rate-limit or 403 is detected.
   */
  onRateLimit() {
    this.isThrottled = true;
    this.throttleLevel = Math.min(this.throttleLevel + 1, 3);
    this.lastThrottleTime = Date.now();
    this.successSinceThrottle = 0;
    this.throttleRecoverAt = Date.now() + THROTTLE_RECOVERY_MS;

    // Reduce concurrency
    this.semaphore.concurrency = THROTTLED_CONCURRENCY;

    const delayMs = THROTTLE_DELAY_BASE_MS * Math.pow(2, this.throttleLevel - 1);
    console.log(`  THROTTLE: Reduced to ${THROTTLED_CONCURRENCY} concurrent, ${delayMs / 1000}s cooldown (level ${this.throttleLevel})`);

    return delayMs;
  }

  /**
   * Called on successful extraction. Gradually restores concurrency.
   */
  onSuccess() {
    if (!this.isThrottled) return;

    this.successSinceThrottle++;

    if (Date.now() > this.throttleRecoverAt) {
      // Gradually restore concurrency
      const newConcurrency = Math.min(
        this.semaphore.concurrency + 2,
        DEFAULT_CONCURRENCY
      );
      this.semaphore.concurrency = newConcurrency;

      if (newConcurrency >= DEFAULT_CONCURRENCY) {
        this.isThrottled = false;
        this.throttleLevel = 0;
        console.log(`  THROTTLE: Fully recovered to ${DEFAULT_CONCURRENCY} concurrent`);
      } else {
        // Reset recovery timer for next step
        this.throttleRecoverAt = Date.now() + THROTTLE_RECOVERY_MS;
        console.log(`  THROTTLE: Recovering, now at ${newConcurrency} concurrent`);
      }
    }
  }

  /**
   * Returns the current inter-page delay in ms (0 if not throttled).
   */
  getDelay() {
    if (!this.isThrottled) return 0;
    return THROTTLE_DELAY_BASE_MS * Math.pow(2, this.throttleLevel - 1);
  }

  /**
   * Checks if an error indicates rate limiting.
   */
  isRateLimitError(error) {
    if (!error) return false;
    const lowerError = error.toLowerCase();
    return (
      lowerError.includes('403') ||
      lowerError.includes('access denied') ||
      lowerError.includes('rate') ||
      lowerError.includes('throttle') ||
      lowerError.includes('too many requests') ||
      lowerError.includes('429')
    );
  }
}

// ---------------------------------------------------------------------------
// Progress tracker
// ---------------------------------------------------------------------------

class ProgressTracker {
  constructor(totalEligible, manifest) {
    this.totalEligible = totalEligible;
    this.manifest = manifest;
    this.processed = 0;
    this.verified = 0;
    this.duplicates = 0;
    this.failures = 0;
    this.insufficient = 0;
    this.startTime = Date.now();
  }

  recordResult(status) {
    this.processed++;
    switch (status) {
      case 'verified': this.verified++; break;
      case 'duplicate': this.duplicates++; break;
      case 'failed': this.failures++; break;
      case 'insufficient': this.insufficient++; break;
    }
  }

  getRate() {
    const elapsed = (Date.now() - this.startTime) / 1000;
    return elapsed > 0 ? (this.processed / elapsed).toFixed(1) : '0.0';
  }

  shouldReport() {
    return this.processed % PROGRESS_INTERVAL === 0;
  }

  getStatusLine() {
    // Count totals by source category
    const sourceCounts = {};
    const sourceVerified = {};
    for (const entry of this.manifest.urls) {
      const dir = sourceToDir(entry.source);
      sourceCounts[dir] = (sourceCounts[dir] || 0) + 1;
      if (entry.status === 'verified' || entry.status === 'duplicate') {
        sourceVerified[dir] = (sourceVerified[dir] || 0) + 1;
      }
    }

    const pct = (dir) => {
      const total = sourceCounts[dir] || 1;
      const done = sourceVerified[dir] || 0;
      return Math.round((done / total) * 100);
    };

    return `[${this.processed}/${this.totalEligible}] Learn: ${pct('learn')}% | Manual: ${pct('manual')}% | API: ${pct('api')}% | Dupes: ${this.duplicates} | Fails: ${this.failures} | Rate: ${this.getRate()} pg/s`;
  }

  getSummary() {
    const elapsed = ((Date.now() - this.startTime) / 1000).toFixed(0);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    return `
=== Extraction Complete ===
  Verified:     ${this.verified}
  Duplicates:   ${this.duplicates}
  Insufficient: ${this.insufficient}
  Failed:       ${this.failures}
  Total:        ${this.processed}
  Elapsed:      ${mins}m ${secs}s
  Rate:         ${this.getRate()} pg/s
`;
  }
}

// ---------------------------------------------------------------------------
// Main extraction loop
// ---------------------------------------------------------------------------

async function main() {
  const opts = parseArgs();

  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  // Load manifest
  const manifest = loadManifest();
  console.log(`Loaded manifest: ${manifest.totalUrls} total URLs`);

  // Get eligible URLs
  const eligible = getEligibleUrls(manifest.urls, opts.source, opts.pendingOnly);

  // Apply limit
  const batch = eligible.slice(0, opts.limit);

  console.log(`Eligible: ${eligible.length} URLs (status: ${opts.pendingOnly ? 'pending' : 'pending/failed'})`);
  console.log(`Batch:    ${batch.length} URLs${opts.limit < Infinity ? ` (limited to ${opts.limit})` : ''}`);

  if (opts.source) {
    console.log(`Filter:   --source ${opts.source}`);
  }

  // Show source breakdown
  const breakdown = {};
  for (const entry of batch) {
    const dir = sourceToDir(entry.source);
    breakdown[dir] = (breakdown[dir] || 0) + 1;
  }
  console.log(`Breakdown: ${Object.entries(breakdown).map(([k, v]) => `${k}: ${v}`).join(', ')}`);

  // Dry run: show what would be extracted
  if (opts.dryRun) {
    console.log('\n--- Dry Run (first 20 URLs) ---');
    for (const entry of batch.slice(0, 20)) {
      const contentPath = deriveContentPath(entry.url, entry.source);
      console.log(`  ${sourceToDir(entry.source).toUpperCase().padEnd(7)} ${contentPath}`);
      console.log(`         ${entry.url}`);
    }
    if (batch.length > 20) {
      console.log(`  ... and ${batch.length - 20} more`);
    }
    console.log('\nDry run complete. No pages extracted.');
    process.exit(0);
  }

  if (batch.length === 0) {
    console.log('No pending URLs to extract. Exiting.');
    process.exit(0);
  }

  // Build hash index from already-extracted pages
  const hashIndex = buildHashIndex(manifest.urls);
  console.log(`Hash index: ${hashIndex.size} existing content hashes`);

  // Set up concurrency control
  const semaphore = new Semaphore(DEFAULT_CONCURRENCY);
  const throttle = new ThrottleController(semaphore);
  const progress = new ProgressTracker(batch.length, manifest);

  // Launch shared browser
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    console.log('Browser launched');
  } catch (err) {
    console.error(`Failed to launch browser: ${err.message}`);
    process.exit(1);
  }

  // Graceful shutdown handler
  let shutdownRequested = false;
  const shutdown = () => {
    if (shutdownRequested) return;
    shutdownRequested = true;
    console.log('\nGraceful shutdown requested. Saving manifest...');
    saveManifest(manifest);
    console.log('Manifest saved. Waiting for in-flight pages to complete...');
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  // Create a URL-index map for fast lookup
  const urlIndex = new Map();
  for (let i = 0; i < manifest.urls.length; i++) {
    urlIndex.set(manifest.urls[i].url, i);
  }

  // Process URLs with concurrency control
  const promises = [];

  for (const entry of batch) {
    if (shutdownRequested) break;

    // Throttle delay if active
    const delay = throttle.getDelay();
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    await semaphore.acquire();

    if (shutdownRequested) {
      semaphore.release();
      break;
    }

    const promise = processUrl(entry, manifest, urlIndex, hashIndex, browser, throttle, progress)
      .finally(() => semaphore.release());

    promises.push(promise);
  }

  // Wait for all in-flight extractions
  await Promise.allSettled(promises);

  // Save final manifest state
  saveManifest(manifest);

  // Close browser
  try {
    await browser.close();
  } catch { /* ignore */ }

  // Print summary
  console.log(progress.getSummary());

  process.exit(0);
}

/**
 * Processes a single URL: extract, dedup, tag version, update manifest.
 */
async function processUrl(entry, manifest, urlIndex, hashIndex, browser, throttle, progress) {
  const idx = urlIndex.get(entry.url);
  const manifestEntry = manifest.urls[idx];

  try {
    // Extract page content
    const result = await extractPage(entry.url, { browser });

    manifestEntry.lastAttempt = new Date().toISOString();

    if (!result.success) {
      // Check for rate limiting
      if (throttle.isRateLimitError(result.error)) {
        const delayMs = throttle.onRateLimit();
        // Re-queue by keeping as failed for retry
        manifestEntry.status = 'failed';
        manifestEntry.error = result.error;
        manifestEntry.retryCount = (manifestEntry.retryCount || 0) + 1;
        console.log(`RATE  ${entry.url}`);
      } else if (result.error && result.error.includes('Insufficient content')) {
        manifestEntry.status = 'insufficient';
        manifestEntry.wordCount = result.wordCount;
        manifestEntry.error = result.error;
        console.log(`INSUF ${result.wordCount}w ${entry.url}`);
      } else {
        manifestEntry.status = 'failed';
        manifestEntry.error = result.error;
        manifestEntry.retryCount = (manifestEntry.retryCount || 0) + 1;
        console.log(`FAIL  ${result.error} ${entry.url}`);
      }

      progress.recordResult(manifestEntry.status);
      if (progress.shouldReport()) {
        console.log(progress.getStatusLine());
      }
      saveManifest(manifest);
      return;
    }

    // Success -- compute content hash
    const contentHash = computeContentHash(result.markdown);

    // Check for duplicate
    if (hashIndex.has(contentHash)) {
      manifestEntry.status = 'duplicate';
      manifestEntry.contentHash = contentHash;
      manifestEntry.duplicateOf = hashIndex.get(contentHash);
      manifestEntry.wordCount = result.wordCount;
      manifestEntry.unityVersion = extractUnityVersion(entry.url, result.markdown);
      console.log(`DUPE  ${result.wordCount}w ${entry.url}`);

      progress.recordResult('duplicate');
      if (progress.shouldReport()) {
        console.log(progress.getStatusLine());
      }
      saveManifest(manifest);
      return;
    }

    // Unique content -- write file
    const contentPath = deriveContentPath(entry.url, entry.source);
    mkdirSync(dirname(contentPath), { recursive: true });
    writeFileSync(contentPath, result.markdown, 'utf-8');

    // Update manifest entry
    manifestEntry.status = 'verified';
    manifestEntry.wordCount = result.wordCount;
    manifestEntry.contentHash = contentHash;
    manifestEntry.contentFile = contentPath;
    manifestEntry.unityVersion = extractUnityVersion(entry.url, result.markdown);

    // Add to hash index
    hashIndex.set(contentHash, entry.url);

    // Report success
    throttle.onSuccess();
    console.log(`OK    ${result.wordCount}w ${contentPath}`);

    progress.recordResult('verified');
    if (progress.shouldReport()) {
      console.log(progress.getStatusLine());
    }
    saveManifest(manifest);
  } catch (err) {
    // Browser crash or unexpected error
    console.error(`ERROR ${entry.url}: ${err.message}`);
    manifestEntry.status = 'failed';
    manifestEntry.error = `Unexpected: ${err.message}`;
    manifestEntry.retryCount = (manifestEntry.retryCount || 0) + 1;
    manifestEntry.lastAttempt = new Date().toISOString();

    progress.recordResult('failed');
    saveManifest(manifest);

    // Try to detect browser crash and relaunch
    try {
      const pages = await browser.pages();
      // If this works, browser is still alive
    } catch {
      console.log('Browser appears crashed. Relaunching...');
      try {
        browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        console.log('Browser relaunched');
      } catch (relaunchErr) {
        console.error(`Failed to relaunch browser: ${relaunchErr.message}`);
      }
    }
  }
}

// Run
main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
