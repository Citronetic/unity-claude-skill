#!/usr/bin/env node

/**
 * verify-extraction-2022.mjs - Extraction coverage verification for Unity 2022.3 docs
 *
 * Reads manifest-2022.json and produces a comprehensive extraction report including:
 * - Coverage summary (overall and per-source)
 * - Dedup report (unique hashes, highly duplicated content, disk savings)
 * - Version coverage (entries per unityVersion)
 * - Quality spot-check (random file existence + content validation)
 * - Code block preservation check (especially for API pages)
 * - Pass/fail validation checks
 *
 * Adapted from verify-extraction.mjs (v1.0) for Unity 2022.3 LTS documentation.
 *
 * Usage:
 *   node scripts/verify-extraction-2022.mjs             Full report
 *   node scripts/verify-extraction-2022.mjs --check     Just pass/fail validation (CI-style)
 *   node scripts/verify-extraction-2022.mjs --failures  List all failed URLs with error messages
 *
 * Requirements: EXT22-02, EXT22-03, EXT22-05
 */

import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const MANIFEST_PATH = 'manifest-2022.json';
const CONTENT_DIR = 'content-2022';

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    check: args.includes('--check'),
    failures: args.includes('--failures'),
    help: args.includes('--help') || args.includes('-h'),
  };
}

// ---------------------------------------------------------------------------
// Manifest loading
// ---------------------------------------------------------------------------

function loadManifest() {
  if (!existsSync(MANIFEST_PATH)) {
    console.error(`ERROR: ${MANIFEST_PATH} not found. Run discovery first.`);
    process.exit(1);
  }
  const raw = readFileSync(MANIFEST_PATH, 'utf-8');
  return JSON.parse(raw);
}

// ---------------------------------------------------------------------------
// Source classification (mirrors batch-extract-2022.mjs)
// ---------------------------------------------------------------------------

function sourceToDir(source) {
  if (source === 'manual') return 'manual';
  if (source === 'package-docs') return 'packages';
  if (source === 'api-reference') return 'api';
  return 'other';
}

function sourceToGroup(source) {
  return sourceToDir(source);
}

// ---------------------------------------------------------------------------
// Coverage summary
// ---------------------------------------------------------------------------

function buildCoverageSummary(urls) {
  const overall = { total: urls.length, verified: 0, duplicate: 0, failed: 0, insufficient: 0, pending: 0 };
  const bySource = {}; // group -> { total, verified, duplicate, failed, insufficient, pending }

  for (const entry of urls) {
    const group = sourceToGroup(entry.source);
    if (!bySource[group]) {
      bySource[group] = { total: 0, verified: 0, duplicate: 0, failed: 0, insufficient: 0, pending: 0 };
    }

    bySource[group].total++;

    const status = entry.status || 'pending';
    if (overall[status] !== undefined) {
      overall[status]++;
      bySource[group][status]++;
    } else {
      // Unknown status, count as pending
      overall.pending++;
      bySource[group].pending++;
    }
  }

  return { overall, bySource };
}

function formatCoverageSummary(coverage) {
  const { overall, bySource } = coverage;
  const pct = (n, total) => total > 0 ? ((n / total) * 100).toFixed(1) : '0.0';

  let out = '=== Unity 2022.3 Extraction Report ===\n\n';
  out += `Overall: ${overall.total} URLs\n`;
  out += `  Verified:     ${String(overall.verified).padStart(6)} (${pct(overall.verified, overall.total)}%)\n`;
  out += `  Duplicate:    ${String(overall.duplicate).padStart(6)} (${pct(overall.duplicate, overall.total)}%)\n`;
  out += `  Failed:       ${String(overall.failed).padStart(6)} (${pct(overall.failed, overall.total)}%)\n`;
  out += `  Insufficient: ${String(overall.insufficient).padStart(6)} (${pct(overall.insufficient, overall.total)}%)\n`;
  out += `  Pending:      ${String(overall.pending).padStart(6)} (${pct(overall.pending, overall.total)}%)\n`;
  out += '\n';

  // Coverage rate = verified + duplicate
  const coverageRate = overall.verified + overall.duplicate;
  out += `  Coverage (verified+duplicate): ${coverageRate} (${pct(coverageRate, overall.total)}%)\n`;
  out += '\n';

  out += 'By Source:\n';
  const sourceOrder = ['manual', 'packages', 'api', 'other'];
  for (const group of sourceOrder) {
    const s = bySource[group];
    if (!s) continue;
    const label = `  ${group.charAt(0).toUpperCase() + group.slice(1)} (${s.total}):`;
    out += `${label.padEnd(22)} verified: ${String(s.verified).padStart(6)} | dupe: ${String(s.duplicate).padStart(5)} | fail: ${String(s.failed).padStart(5)} | insuf: ${String(s.insufficient).padStart(5)} | pending: ${String(s.pending).padStart(6)}\n`;
  }

  return out;
}

// ---------------------------------------------------------------------------
// Dedup report
// ---------------------------------------------------------------------------

function buildDedupReport(urls) {
  const hashToCanonical = new Map();
  let totalVerified = 0;
  let totalDuplicates = 0;
  let estimatedBytesSaved = 0;

  for (const entry of urls) {
    if (entry.status === 'verified' && entry.contentHash) {
      totalVerified++;
      if (!hashToCanonical.has(entry.contentHash)) {
        hashToCanonical.set(entry.contentHash, { canonicalUrl: entry.url, duplicateCount: 0 });
      }
    }
  }

  for (const entry of urls) {
    if (entry.status === 'duplicate' && entry.contentHash) {
      totalDuplicates++;
      const canonical = hashToCanonical.get(entry.contentHash);
      if (canonical) {
        canonical.duplicateCount++;
      }
      estimatedBytesSaved += 5 * 1024;
    }
  }

  const highlyDuplicated = [];
  for (const [hash, info] of hashToCanonical) {
    if (info.duplicateCount > 5) {
      highlyDuplicated.push({ hash: hash.slice(0, 12), canonicalUrl: info.canonicalUrl, count: info.duplicateCount });
    }
  }
  highlyDuplicated.sort((a, b) => b.count - a.count);

  return {
    uniqueHashes: hashToCanonical.size,
    totalVerified,
    totalDuplicates,
    estimatedBytesSaved,
    highlyDuplicated,
  };
}

function formatDedupReport(dedup) {
  let out = '\n=== Deduplication Report ===\n\n';
  out += `Unique content hashes: ${dedup.uniqueHashes}\n`;
  out += `Total verified pages:  ${dedup.totalVerified}\n`;
  out += `Total duplicates:      ${dedup.totalDuplicates}\n`;
  out += `Est. disk space saved: ${(dedup.estimatedBytesSaved / 1024 / 1024).toFixed(1)} MB\n`;

  if (dedup.highlyDuplicated.length > 0) {
    out += `\nHighly duplicated content (>5 duplicates):\n`;
    for (const d of dedup.highlyDuplicated.slice(0, 20)) {
      out += `  ${d.count} dupes | hash: ${d.hash}... | ${d.canonicalUrl}\n`;
    }
    if (dedup.highlyDuplicated.length > 20) {
      out += `  ... and ${dedup.highlyDuplicated.length - 20} more\n`;
    }
  } else {
    out += `\nNo highly duplicated content (all entries have <= 5 duplicates)\n`;
  }

  return out;
}

// ---------------------------------------------------------------------------
// Version coverage report
// ---------------------------------------------------------------------------

function buildVersionReport(urls) {
  const versionCounts = {};
  let unknownCount = 0;
  const unknownUrls = [];

  for (const entry of urls) {
    if (entry.status !== 'verified' && entry.status !== 'duplicate') continue;

    const version = entry.unityVersion || 'unknown';
    versionCounts[version] = (versionCounts[version] || 0) + 1;

    if (version === 'unknown') {
      unknownCount++;
      if (unknownUrls.length < 10) {
        unknownUrls.push(entry.url);
      }
    }
  }

  return { versionCounts, unknownCount, unknownUrls };
}

function formatVersionReport(version) {
  let out = '\n=== Version Coverage ===\n\n';

  const sorted = Object.entries(version.versionCounts).sort((a, b) => b[1] - a[1]);
  for (const [ver, count] of sorted) {
    out += `  ${ver.padEnd(15)} ${count}\n`;
  }

  if (version.unknownCount > 0) {
    out += `\nEntries with "unknown" version: ${version.unknownCount}\n`;
    out += `Sample unknown-version URLs:\n`;
    for (const url of version.unknownUrls) {
      out += `  ${url}\n`;
    }
  }

  return out;
}

// ---------------------------------------------------------------------------
// Quality spot-check (enhanced for 2022.3)
// ---------------------------------------------------------------------------

function runSpotCheck(urls) {
  const results = [];
  let allPassed = true;

  // Pick 5 random verified entries and check file existence
  const verified = urls.filter(e => e.status === 'verified' && e.contentFile);
  if (verified.length > 0) {
    const sample = [];
    const indices = new Set();
    const sampleSize = Math.min(5, verified.length);
    while (sample.length < sampleSize) {
      const idx = Math.floor(Math.random() * verified.length);
      if (!indices.has(idx)) {
        indices.add(idx);
        sample.push(verified[idx]);
      }
    }

    for (const entry of sample) {
      const fileExists = existsSync(entry.contentFile);
      const check = { url: entry.url, contentFile: entry.contentFile, fileExists };
      if (fileExists) {
        const content = readFileSync(entry.contentFile, 'utf-8');
        check.wordCount = content.split(/\s+/).filter(Boolean).length;
        check.hasCodeBlocks = content.includes('```');
        check.hasIndentedCode = /^    \S/m.test(content);
        check.isMarkdown = !content.includes('<html') && !content.includes('<!DOCTYPE');
      } else {
        allPassed = false;
      }
      results.push(check);
    }
  }

  // Check at least one file per source group has >100 words
  const sourceChecks = {};
  for (const group of ['manual', 'packages', 'api']) {
    const groupVerified = verified.filter(e => sourceToDir(e.source) === group);
    if (groupVerified.length > 0) {
      const entry = groupVerified[Math.floor(Math.random() * groupVerified.length)];
      if (existsSync(entry.contentFile)) {
        const content = readFileSync(entry.contentFile, 'utf-8');
        const wc = content.split(/\s+/).filter(Boolean).length;
        sourceChecks[group] = { url: entry.url, wordCount: wc, passes: wc > 100 };
        if (!sourceChecks[group].passes) allPassed = false;
      } else {
        sourceChecks[group] = { url: entry.url, wordCount: 0, passes: false };
        allPassed = false;
      }
    }
  }

  // API code block check: sample 5 API pages, verify they contain code-like content
  const apiCodeCheck = { checked: 0, withCode: 0, samples: [] };
  const apiVerified = verified.filter(e => sourceToDir(e.source) === 'api');
  if (apiVerified.length > 0) {
    const sampleSize = Math.min(5, apiVerified.length);
    const usedIndices = new Set();
    while (apiCodeCheck.checked < sampleSize) {
      const idx = Math.floor(Math.random() * apiVerified.length);
      if (usedIndices.has(idx)) continue;
      usedIndices.add(idx);
      const entry = apiVerified[idx];
      apiCodeCheck.checked++;
      if (existsSync(entry.contentFile)) {
        const content = readFileSync(entry.contentFile, 'utf-8');
        const hasCode = content.includes('```') || /^    (public|private|protected|static|void|class|struct|enum|using|namespace|int|float|string|bool)\b/m.test(content);
        if (hasCode) apiCodeCheck.withCode++;
        apiCodeCheck.samples.push({
          url: entry.url,
          file: entry.contentFile,
          hasCode,
        });
      }
    }
  }

  // Check no verified entry has null contentHash
  const nullHashCount = urls.filter(e => e.status === 'verified' && !e.contentHash).length;
  if (nullHashCount > 0) allPassed = false;

  return { results, sourceChecks, apiCodeCheck, nullHashCount, allPassed };
}

function formatSpotCheck(spotCheck) {
  let out = '\n=== Quality Spot-Check ===\n\n';

  out += 'Random verified file checks:\n';
  for (const check of spotCheck.results) {
    const status = check.fileExists ? 'OK' : 'MISSING';
    out += `  [${status}] ${check.contentFile}`;
    if (check.fileExists) {
      out += ` (${check.wordCount} words, markdown: ${check.isMarkdown ? 'yes' : 'NO'}, code blocks: ${check.hasCodeBlocks ? 'yes' : 'no'})`;
    }
    out += '\n';
  }

  out += '\nPer-source content quality (>100 words):\n';
  for (const [group, check] of Object.entries(spotCheck.sourceChecks)) {
    const status = check.passes ? 'PASS' : 'FAIL';
    out += `  [${status}] ${group}: ${check.wordCount} words (${check.url})\n`;
  }

  out += '\nAPI code block preservation:\n';
  const cc = spotCheck.apiCodeCheck;
  out += `  Checked ${cc.checked} API pages: ${cc.withCode}/${cc.checked} contain code blocks/signatures\n`;
  for (const s of cc.samples) {
    out += `  [${s.hasCode ? 'CODE' : 'NONE'}] ${s.file}\n`;
  }

  if (spotCheck.nullHashCount > 0) {
    out += `\nWARNING: ${spotCheck.nullHashCount} verified entries have null contentHash\n`;
  }

  return out;
}

// ---------------------------------------------------------------------------
// Validation checks
// ---------------------------------------------------------------------------

function runValidation(urls, coverage) {
  const checks = [];
  const { overall } = coverage;

  // 1. No pending URLs remain (100% attempted)
  checks.push({
    name: 'No pending URLs remain',
    passed: overall.pending === 0,
    detail: overall.pending === 0
      ? 'All URLs attempted'
      : `${overall.pending} URLs still pending`,
  });

  // 2. Verified + duplicate >= 50% of total (relaxed threshold for 2022.3 — many package pages may be insufficient)
  const coverageRate = (overall.verified + overall.duplicate) / overall.total;
  checks.push({
    name: 'Coverage >= 50%',
    passed: coverageRate >= 0.50,
    detail: `${(coverageRate * 100).toFixed(1)}% (verified: ${overall.verified}, duplicate: ${overall.duplicate})`,
  });

  // 3. All verified entries have non-null contentHash
  const nullHashCount = urls.filter(e => e.status === 'verified' && !e.contentHash).length;
  checks.push({
    name: 'All verified have contentHash',
    passed: nullHashCount === 0,
    detail: nullHashCount === 0 ? 'All populated' : `${nullHashCount} entries missing contentHash`,
  });

  // 4. All verified entries have non-null unityVersion
  const nullVersionCount = urls.filter(e => e.status === 'verified' && !e.unityVersion).length;
  checks.push({
    name: 'All verified have unityVersion',
    passed: nullVersionCount === 0,
    detail: nullVersionCount === 0 ? 'All populated' : `${nullVersionCount} entries missing unityVersion`,
  });

  // 5. All verified entries have non-null contentFile pointing to existing file
  const verifiedEntries = urls.filter(e => e.status === 'verified');
  let missingFileCount = 0;
  let nullContentFileCount = 0;
  // Only check a sample (checking all 50K+ files would be very slow)
  const sampleSize = Math.min(100, verifiedEntries.length);
  const step = Math.max(1, Math.floor(verifiedEntries.length / sampleSize));
  for (let i = 0; i < verifiedEntries.length; i += step) {
    const entry = verifiedEntries[i];
    if (!entry.contentFile) {
      nullContentFileCount++;
    } else if (!existsSync(entry.contentFile)) {
      missingFileCount++;
    }
  }
  checks.push({
    name: 'Sampled verified have existing contentFile',
    passed: missingFileCount === 0 && nullContentFileCount === 0,
    detail: (missingFileCount === 0 && nullContentFileCount === 0)
      ? `Sampled ${sampleSize} of ${verifiedEntries.length} files — all exist`
      : `${nullContentFileCount} null contentFile, ${missingFileCount} missing files (in sample of ${sampleSize})`,
  });

  // 6. Manual has >90% coverage (small source, should be near-complete)
  const manualUrls = urls.filter(e => e.source === 'manual');
  const manualDone = manualUrls.filter(e => e.status === 'verified' || e.status === 'duplicate').length;
  const manualCoverage = manualUrls.length > 0 ? manualDone / manualUrls.length : 0;
  checks.push({
    name: 'Manual coverage >= 90%',
    passed: manualCoverage >= 0.90,
    detail: `${(manualCoverage * 100).toFixed(1)}% (${manualDone}/${manualUrls.length})`,
  });

  // 7. API reference has >80% coverage
  const apiUrls = urls.filter(e => e.source === 'api-reference');
  const apiDone = apiUrls.filter(e => e.status === 'verified' || e.status === 'duplicate').length;
  const apiCoverage = apiUrls.length > 0 ? apiDone / apiUrls.length : 0;
  checks.push({
    name: 'API coverage >= 80%',
    passed: apiCoverage >= 0.80,
    detail: `${(apiCoverage * 100).toFixed(1)}% (${apiDone}/${apiUrls.length})`,
  });

  const allPassed = checks.every(c => c.passed);
  return { checks, allPassed };
}

function formatValidation(validation) {
  let out = '\n=== Validation Checks ===\n\n';

  for (const check of validation.checks) {
    const icon = check.passed ? 'PASS' : 'FAIL';
    out += `  [${icon}] ${check.name}: ${check.detail}\n`;
  }

  out += `\n${validation.allPassed ? 'ALL CHECKS PASSED' : 'SOME CHECKS FAILED'}\n`;
  return out;
}

// ---------------------------------------------------------------------------
// Failures listing
// ---------------------------------------------------------------------------

function formatFailures(urls) {
  const failed = urls.filter(e => e.status === 'failed');

  if (failed.length === 0) {
    return 'No failed URLs.\n';
  }

  let out = `=== Failed URLs (${failed.length}) ===\n\n`;

  // Group by error type
  const errorGroups = {};
  for (const entry of failed) {
    const err = entry.error || 'Unknown error';
    if (!errorGroups[err]) errorGroups[err] = [];
    errorGroups[err].push(entry.url);
  }

  for (const [error, errorUrls] of Object.entries(errorGroups).sort((a, b) => b[1].length - a[1].length)) {
    out += `${error} (${errorUrls.length} URLs):\n`;
    for (const url of errorUrls.slice(0, 10)) {
      out += `  ${url}\n`;
    }
    if (errorUrls.length > 10) {
      out += `  ... and ${errorUrls.length - 10} more\n`;
    }
    out += '\n';
  }

  return out;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const opts = parseArgs();

  if (opts.help) {
    console.log(`verify-extraction-2022.mjs - Unity 2022.3 extraction coverage verification

Usage:
  node scripts/verify-extraction-2022.mjs             Full report
  node scripts/verify-extraction-2022.mjs --check     Just pass/fail validation (CI-style)
  node scripts/verify-extraction-2022.mjs --failures  List all failed URLs with error messages
  node scripts/verify-extraction-2022.mjs --help      Show this help
`);
    process.exit(0);
  }

  const manifest = loadManifest();
  const urls = manifest.urls;

  if (opts.failures) {
    console.log(formatFailures(urls));
    process.exit(0);
  }

  // Build reports
  const coverage = buildCoverageSummary(urls);
  const validation = runValidation(urls, coverage);

  if (opts.check) {
    // CI-style: just validation
    console.log(formatValidation(validation));
    process.exit(validation.allPassed ? 0 : 1);
  }

  // Full report
  console.log(formatCoverageSummary(coverage));

  const dedup = buildDedupReport(urls);
  console.log(formatDedupReport(dedup));

  const version = buildVersionReport(urls);
  console.log(formatVersionReport(version));

  const spotCheck = runSpotCheck(urls);
  console.log(formatSpotCheck(spotCheck));

  console.log(formatValidation(validation));

  process.exit(validation.allPassed ? 0 : 1);
}

main();
