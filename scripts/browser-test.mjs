#!/usr/bin/env node

/**
 * browser-test.mjs - Chrome automation proof-of-concept for Unity tutorial scraping
 *
 * Tool: Puppeteer (headless Chrome)
 * Why: learn.unity.com blocks curl/fetch via TLS fingerprinting; Puppeteer bypasses this.
 *      docs.unity3d.com works with curl but Puppeteer is used consistently for all sources.
 *
 * Navigation sequence:
 *   1. Launch headless Chrome via Puppeteer
 *   2. Navigate to target URL with networkidle2 wait strategy
 *   3. Extract rendered text via document.body.innerText (post-JS-execution)
 *   4. Return extracted text content
 *
 * Retry logic: 5 retries with 10-second waits (per user decision)
 *
 * Usage:
 *   node scripts/browser-test.mjs              # Run single-page extraction test
 *   node scripts/browser-test.mjs --validate   # Validate all three page types
 */

import puppeteer from 'puppeteer';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 10_000;
const NAVIGATION_TIMEOUT_MS = 30_000;
const MIN_SUBSTANTIVE_WORDS = 100;

// Test URLs for each page type
const TEST_URLS = {
  learn: 'https://learn.unity.com/tutorial/get-started-with-unity-in-editor-tutorial',
  manual: 'https://docs.unity3d.com/Manual/UnityManual.html',
  scriptRef: 'https://docs.unity3d.com/ScriptReference/MonoBehaviour.html',
};

// ---------------------------------------------------------------------------
// Core extraction function
// ---------------------------------------------------------------------------

/**
 * Fetches a URL using headless Chrome and returns the rendered text content.
 *
 * @param {string} url - The URL to fetch
 * @param {object} [options] - Options
 * @param {import('puppeteer').Browser} [options.browser] - Reuse an existing browser instance
 * @param {number} [options.maxRetries] - Override max retries (default: 5)
 * @param {number} [options.retryDelayMs] - Override retry delay in ms (default: 10000)
 * @returns {Promise<{url: string, finalUrl: string, text: string, wordCount: number, success: boolean, error?: string}>}
 */
export async function fetchPageContent(url, options = {}) {
  const maxRetries = options.maxRetries ?? MAX_RETRIES;
  const retryDelayMs = options.retryDelayMs ?? RETRY_DELAY_MS;
  const ownBrowser = !options.browser;
  let browser = options.browser;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    let page;
    try {
      if (!browser) {
        browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
      }

      page = await browser.newPage();

      // Set a realistic user-agent to avoid bot detection
      await page.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
      );

      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: NAVIGATION_TIMEOUT_MS,
      });

      const finalUrl = page.url();

      // Extract rendered text content (not raw HTML)
      const text = await page.evaluate(() => document.body.innerText);
      const wordCount = text.split(/\s+/).filter((w) => w.length > 0).length;

      await page.close();

      // Check for error pages
      if (text.includes('Access Denied') || text.includes('Error 404')) {
        const errorType = text.includes('Access Denied') ? 'Access Denied (403)' : '404 Not Found';
        return { url, finalUrl, text, wordCount, success: false, error: errorType };
      }

      return { url, finalUrl, text, wordCount, success: wordCount >= MIN_SUBSTANTIVE_WORDS };
    } catch (err) {
      if (page) {
        try { await page.close(); } catch { /* ignore */ }
      }

      const isLastAttempt = attempt === maxRetries;
      if (isLastAttempt) {
        return {
          url,
          finalUrl: url,
          text: '',
          wordCount: 0,
          success: false,
          error: `Failed after ${maxRetries} attempts: ${err.message}`,
        };
      }

      console.log(`  Attempt ${attempt}/${maxRetries} failed: ${err.message}. Retrying in ${retryDelayMs / 1000}s...`);
      await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
    }
  }

  // Should not reach here, but just in case
  if (ownBrowser && browser) await browser.close();
  return { url, finalUrl: url, text: '', wordCount: 0, success: false, error: 'Unknown error' };
}

// ---------------------------------------------------------------------------
// Validation: test all three page types
// ---------------------------------------------------------------------------

async function validatePages() {
  console.log('Validating browser automation across 3 Unity page types...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const results = [];

  for (const [type, url] of Object.entries(TEST_URLS)) {
    console.log(`Testing ${type}: ${url}`);
    const result = await fetchPageContent(url, { browser });
    results.push({ type, ...result });

    const status = result.success ? 'PASS' : 'FAIL';
    const detail = result.error || `${result.wordCount} words`;
    console.log(`  ${status}: ${detail}\n`);
  }

  await browser.close();

  // Print summary table
  console.log('=== Validation Results ===\n');
  console.log('Type          | Status | Words | URL');
  console.log('------------- | ------ | ----- | ---');

  let passCount = 0;
  for (const r of results) {
    const status = r.success ? 'PASS' : 'FAIL';
    if (r.success) passCount++;
    const words = String(r.wordCount).padStart(5);
    console.log(`${r.type.padEnd(13)} | ${status.padEnd(6)} | ${words} | ${r.url}`);
  }

  console.log(`\nResult: ${passCount}/${results.length} page types passed (>= ${MIN_SUBSTANTIVE_WORDS} words)`);

  if (passCount < 2) {
    console.error('\nFAIL: Fewer than 2 page types returned substantive content.');
    process.exit(1);
  }

  // Document any failures for Plan 02's URL categorization
  const failures = results.filter((r) => !r.success);
  if (failures.length > 0) {
    console.log('\n=== Failure Analysis ===\n');
    for (const f of failures) {
      console.log(`${f.type}: ${f.error || 'Insufficient content'}`);
      console.log(`  URL: ${f.url}`);
      console.log(`  Words extracted: ${f.wordCount}`);
      console.log(`  May need: Different extraction approach or URL update\n`);
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Single-page test (default mode)
// ---------------------------------------------------------------------------

async function runSingleTest() {
  const testUrl = TEST_URLS.learn;
  console.log(`Browser automation proof-of-concept`);
  console.log(`Tool: Puppeteer (headless Chrome)`);
  console.log(`Target: ${testUrl}\n`);

  const result = await fetchPageContent(testUrl);

  if (result.success) {
    console.log(`SUCCESS: Extracted ${result.wordCount} words from ${result.finalUrl}`);
    console.log(`\nFirst 300 characters of content:\n`);
    console.log(result.text.substring(0, 300));
    console.log('\n...');
  } else {
    console.error(`FAIL: ${result.error || 'Insufficient content'}`);
    console.error(`Words extracted: ${result.wordCount}`);
    process.exit(1);
  }

  return result;
}

// ---------------------------------------------------------------------------
// CLI entry point
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

if (args.includes('--validate')) {
  validatePages().catch((err) => {
    console.error('Fatal error:', err.message);
    process.exit(1);
  });
} else {
  runSingleTest().catch((err) => {
    console.error('Fatal error:', err.message);
    process.exit(1);
  });
}
