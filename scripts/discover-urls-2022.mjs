#!/usr/bin/env node

/**
 * discover-urls-2022.mjs - URL discovery for Unity 2022.3 LTS documentation
 *
 * Discovers URLs from:
 *   1. Unity Manual (docs.unity3d.com/2022.3/Documentation/Manual/)
 *   2. Unity Scripting API (docs.unity3d.com/2022.3/Documentation/ScriptReference/)
 *   3. Unity Package docs (docs.unity3d.com/Packages/com.unity.*)
 *
 * Strategy: Parse root sitemap index, fetch each sub-sitemap, and filter for
 * 2022.3/package URLs during parsing to avoid loading 1.4M+ URLs into memory.
 *
 * Usage:
 *   node scripts/discover-urls-2022.mjs --source manual    # Discover Manual URLs only
 *   node scripts/discover-urls-2022.mjs --source api       # Discover ScriptReference URLs only
 *   node scripts/discover-urls-2022.mjs --source packages  # Discover Package URLs only
 *   node scripts/discover-urls-2022.mjs --source all       # Discover all sources (default)
 *   node scripts/discover-urls-2022.mjs --dry-run          # Preview without writing manifest
 */

import puppeteer from 'puppeteer';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, '..');
const MANIFEST_PATH = resolve(PROJECT_ROOT, 'manifest-2022.json');

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const NAVIGATION_TIMEOUT_MS = 30_000;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 5_000;
const CONCURRENCY = 3;
const MAX_CRAWL_DEPTH = 4;

// The root sitemap index at docs.unity3d.com — contains sub-sitemaps covering all versions/sections
const ROOT_SITEMAP_URL = 'https://docs.unity3d.com/sitemap.xml';

const SOURCES = {
  manual: {
    baseUrl: 'https://docs.unity3d.com/2022.3/Documentation/Manual',
    entryPoints: [
      'https://docs.unity3d.com/2022.3/Documentation/Manual/WhatsNew2022LTS.html',
    ],
  },
  api: {
    baseUrl: 'https://docs.unity3d.com/2022.3/Documentation/ScriptReference',
    entryPoints: [
      'https://docs.unity3d.com/2022.3/Documentation/ScriptReference/index.html',
    ],
  },
  packages: {
    baseUrl: 'https://docs.unity3d.com/Packages',
    entryPoints: [],
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
    u.hash = '';
    const meaninglessParams = ['utm_source', 'utm_medium', 'utm_campaign', 'ref', 'from'];
    for (const p of meaninglessParams) {
      u.searchParams.delete(p);
    }
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

    if (u.hostname === 'docs.unity3d.com') {
      if (isApiUrl(u.pathname)) return 'api-reference';
      if (u.pathname.startsWith('/Packages/')) return 'package-docs';
      if (isManualUrl(u.pathname)) {
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

const EXCLUDED_LOCALE_PREFIXES = ['/cn/', '/kr/', '/ru/', '/es/', '/ja/', '/pt/'];

/**
 * Check if a URL matches Manual scope (2022.3 version).
 */
function isManualUrl(pathname) {
  return pathname.startsWith('/2022.3/Documentation/Manual/');
}

/**
 * Check if a URL matches API ScriptReference scope (2022.3 version).
 */
function isApiUrl(pathname) {
  return pathname.startsWith('/2022.3/Documentation/ScriptReference/');
}

/**
 * Check if a URL is a package doc URL.
 */
function isPackageUrl(pathname) {
  return pathname.startsWith('/Packages/com.unity.');
}

/**
 * Fast pre-filter: quickly check if a raw URL string is potentially relevant
 * before doing full URL parsing. This avoids constructing URL objects for
 * the vast majority of the 1.4M+ sitemap URLs.
 */
function quickRelevanceCheck(rawUrl, sourcesToDiscover) {
  for (const source of sourcesToDiscover) {
    switch (source) {
      case 'manual':
        if (rawUrl.includes('/2022.3/Documentation/Manual/')) return true;
        break;
      case 'api':
        if (rawUrl.includes('/2022.3/Documentation/ScriptReference/')) return true;
        break;
      case 'packages':
        if (rawUrl.includes('/Packages/com.unity.')) return true;
        break;
    }
  }
  return false;
}

/**
 * Check if a URL is within scope for a specific source.
 */
function isInScope(url, sourceKey) {
  try {
    const u = new URL(url);

    if (!u.protocol.startsWith('http')) return false;
    if (u.hostname !== 'docs.unity3d.com') return false;

    // Exclude non-content files
    const excludePatterns = [
      /\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot|pdf|zip|tar|gz)$/i,
      /\/auth\//,
      /\/login/,
      /\/signup/,
      /\/account/,
    ];
    for (const pat of excludePatterns) {
      if (pat.test(url)) return false;
    }

    // Exclude locales
    for (const locale of EXCLUDED_LOCALE_PREFIXES) {
      if (u.pathname.startsWith(locale)) return false;
    }

    switch (sourceKey) {
      case 'manual':
        return isManualUrl(u.pathname);
      case 'api':
        return isApiUrl(u.pathname);
      case 'packages':
        return isPackageUrl(u.pathname);
      default:
        return false;
    }
  } catch {
    return false;
  }
}

/**
 * Determine which source(s) a URL belongs to.
 */
function classifyUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname !== 'docs.unity3d.com') return [];

    // Exclude locales
    for (const locale of EXCLUDED_LOCALE_PREFIXES) {
      if (u.pathname.startsWith(locale)) return [];
    }

    const sources = [];
    if (isManualUrl(u.pathname)) sources.push('manual');
    if (isApiUrl(u.pathname)) sources.push('api');
    if (isPackageUrl(u.pathname)) sources.push('packages');
    return sources;
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Sitemap parsing — optimized for massive sitemap indexes
// ---------------------------------------------------------------------------

/**
 * Fetch a single sitemap XML and extract <loc> URLs.
 * Returns raw URL strings (not normalized).
 */
async function fetchSitemapXml(sitemapUrl) {
  const resp = await fetch(sitemapUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    },
    signal: AbortSignal.timeout(60_000),
  });

  if (!resp.ok) {
    return { type: 'error', status: resp.status };
  }

  const text = await resp.text();

  if (!text.includes('<urlset') && !text.includes('<sitemapindex')) {
    return { type: 'error', status: 'not-xml' };
  }

  // Sitemap index — return sub-sitemap URLs
  const sitemapLocs = [...text.matchAll(/<sitemap>\s*<loc>([^<]+)<\/loc>/g)];
  if (sitemapLocs.length > 0) {
    return {
      type: 'index',
      subSitemaps: sitemapLocs.map((m) => m[1].trim()),
    };
  }

  // URL set — extract <loc> tags
  const locMatches = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return {
    type: 'urlset',
    urls: locMatches.map((m) => m[1].trim()),
  };
}

/**
 * Discover all relevant URLs from the root sitemap index.
 * Processes sub-sitemaps one at a time, filtering immediately to keep memory low.
 *
 * @param {string[]} sourcesToDiscover - Which sources to look for
 * @returns {Promise<{manual: string[], api: string[], packages: string[]}>}
 */
async function discoverFromRootSitemap(sourcesToDiscover) {
  const results = { manual: [], api: [], packages: [] };

  console.log(`  Fetching root sitemap index: ${ROOT_SITEMAP_URL}`);
  const rootResult = await fetchSitemapXml(ROOT_SITEMAP_URL);

  if (rootResult.type === 'error') {
    console.log(`  Root sitemap failed: ${rootResult.status}`);
    return results;
  }

  if (rootResult.type !== 'index') {
    console.log(`  Root sitemap is not an index — unexpected`);
    return results;
  }

  const subSitemaps = rootResult.subSitemaps;
  console.log(`  Root sitemap has ${subSitemaps.length} sub-sitemaps`);

  // Process each sub-sitemap sequentially
  for (let i = 0; i < subSitemaps.length; i++) {
    const subUrl = subSitemaps[i];
    const shortName = subUrl.split('/').pop();
    process.stdout.write(`  [${i + 1}/${subSitemaps.length}] ${shortName}...`);

    try {
      const subResult = await fetchSitemapXml(subUrl);

      if (subResult.type !== 'urlset') {
        console.log(` skipped (${subResult.type})`);
        continue;
      }

      // Filter URLs immediately — only keep relevant ones
      let matchCount = 0;
      for (const rawUrl of subResult.urls) {
        // Quick string check before expensive URL parsing
        if (!quickRelevanceCheck(rawUrl, sourcesToDiscover)) continue;

        const normalized = normalizeUrl(rawUrl);
        const sources = classifyUrl(normalized);

        for (const source of sources) {
          if (sourcesToDiscover.includes(source)) {
            results[source].push(normalized);
            matchCount++;
          }
        }
      }

      console.log(` ${subResult.urls.length} total, ${matchCount} matched`);
    } catch (err) {
      console.log(` ERROR: ${err.message.substring(0, 60)}`);
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Browser-based link crawling (BFS) — fallback
// ---------------------------------------------------------------------------

/**
 * BFS crawl from entry points using Puppeteer to discover URLs.
 */
async function crawlLinks(browser, entryPoints, sourceKey, maxDepth = MAX_CRAWL_DEPTH) {
  const discovered = new Set();
  const visited = new Set();
  const queue = entryPoints.map((url) => ({ url: normalizeUrl(url), depth: 0 }));

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

      const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href]'))
          .map((a) => a.href)
          .filter((href) => href.startsWith('http'));
      });

      await page.close();
      page = null;

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
      }
    } catch (err) {
      errorCount++;
      console.log(`  [ERROR] ${url.substring(0, 60)}: ${err.message.substring(0, 80)}`);
      if (page) try { await page.close(); } catch { /* ignore */ }
    }

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
// Version deduplication
// ---------------------------------------------------------------------------

/**
 * For versioned docs.unity3d.com URLs, extract the canonical page path.
 * E.g.: /2022.3/Documentation/Manual/Physics.html -> Manual/Physics.html
 *        /Packages/com.unity.inputsystem@1.7/api/... -> Packages/com.unity.inputsystem/api/...
 */
function getCanonicalPagePath(url) {
  try {
    const u = new URL(url);
    const pathname = u.pathname;
    // Strip 2022.3 versioned prefix
    const versionedMatch = pathname.match(/^\/2022\.3\/Documentation\/(.+)/);
    if (versionedMatch) return versionedMatch[1];
    // Package paths: strip version from package name
    const pkgMatch = pathname.match(/^\/Packages\/(com\.unity\.[^@]+)(?:@[^/]+)?\/(.+)/);
    if (pkgMatch) return `Packages/${pkgMatch[1]}/${pkgMatch[2]}`;
    return pathname.replace(/^\//, '');
  } catch {
    return url;
  }
}

/**
 * Extract version number from a URL for comparison.
 */
function extractVersion(url) {
  const match = url.match(/docs\.unity3d\.com\/2022\.3\/Documentation\//);
  if (match) return 2022.3;
  const pkgMatch = url.match(/\/Packages\/com\.unity\.[^@]+@(\d+)\.(\d+)/);
  if (pkgMatch) return parseInt(pkgMatch[1], 10) * 1000 + parseInt(pkgMatch[2], 10);
  return 0;
}

/**
 * Deduplicate versioned URLs by keeping only the highest version for each canonical path.
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

// ---------------------------------------------------------------------------
// Manifest management
// ---------------------------------------------------------------------------

async function loadManifest() {
  if (!existsSync(MANIFEST_PATH)) return null;
  try {
    const raw = await readFile(MANIFEST_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function createUrlEntry(url, source) {
  return {
    url,
    source,
    category: categorizeUrl(url),
    status: 'pending',
    wordCount: null,
    lastAttempt: null,
    contentHash: null,
    unityVersion: '2022.3',
    contentFile: null,
    retryCount: 0,
    error: null,
  };
}

function mergeIntoManifest(existing, newUrlsBySource) {
  const existingByUrl = new Map();
  if (existing?.urls) {
    for (const entry of existing.urls) {
      existingByUrl.set(entry.url, entry);
    }
  }

  const sourceStats = existing?.sources ? { ...existing.sources } : {};
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

  const allUrls = [...existingByUrl.values()].sort((a, b) => {
    if (a.source !== b.source) return a.source.localeCompare(b.source);
    return a.url.localeCompare(b.url);
  });

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
      discoveryScript: 'scripts/discover-urls-2022.mjs',
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

  const validSources = ['manual', 'api', 'packages'];
  const sourcesToDiscover = sourceArg === 'all'
    ? validSources
    : [sourceArg];

  for (const s of sourcesToDiscover) {
    if (!SOURCES[s]) {
      console.error(`Unknown source: ${s}. Valid sources: manual, api, packages, all`);
      process.exit(1);
    }
  }

  console.log(`Unity 2022.3 LTS URL Discovery`);
  console.log(`Sources: ${sourcesToDiscover.join(', ')}`);
  console.log(`Manifest: ${MANIFEST_PATH}`);
  if (dryRun) console.log(`Mode: DRY RUN (no manifest write)`);
  console.log('');

  // Phase 1: Discover from root sitemap (efficient — filters during parse)
  console.log(`--- Phase 1: Sitemap Discovery ---`);
  const sitemapResults = await discoverFromRootSitemap(sourcesToDiscover);

  // Deduplicate each source
  const newUrlsBySource = {};
  for (const sourceKey of sourcesToDiscover) {
    const raw = sitemapResults[sourceKey] || [];
    const unique = [...new Set(raw)];
    const deduped = deduplicateVersioned(unique);
    newUrlsBySource[sourceKey] = deduped;
    console.log(`\n  ${sourceKey}: ${raw.length} raw -> ${unique.length} unique -> ${deduped.length} after version dedup`);
  }

  // Phase 2: BFS fallback for sources with zero sitemap results
  let browser = null;
  for (const sourceKey of sourcesToDiscover) {
    if (newUrlsBySource[sourceKey].length === 0 && SOURCES[sourceKey].entryPoints.length > 0) {
      console.log(`\n--- Phase 2: BFS Fallback for ${sourceKey} ---`);
      if (!browser) {
        browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
      }
      const crawled = await crawlLinks(browser, SOURCES[sourceKey].entryPoints, sourceKey);
      newUrlsBySource[sourceKey] = crawled;
      console.log(`  => ${sourceKey}: ${crawled.length} URLs from BFS`);
    }
  }
  if (browser) await browser.close();

  // Phase 3: Merge and write manifest
  const existing = await loadManifest();
  if (existing) {
    console.log(`\nExisting manifest found with ${existing.totalUrls} URLs.`);
  }

  const manifest = mergeIntoManifest(existing, newUrlsBySource);

  console.log(`\n=== Discovery Summary ===`);
  for (const [source, stats] of Object.entries(manifest.sources)) {
    console.log(`  ${source}: ${stats.urlCount} URLs (${stats.newUrls} new)`);
  }
  console.log(`  Total: ${manifest.totalUrls} URLs`);
  console.log(`  Status: ${JSON.stringify(manifest.statusSummary)}`);

  // Print sample URLs per source
  console.log(`\n=== Sample URLs ===`);
  for (const sourceKey of sourcesToDiscover) {
    const sourceUrls = (newUrlsBySource[sourceKey] || []).slice(0, 5);
    if (sourceUrls.length > 0) {
      console.log(`  ${sourceKey}:`);
      for (const u of sourceUrls) {
        console.log(`    ${u}`);
      }
    }
  }

  if (!dryRun) {
    await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf-8');
    console.log(`\nManifest written to ${MANIFEST_PATH}`);
  } else {
    console.log(`\nDry run - no manifest written.`);
  }

  return manifest;
}

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
