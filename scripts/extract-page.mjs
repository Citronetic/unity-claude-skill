#!/usr/bin/env node

/**
 * extract-page.mjs - Page extraction pipeline for Unity documentation
 *
 * Core extraction pipeline that:
 * 1. Navigates to a URL using headless Chrome (Puppeteer)
 * 2. Expands hidden content (tabs, accordions, "show more" buttons)
 * 3. Extracts main content area as clean Markdown
 * 4. Verifies content quality (>100 substantive words)
 * 5. Writes output to file or stdout
 *
 * Uses browser automation patterns established in browser-test.mjs (Plan 01).
 *
 * Usage:
 *   node scripts/extract-page.mjs <url> [--output <filepath>]
 *   node scripts/extract-page.mjs --help
 *
 * Exit codes:
 *   0 = success (>100 words of substantive content)
 *   1 = failure (page load error, insufficient content, or other error)
 *
 * Requirements: SCRP-05 (hidden content expansion), SCRP-06 (content verification)
 */

import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 10_000;
const NAVIGATION_TIMEOUT_MS = 30_000;
const EXPANSION_WAIT_MS = 1_500; // Wait after clicking expandable elements
const MIN_SUBSTANTIVE_WORDS = 100;

const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

// ---------------------------------------------------------------------------
// Hidden content expansion (SCRP-05)
// ---------------------------------------------------------------------------

/**
 * Expands all hidden content on the page: tabs, accordions, "show more" buttons.
 * Returns the count of elements that were expanded.
 *
 * @param {import('puppeteer').Page} page
 * @returns {Promise<number>} Number of expandable elements clicked
 */
async function expandHiddenContent(page) {
  const expandedCount = await page.evaluate(() => {
    let clicked = 0;

    // --- Accordion / collapsible headers ---
    // Elements with aria-expanded="false" (standard WAI-ARIA pattern)
    const ariaCollapsed = document.querySelectorAll('[aria-expanded="false"]');
    for (const el of ariaCollapsed) {
      try {
        el.click();
        clicked++;
      } catch { /* skip inaccessible elements */ }
    }

    // Elements with common accordion/collapsible CSS classes
    const accordionSelectors = [
      '.accordion-header:not(.active)',
      '.accordion-button.collapsed',
      '.collapsible-header:not(.active)',
      '.collapse-toggle:not(.active)',
      '[data-toggle="collapse"]:not(.active)',
      '[data-bs-toggle="collapse"]:not([aria-expanded="true"])',
    ];
    for (const sel of accordionSelectors) {
      const els = document.querySelectorAll(sel);
      for (const el of els) {
        try {
          el.click();
          clicked++;
        } catch { /* skip */ }
      }
    }

    // --- Tab panels ---
    // Click all tabs to expose their content (each tab's panel will become visible)
    const tabSelectors = [
      '[role="tab"]:not([aria-selected="true"])',
      '.nav-tabs .nav-link:not(.active)',
      '.tab:not(.active)',
      '.tabs__tab:not(.tabs__tab--active)',
      // Unity-specific: platform toggle tabs
      '.platform-switcher .tab:not(.active)',
      '.switcher-option:not(.active)',
    ];
    for (const sel of tabSelectors) {
      const tabs = document.querySelectorAll(sel);
      for (const tab of tabs) {
        try {
          tab.click();
          clicked++;
        } catch { /* skip */ }
      }
    }

    // --- "Show more" / "Read more" buttons ---
    const showMoreSelectors = [
      'button',
      'a',
      '[role="button"]',
    ];
    for (const sel of showMoreSelectors) {
      const els = document.querySelectorAll(sel);
      for (const el of els) {
        const text = (el.textContent || '').toLowerCase().trim();
        if (
          text === 'show more' ||
          text === 'read more' ||
          text === 'see more' ||
          text === 'expand' ||
          text === 'expand all' ||
          text === 'show all'
        ) {
          try {
            el.click();
            clicked++;
          } catch { /* skip */ }
        }
      }
    }

    // --- Unity-specific expandable elements ---
    // Code example toggles (sometimes behind "Show code" buttons)
    const codeToggles = document.querySelectorAll(
      '.code-toggle:not(.active), .example-toggle:not(.active), [data-expand]:not(.expanded)'
    );
    for (const el of codeToggles) {
      try {
        el.click();
        clicked++;
      } catch { /* skip */ }
    }

    return clicked;
  });

  // Wait for expanded content to render
  if (expandedCount > 0) {
    await new Promise((resolve) => setTimeout(resolve, EXPANSION_WAIT_MS));
  }

  return expandedCount;
}

// ---------------------------------------------------------------------------
// HTML to Markdown conversion
// ---------------------------------------------------------------------------

/**
 * Extracts the main content area of a page and converts it to Markdown.
 * Runs inside page.evaluate() -- pure DOM manipulation, no external dependencies.
 *
 * @param {import('puppeteer').Page} page
 * @returns {Promise<string>} Markdown content
 */
async function extractToMarkdown(page) {
  return page.evaluate(() => {
    // Find the main content container (try progressively broader selectors)
    const contentSelectors = [
      'article',
      'main',
      '.tutorial-content',
      '.content-body',
      '.section-content',
      '.markdown-body',
      '.markdown',
      '.content',
      '#content-wrapper',
      '.documentation-content',
      // Unity docs specific
      '.section',
      '.scrollspy',
    ];

    let contentRoot = null;
    for (const sel of contentSelectors) {
      const el = document.querySelector(sel);
      if (el && el.textContent.trim().length > 200) {
        contentRoot = el;
        break;
      }
    }

    // Fallback to body if no content container found
    if (!contentRoot) {
      contentRoot = document.body;
    }

    // Remove noise elements from a cloned tree (don't modify the live page)
    const clone = contentRoot.cloneNode(true);
    const noiseSelectors = [
      'nav', 'header', 'footer',
      '.sidebar', '.side-nav', '.left-nav', '.toc',
      '.breadcrumb', '.breadcrumbs',
      '.cookie-banner', '.cookie-consent',
      '.ads', '.advertisement',
      '.social-share', '.share-buttons',
      '.feedback-form', '.rating',
      '.related-content', '.related-links',
      'script', 'style', 'noscript',
      'iframe',
      '.header', '.footer', '.navigation',
      '.search-box', '.search-form',
    ];
    for (const sel of noiseSelectors) {
      const els = clone.querySelectorAll(sel);
      for (const el of els) {
        el.remove();
      }
    }

    // Convert DOM tree to Markdown
    function nodeToMarkdown(node, depth = 0) {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
      }

      if (node.nodeType !== Node.ELEMENT_NODE) {
        return '';
      }

      const tag = node.tagName.toLowerCase();
      const children = Array.from(node.childNodes)
        .map((child) => nodeToMarkdown(child, depth))
        .join('');

      switch (tag) {
        // Headings
        case 'h1': return `\n\n# ${children.trim()}\n\n`;
        case 'h2': return `\n\n## ${children.trim()}\n\n`;
        case 'h3': return `\n\n### ${children.trim()}\n\n`;
        case 'h4': return `\n\n#### ${children.trim()}\n\n`;
        case 'h5': return `\n\n##### ${children.trim()}\n\n`;
        case 'h6': return `\n\n###### ${children.trim()}\n\n`;

        // Paragraphs and divs
        case 'p': return `\n\n${children.trim()}\n\n`;
        case 'br': return '\n';
        case 'hr': return '\n\n---\n\n';

        // Emphasis
        case 'strong':
        case 'b':
          return `**${children.trim()}**`;
        case 'em':
        case 'i':
          return `*${children.trim()}*`;

        // Code
        case 'code': {
          // Inline code (not inside a <pre>)
          if (node.parentElement && node.parentElement.tagName.toLowerCase() === 'pre') {
            return children;
          }
          return `\`${children.trim()}\``;
        }
        case 'pre': {
          // Fenced code block -- detect language from class
          const codeEl = node.querySelector('code');
          let lang = '';
          if (codeEl) {
            const classStr = codeEl.className || '';
            const langMatch = classStr.match(/(?:language-|lang-)(\w+)/);
            if (langMatch) {
              lang = langMatch[1];
            } else if (classStr.match(/\bcsharp\b|\bc#\b|\bcs\b/i)) {
              lang = 'csharp';
            } else if (classStr.match(/\byaml\b/i)) {
              lang = 'yaml';
            } else if (classStr.match(/\bjson\b/i)) {
              lang = 'json';
            } else if (classStr.match(/\bxml\b/i)) {
              lang = 'xml';
            } else if (classStr.match(/\bhlsl\b|\bshader\b/i)) {
              lang = 'hlsl';
            }
          }
          const codeContent = (codeEl || node).textContent.trim();
          return `\n\n\`\`\`${lang}\n${codeContent}\n\`\`\`\n\n`;
        }

        // Lists
        case 'ul':
        case 'menu':
          return `\n\n${children}\n\n`;
        case 'ol':
          return `\n\n${children}\n\n`;
        case 'li': {
          const parentTag = node.parentElement ? node.parentElement.tagName.toLowerCase() : 'ul';
          if (parentTag === 'ol') {
            // For numbered lists, find the index
            const items = Array.from(node.parentElement.children);
            const idx = items.indexOf(node) + 1;
            return `${idx}. ${children.trim()}\n`;
          }
          return `- ${children.trim()}\n`;
        }

        // Links
        case 'a': {
          const href = node.getAttribute('href') || '';
          const text = children.trim();
          if (!text) return '';
          if (href && href !== '#' && !href.startsWith('javascript:')) {
            return `[${text}](${href})`;
          }
          return text;
        }

        // Images
        case 'img': {
          const alt = node.getAttribute('alt') || 'image';
          return `[Image: ${alt}]`;
        }

        // Tables
        case 'table': {
          const rows = Array.from(node.querySelectorAll('tr'));
          if (rows.length === 0) return children;

          const tableData = rows.map((row) => {
            const cells = Array.from(row.querySelectorAll('th, td'));
            return cells.map((cell) => cell.textContent.trim().replace(/\|/g, '\\|'));
          });

          if (tableData.length === 0) return '';

          const maxCols = Math.max(...tableData.map((r) => r.length));
          const lines = [];

          // Header row
          const header = tableData[0] || [];
          while (header.length < maxCols) header.push('');
          lines.push(`| ${header.join(' | ')} |`);
          lines.push(`| ${header.map(() => '---').join(' | ')} |`);

          // Data rows
          for (let i = 1; i < tableData.length; i++) {
            const row = tableData[i];
            while (row.length < maxCols) row.push('');
            lines.push(`| ${row.join(' | ')} |`);
          }

          return `\n\n${lines.join('\n')}\n\n`;
        }

        // Blockquote
        case 'blockquote':
          return `\n\n> ${children.trim().replace(/\n/g, '\n> ')}\n\n`;

        // Definition lists (sometimes used in Unity docs)
        case 'dl':
          return `\n\n${children}\n\n`;
        case 'dt':
          return `\n**${children.trim()}**\n`;
        case 'dd':
          return `: ${children.trim()}\n`;

        // Skip these entirely
        case 'script':
        case 'style':
        case 'noscript':
        case 'iframe':
        case 'svg':
          return '';

        // Default: pass through children
        default:
          return children;
      }
    }

    const rawMarkdown = nodeToMarkdown(clone);

    // Clean up: collapse multiple blank lines, trim
    return rawMarkdown
      .replace(/\n{3,}/g, '\n\n')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/^\n+/, '')
      .replace(/\n+$/, '')
      + '\n';
  });
}

// ---------------------------------------------------------------------------
// Content verification (SCRP-06)
// ---------------------------------------------------------------------------

/**
 * Counts substantive words in markdown content, excluding code blocks and metadata.
 *
 * @param {string} markdown
 * @returns {number} Word count
 */
function countSubstantiveWords(markdown) {
  // Remove fenced code blocks
  let text = markdown.replace(/```[\s\S]*?```/g, '');
  // Remove inline code
  text = text.replace(/`[^`]+`/g, '');
  // Remove image placeholders
  text = text.replace(/\[Image:[^\]]*\]/g, '');
  // Remove markdown formatting characters
  text = text.replace(/[#*_\-|>]/g, ' ');
  // Remove URLs
  text = text.replace(/https?:\/\/\S+/g, '');
  // Count words
  const words = text.split(/\s+/).filter((w) => w.length > 0);
  return words.length;
}

// ---------------------------------------------------------------------------
// Page fetch with retry (reuses pattern from browser-test.mjs)
// ---------------------------------------------------------------------------

/**
 * Fetches a page, expands hidden content, extracts to Markdown, and verifies quality.
 *
 * @param {string} url
 * @param {object} [options]
 * @param {import('puppeteer').Browser} [options.browser] - Reuse an existing browser
 * @param {number} [options.maxRetries]
 * @param {number} [options.retryDelayMs]
 * @returns {Promise<{url: string, markdown: string, wordCount: number, expandedCount: number, success: boolean, error?: string}>}
 */
export async function extractPage(url, options = {}) {
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
      await page.setUserAgent(USER_AGENT);

      // Navigate
      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: NAVIGATION_TIMEOUT_MS,
      });

      // Check for error pages before doing expensive work
      const pageText = await page.evaluate(() => document.body.innerText);
      if (pageText.includes('Access Denied') || pageText.includes('Error 404') || pageText.includes('Page not found')) {
        const errorType = pageText.includes('Access Denied')
          ? 'Access Denied (403)'
          : '404 Not Found';
        await page.close();
        // Do not retry error pages -- they won't change
        return { url, markdown: '', wordCount: 0, expandedCount: 0, success: false, error: errorType };
      }

      // Expand hidden content (tabs, accordions, "show more")
      const expandedCount = await expandHiddenContent(page);

      // Extract content as Markdown
      const markdown = await extractToMarkdown(page);

      await page.close();

      // Verify content quality
      const wordCount = countSubstantiveWords(markdown);

      if (wordCount < MIN_SUBSTANTIVE_WORDS) {
        // Do not retry insufficient content -- the page loaded fine, just has little text
        if (ownBrowser && browser) await browser.close();
        return {
          url,
          markdown,
          wordCount,
          expandedCount,
          success: false,
          error: `Insufficient content: ${wordCount} words (minimum: ${MIN_SUBSTANTIVE_WORDS})`,
        };
      }

      if (ownBrowser && browser) await browser.close();
      return { url, markdown, wordCount, expandedCount, success: true };
    } catch (err) {
      if (page) {
        try { await page.close(); } catch { /* ignore */ }
      }

      const isLastAttempt = attempt === maxRetries;
      if (isLastAttempt) {
        if (ownBrowser && browser) {
          try { await browser.close(); } catch { /* ignore */ }
        }
        return {
          url,
          markdown: '',
          wordCount: 0,
          expandedCount: 0,
          success: false,
          error: `Failed after ${maxRetries} attempts: ${err.message}`,
        };
      }

      console.log(`  Attempt ${attempt}/${maxRetries} failed: ${err.message}. Retrying in ${retryDelayMs / 1000}s...`);
      await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
    }
  }

  // Should not reach here
  if (ownBrowser && browser) {
    try { await browser.close(); } catch { /* ignore */ }
  }
  return { url, markdown: '', wordCount: 0, expandedCount: 0, success: false, error: 'Unknown error' };
}

// ---------------------------------------------------------------------------
// CLI entry point
// ---------------------------------------------------------------------------

function printHelp() {
  console.log(`extract-page.mjs - Extract Unity documentation page content as Markdown

Usage:
  node scripts/extract-page.mjs <url> [--output <filepath>]
  node scripts/extract-page.mjs --help

Arguments:
  url                 URL of the page to extract
  --output <filepath> Write Markdown to file (default: stdout)
  --help              Show this help message

Exit codes:
  0  Success (>100 words of substantive content extracted)
  1  Failure (page error, insufficient content, or extraction error)

Features:
  - Expands hidden content (tabs, accordions, "show more" buttons)
  - Converts HTML to clean Markdown with code blocks and headings
  - Verifies content quality (>100 substantive words)
  - Retries failed page loads (5 attempts, 10s between retries)

Examples:
  node scripts/extract-page.mjs https://docs.unity3d.com/Manual/UnityManual.html
  node scripts/extract-page.mjs https://docs.unity3d.com/ScriptReference/MonoBehaviour.html --output content/test-api.md
`);
}

async function main() {
  const args = process.argv.slice(2);

  // --help flag
  if (args.includes('--help') || args.length === 0) {
    printHelp();
    process.exit(args.includes('--help') ? 0 : 1);
  }

  // Parse arguments
  const url = args.find((a) => !a.startsWith('--') && (args.indexOf(a) === 0 || args[args.indexOf(a) - 1] !== '--output'));
  const outputIdx = args.indexOf('--output');
  const outputPath = outputIdx !== -1 ? args[outputIdx + 1] : null;

  if (!url || url.startsWith('--')) {
    console.error('Error: URL is required as the first argument.');
    console.error('Usage: node scripts/extract-page.mjs <url> [--output <filepath>]');
    process.exit(1);
  }

  console.log(`Extracting: ${url}`);

  const result = await extractPage(url);

  // Log summary
  console.log(`  Words: ${result.wordCount}`);
  console.log(`  Tabs/Accordions expanded: ${result.expandedCount}`);
  console.log(`  Status: ${result.success ? 'PASS' : 'FAIL'}`);
  if (result.error) {
    console.log(`  Error: ${result.error}`);
  }

  if (result.success && outputPath) {
    // Ensure output directory exists
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, result.markdown, 'utf-8');
    console.log(`  Output: ${outputPath}`);
  } else if (result.success && !outputPath) {
    // Write to stdout
    console.log('\n--- Extracted Markdown ---\n');
    process.stdout.write(result.markdown);
  }

  process.exit(result.success ? 0 : 1);
}

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
