#!/usr/bin/env node

/**
 * discover-urls.mjs - URL discovery for all three Unity content sources
 *
 * Discovers URLs from:
 *   1. Unity Learn (learn.unity.com) - pathways, tutorials
 *   2. Unity Manual (docs.unity3d.com/Manual/) - documentation pages
 *   3. Unity Scripting API (docs.unity3d.com/ScriptReference/) - API reference
 *
 * Strategy: sitemaps first (XML parsing), fall back to link crawling via Puppeteer.
 *
 * Usage:
 *   node scripts/discover-urls.mjs --source learn     # Discover learn.unity.com URLs only
 *   node scripts/discover-urls.mjs --source manual    # Discover Manual URLs only
 *   node scripts/discover-urls.mjs --source api       # Discover ScriptReference URLs only
 *   node scripts/discover-urls.mjs --source all       # Discover all sources (default)
 *   node scripts/discover-urls.mjs --dry-run          # Preview without writing manifest
 */

import puppeteer from 'puppeteer';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, '..');
const MANIFEST_PATH = resolve(PROJECT_ROOT, 'manifest.json');

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const NAVIGATION_TIMEOUT_MS = 30_000;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 5_000;
const CONCURRENCY = 3; // max simultaneous page fetches for link crawling
const MAX_CRAWL_DEPTH = 4; // max link-follow depth for BFS crawling

const SOURCES = {
  learn: {
    baseUrl: 'https://learn.unity.com',
    sitemapUrl: 'https://learn.unity.com/sitemap.xml',
    entryPoints: [
      'https://learn.unity.com/pathways',
      'https://learn.unity.com/courses',
    ],
  },
  manual: {
    baseUrl: 'https://docs.unity3d.com/Manual',
    // Root sitemap covers both Manual and ScriptReference (no per-section sitemap)
    sitemapUrl: 'https://docs.unity3d.com/sitemap.xml',
    entryPoints: [
      'https://docs.unity3d.com/Manual/UnityManual.html',
    ],
  },
  api: {
    baseUrl: 'https://docs.unity3d.com/ScriptReference',
    // Root sitemap covers both Manual and ScriptReference (no per-section sitemap)
    sitemapUrl: 'https://docs.unity3d.com/sitemap.xml',
    entryPoints: [
      'https://docs.unity3d.com/ScriptReference/index.html',
    ],
  },
};

// ---------------------------------------------------------------------------
// URL normalization & categorization
// ---------------------------------------------------------------------------

/**
 * Normalize a URL for deduplication: strip anchors, trailing slashes, and common query params.
 */
function normalizeUrl(url) {
  try {
    const u = new URL(url);
    // Remove hash fragments
    u.hash = '';
    // Remove tracking query params but keep meaningful ones
    const meaninglessParams = ['utm_source', 'utm_medium', 'utm_campaign', 'ref', 'from'];
    for (const p of meaninglessParams) {
      u.searchParams.delete(p);
    }
    // Remove trailing slash (except for root paths)
    let normalized = u.toString();
    if (normalized.endsWith('/') && u.pathname !== '/') {
      normalized = normalized.slice(0, -1);
    }
    return normalized;
  } catch {
    return url;
  }
}

/**
 * Categorize a URL based on its host and path patterns.
 */
function categorizeUrl(url) {
  try {
    const u = new URL(url);

    if (u.hostname === 'learn.unity.com') {
      if (u.pathname.includes('/pathway')) return 'learn-pathway';
      if (u.pathname.includes('/course')) return 'learn-course';
      if (u.pathname.includes('/tutorial')) return 'learn-tutorial';
      if (u.pathname.includes('/project')) return 'learn-project';
      if (u.pathname.includes('/mission')) return 'learn-mission';
      return 'learn-other';
    }

    if (u.hostname === 'docs.unity3d.com') {
      // API reference (direct or versioned path)
      if (isApiUrl(u.pathname)) return 'api-reference';

      // Package docs
      if (u.pathname.startsWith('/Packages/')) return 'package-docs';

      // Hub docs
      if (u.pathname.startsWith('/hub/')) return 'manual';

      // Manual (direct or versioned path)
      if (isManualUrl(u.pathname)) {
        // Detect best practice guides
        if (u.pathname.includes('BestPractice') || u.pathname.includes('best-practice')) {
          return 'best-practice';
        }
        return 'manual';
      }
    }

    return 'other';
  } catch {
    return 'other';
  }
}

// Docs.unity3d.com URL filtering strategy:
// - We ONLY want current (Unity 6 / 6000.x) English docs
// - Accept: /Manual/*, /6000.*/Documentation/Manual/*, /ScriptReference/*, /6000.*/Documentation/ScriptReference/*
// - Accept: /Packages/com.unity.*@latest/* (only @latest versions)
// - Accept: /hub/manual/*
// - Reject: all localized paths, all old version numbers, all non-@latest package versions

const EXCLUDED_LOCALE_PREFIXES = ['/cn/', '/kr/', '/ru/', '/es/', '/ja/', '/pt/'];

/**
 * Check if a docs.unity3d.com URL is for current/latest English content.
 */
function isCurrentDocsVersion(pathname) {
  // Exclude non-English localizations
  for (const locale of EXCLUDED_LOCALE_PREFIXES) {
    if (pathname.startsWith(locale)) return false;
  }

  // For versioned paths, only accept 6000.x (Unity 6 - current)
  // Match: /6000.1/Documentation/... or /6000.0/Documentation/...
  const versionedMatch = pathname.match(/^\/(\d+)(\.\d+)?\/Documentation\//);
  if (versionedMatch) {
    const majorVersion = parseInt(versionedMatch[1], 10);
    // Only accept Unity 6 (6000.x) - reject everything else (old versions like 351, 530, 2017-2023)
    return majorVersion >= 6000;
  }

  // For direct paths like /Manual/, /ScriptReference/ - these are current version
  if (pathname.startsWith('/Manual/') || pathname.startsWith('/ScriptReference/')) {
    return true;
  }

  // For package docs, only accept @latest (not versioned like @0.1, @6.0)
  if (pathname.startsWith('/Packages/')) {
    return pathname.includes('@latest');
  }

  // Hub docs are always current
  if (pathname.startsWith('/hub/')) return true;

  // Anything with a version number in the first path segment that isn't 6000.x - reject
  const firstSegment = pathname.split('/')[1];
  if (firstSegment && /^\d/.test(firstSegment)) {
    return false;
  }

  return true;
}

/**
 * Check if a URL matches Manual scope (current version, English, Manual section).
 */
function isManualUrl(pathname) {
  // Direct /Manual/ path
  if (pathname.startsWith('/Manual/')) return true;
  // Versioned /6000.x/Documentation/Manual/ path
  if (pathname.includes('/Documentation/Manual/')) return true;
  // Hub manual docs
  if (pathname.startsWith('/hub/manual/')) return true;
  return false;
}

/**
 * Check if a URL matches API ScriptReference scope.
 */
function isApiUrl(pathname) {
  // Direct /ScriptReference/ path
  if (pathname.startsWith('/ScriptReference/')) return true;
  // Versioned /6000.x/Documentation/ScriptReference/ path
  if (pathname.includes('/Documentation/ScriptReference/')) return true;
  return false;
}

/**
 * Check if a URL is within scope for scraping.
 */
function isInScope(url, sourceKey) {
  try {
    const u = new URL(url);

    // Exclude non-http(s)
    if (!u.protocol.startsWith('http')) return false;

    // Exclude common non-content paths
    const excludePatterns = [
      /\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot|pdf|zip|tar|gz)$/i,
      /\/auth\//,
      /\/login/,
      /\/signup/,
      /\/account/,
      /\/cart/,
      /\/checkout/,
      /mailto:/,
      /javascript:/,
    ];
    for (const pat of excludePatterns) {
      if (pat.test(url)) return false;
    }

    switch (sourceKey) {
      case 'learn':
        return u.hostname === 'learn.unity.com';
      case 'manual':
        if (u.hostname !== 'docs.unity3d.com') return false;
        if (!isCurrentDocsVersion(u.pathname)) return false;
        // Include Manual pages AND Package docs (they're part of the manual ecosystem)
        return isManualUrl(u.pathname) || u.pathname.startsWith('/Packages/');
      case 'api':
        if (u.hostname !== 'docs.unity3d.com') return false;
        if (!isCurrentDocsVersion(u.pathname)) return false;
        return isApiUrl(u.pathname);
      default:
        return false;
    }
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Sitemap parsing (no browser needed)
// ---------------------------------------------------------------------------

/**
 * Attempt to fetch and parse a sitemap.xml. Returns array of URLs or null if unavailable.
 * Uses native fetch (Node 18+).
 */
async function fetchSitemap(sitemapUrl) {
  try {
    console.log(`  Trying sitemap: ${sitemapUrl}`);
    const resp = await fetch(sitemapUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
      signal: AbortSignal.timeout(15_000),
    });

    if (!resp.ok) {
      console.log(`  Sitemap returned ${resp.status} - falling back to crawling`);
      return null;
    }

    const contentType = resp.headers.get('content-type') || '';
    const text = await resp.text();

    // Check if it's actual XML
    if (!text.includes('<urlset') && !text.includes('<sitemapindex')) {
      console.log(`  Response is not XML sitemap format - falling back to crawling`);
      return null;
    }

    // Parse URLs from XML using regex (lightweight, no XML parser dependency)
    const urls = [];

    // Handle sitemap index (contains links to sub-sitemaps)
    const sitemapLocs = [...text.matchAll(/<sitemap>\s*<loc>([^<]+)<\/loc>/g)];
    if (sitemapLocs.length > 0) {
      console.log(`  Sitemap index found with ${sitemapLocs.length} sub-sitemaps`);
      for (const match of sitemapLocs) {
        const subUrls = await fetchSitemap(match[1].trim());
        if (subUrls) urls.push(...subUrls);
      }
      return urls;
    }

    // Parse <loc> tags from urlset
    const locMatches = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)];
    for (const match of locMatches) {
      urls.push(match[1].trim());
    }

    console.log(`  Sitemap parsed: ${urls.length} URLs found`);
    return urls.length > 0 ? urls : null;
  } catch (err) {
    console.log(`  Sitemap fetch failed: ${err.message} - falling back to crawling`);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Browser-based link crawling (BFS)
// ---------------------------------------------------------------------------

/**
 * BFS crawl from entry points using Puppeteer to discover URLs.
 *
 * @param {import('puppeteer').Browser} browser
 * @param {string[]} entryPoints - Starting URLs
 * @param {string} sourceKey - 'learn', 'manual', or 'api'
 * @param {number} maxDepth - Maximum BFS depth
 * @returns {Promise<string[]>} Discovered URLs
 */
async function crawlLinks(browser, entryPoints, sourceKey, maxDepth = MAX_CRAWL_DEPTH) {
  const discovered = new Set();
  const visited = new Set();
  const queue = entryPoints.map((url) => ({ url: normalizeUrl(url), depth: 0 }));

  // Add entry points to discovered
  for (const ep of entryPoints) {
    discovered.add(normalizeUrl(ep));
  }

  console.log(`  BFS crawling from ${entryPoints.length} entry point(s), max depth ${maxDepth}...`);
  let errorCount = 0;

  while (queue.length > 0) {
    const { url, depth } = queue.shift();

    if (visited.has(url) || depth > maxDepth) continue;
    visited.add(url);

    let page;
    try {
      page = await browser.newPage();
      await page.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
      );

      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: NAVIGATION_TIMEOUT_MS,
      });

      // Extract all links from the page
      const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href]'))
          .map((a) => a.href)
          .filter((href) => href.startsWith('http'));
      });

      await page.close();
      page = null;

      // Filter and normalize
      let newCount = 0;
      for (const link of links) {
        const normalized = normalizeUrl(link);
        if (isInScope(normalized, sourceKey) && !discovered.has(normalized)) {
          discovered.add(normalized);
          newCount++;
          if (depth + 1 <= maxDepth) {
            queue.push({ url: normalized, depth: depth + 1 });
          }
        }
      }

      if (newCount > 0) {
        console.log(`  [depth=${depth}] ${url.substring(0, 80)} -> +${newCount} new (total: ${discovered.size})`);
      } else {
        console.log(`  [depth=${depth}] ${url.substring(0, 80)} -> 0 new`);
      }
    } catch (err) {
      errorCount++;
      console.log(`  [ERROR] ${url.substring(0, 60)}: ${err.message.substring(0, 80)}`);
      if (page) try { await page.close(); } catch { /* ignore */ }
    }

    // Safety valve: stop if we have enough URLs
    if (discovered.size > 5000) {
      console.log(`  Safety limit reached (5000 URLs). Stopping BFS.`);
      break;
    }
  }

  if (errorCount > 0) {
    console.log(`  BFS completed with ${errorCount} errors out of ${visited.size} pages visited.`);
  }

  return [...discovered];
}

// ---------------------------------------------------------------------------
// Source-specific discovery
// ---------------------------------------------------------------------------

/**
 * For versioned docs.unity3d.com URLs, extract the canonical page path (stripping version prefix).
 * E.g.: /6000.1/Documentation/Manual/Physics.html -> Manual/Physics.html
 *        /Manual/Physics.html -> Manual/Physics.html
 */
function getCanonicalPagePath(url) {
  try {
    const u = new URL(url);
    const pathname = u.pathname;
    // Strip versioned prefix: /6000.x/Documentation/ -> keep the rest
    const versionedMatch = pathname.match(/^\/\d+\.\d+\/Documentation\/(.+)/);
    if (versionedMatch) return versionedMatch[1];
    // Strip leading slash for direct paths
    return pathname.replace(/^\//, '');
  } catch {
    return url;
  }
}

/**
 * Extract version number from a docs.unity3d.com URL.
 * Returns the numeric version (e.g., 6000.1) or 0 for unversioned (direct) paths.
 */
function extractVersion(url) {
  const match = url.match(/docs\.unity3d\.com\/(\d+\.\d+)\/Documentation\//);
  if (match) return parseFloat(match[1]);
  // Direct paths like /Manual/ or /ScriptReference/ - treat as "current" (highest priority)
  return Infinity;
}

/**
 * Deduplicate versioned URLs by keeping only the highest version for each canonical path.
 * This prevents duplicates across 6000.0, 6000.1, 6000.2 versions.
 */
function deduplicateVersioned(urls) {
  const byCanonical = new Map();

  for (const url of urls) {
    const canonical = getCanonicalPagePath(url);
    const version = extractVersion(url);
    const existing = byCanonical.get(canonical);

    if (!existing || version > existing.version) {
      byCanonical.set(canonical, { url, version });
    }
  }

  return [...byCanonical.values()].map((v) => v.url);
}

/**
 * Discover URLs for a specific source. Tries sitemap first, falls back to crawling.
 */
async function discoverSource(browser, sourceKey) {
  const config = SOURCES[sourceKey];
  console.log(`\n--- Discovering ${sourceKey} URLs ---`);
  console.log(`  Base: ${config.baseUrl}`);

  // Try sitemap first
  const sitemapUrls = await fetchSitemap(config.sitemapUrl);

  if (sitemapUrls && sitemapUrls.length > 0) {
    // Filter sitemap URLs to ensure they're in scope
    const inScopeUrls = sitemapUrls
      .map(normalizeUrl)
      .filter((url) => isInScope(url, sourceKey));

    const deduped = [...new Set(inScopeUrls)];
    console.log(`  After scope filtering & dedup: ${deduped.length} in-scope URLs`);

    // For docs.unity3d.com sources, deduplicate across versions (keep only latest)
    if (sourceKey === 'manual' || sourceKey === 'api') {
      const versionDeduped = deduplicateVersioned(deduped);
      console.log(`  After version dedup: ${versionDeduped.length} URLs (removed ${deduped.length - versionDeduped.length} older versions)`);
      return versionDeduped;
    }

    return deduped;
  }

  // Fall back to BFS crawling
  console.log(`  No sitemap available - falling back to link crawling...`);
  const crawledUrls = await crawlLinks(browser, config.entryPoints, sourceKey);
  console.log(`  Crawled: ${crawledUrls.length} URLs discovered`);
  return crawledUrls;
}

// ---------------------------------------------------------------------------
// Manifest management
// ---------------------------------------------------------------------------

/**
 * Load existing manifest or return null.
 */
async function loadManifest() {
  if (!existsSync(MANIFEST_PATH)) return null;
  try {
    const raw = await readFile(MANIFEST_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Create a URL entry with all required metadata fields.
 */
function createUrlEntry(url, source) {
  return {
    url,
    source,
    category: categorizeUrl(url),
    status: 'pending',
    wordCount: null,
    lastAttempt: null,
    contentHash: null,
    unityVersion: null,
    contentFile: null,
    retryCount: 0,
    error: null,
  };
}

/**
 * Merge newly discovered URLs into existing manifest (idempotent).
 * Preserves status of already-tracked URLs.
 */
function mergeIntoManifest(existing, newUrlsBySource) {
  // Build lookup of existing URLs
  const existingByUrl = new Map();
  if (existing?.urls) {
    for (const entry of existing.urls) {
      existingByUrl.set(entry.url, entry);
    }
  }

  const sourceStats = {};
  let totalNew = 0;

  for (const [sourceKey, urls] of Object.entries(newUrlsBySource)) {
    let newCount = 0;
    for (const url of urls) {
      if (!existingByUrl.has(url)) {
        const source = categorizeUrl(url);
        existingByUrl.set(url, createUrlEntry(url, source));
        newCount++;
      }
    }
    sourceStats[sourceKey] = {
      baseUrl: SOURCES[sourceKey].baseUrl,
      urlCount: urls.length,
      newUrls: newCount,
    };
    totalNew += newCount;
  }

  // Build final URL list sorted by source then URL
  const allUrls = [...existingByUrl.values()].sort((a, b) => {
    if (a.source !== b.source) return a.source.localeCompare(b.source);
    return a.url.localeCompare(b.url);
  });

  // Calculate status summary
  const statusSummary = { pending: 0, scraped: 0, verified: 0, failed: 0 };
  for (const entry of allUrls) {
    if (entry.status in statusSummary) {
      statusSummary[entry.status]++;
    }
  }

  return {
    version: '1.0',
    generatedAt: new Date().toISOString(),
    sources: sourceStats,
    totalUrls: allUrls.length,
    statusSummary,
    urls: allUrls,
    _meta: {
      discoveryScript: 'scripts/discover-urls.mjs',
      lastRun: new Date().toISOString(),
      newUrlsAdded: totalNew,
    },
  };
}

// ---------------------------------------------------------------------------
// Main execution
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const sourceArg = args.find((a) => a.startsWith('--source'))
    ? args[args.indexOf('--source') + 1] || args.find((a) => a.startsWith('--source='))?.split('=')[1]
    : 'all';
  const dryRun = args.includes('--dry-run');

  // Determine which sources to discover
  const sourcesToDiscover = sourceArg === 'all'
    ? ['learn', 'manual', 'api']
    : [sourceArg];

  // Validate source argument
  for (const s of sourcesToDiscover) {
    if (!SOURCES[s]) {
      console.error(`Unknown source: ${s}. Valid sources: learn, manual, api, all`);
      process.exit(1);
    }
  }

  console.log(`Unity URL Discovery`);
  console.log(`Sources: ${sourcesToDiscover.join(', ')}`);
  console.log(`Manifest: ${MANIFEST_PATH}`);
  if (dryRun) console.log(`Mode: DRY RUN (no manifest write)`);
  console.log('');

  // Launch browser for potential crawling
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    // Discover URLs for each source
    const newUrlsBySource = {};
    for (const sourceKey of sourcesToDiscover) {
      try {
        const urls = await discoverSource(browser, sourceKey);
        newUrlsBySource[sourceKey] = urls;
        console.log(`  => ${sourceKey}: ${urls.length} URLs discovered`);
      } catch (err) {
        console.error(`  ERROR discovering ${sourceKey}: ${err.message}`);
        newUrlsBySource[sourceKey] = [];
      }
    }

    // Load existing manifest and merge
    const existing = await loadManifest();
    if (existing) {
      console.log(`\nExisting manifest found with ${existing.totalUrls} URLs.`);
    }

    const manifest = mergeIntoManifest(existing, newUrlsBySource);

    // Print summary
    console.log(`\n=== Discovery Summary ===`);
    for (const [source, stats] of Object.entries(manifest.sources)) {
      console.log(`  ${source}: ${stats.urlCount} URLs (${stats.newUrls} new)`);
    }
    console.log(`  Total: ${manifest.totalUrls} URLs`);
    console.log(`  Status: ${JSON.stringify(manifest.statusSummary)}`);

    // Write manifest
    if (!dryRun) {
      await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf-8');
      console.log(`\nManifest written to ${MANIFEST_PATH}`);
    } else {
      console.log(`\nDry run - no manifest written.`);
    }

    return manifest;
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
