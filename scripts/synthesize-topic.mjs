#!/usr/bin/env node
/**
 * synthesize-topic.mjs
 *
 * Reads topic-map.json pages for a given topic, extracts key content from
 * source markdown files, and outputs a structured synthesis draft.
 *
 * Usage:
 *   node scripts/synthesize-topic.mjs --topic=physics
 *   node scripts/synthesize-topic.mjs --all
 *
 * Priorities: manual > learn > api (manual pages are most reference-like)
 * Budget: up to 50 pages or 100K words per topic, whichever comes first.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

// --- Config ---
const MAX_PAGES = 50;
const MAX_WORDS = 100_000;
const SOURCE_PRIORITY = { manual: 0, 'learn-tutorial': 1, 'learn-course': 1, 'learn-project': 1, 'learn-other': 1, 'best-practice': 2, 'package-docs': 3, 'api-reference': 4 };

const TOPICS = [
  'project-setup', 'editor-workflows', 'scripting-fundamentals', 'scripting-patterns',
  'physics', 'input-system', 'testing', 'rendering-2d', 'rendering-3d',
  'ui-toolkit', 'animation', 'audio', 'build-deploy', 'cli-tools',
  'asset-pipeline', 'mobile-platform'
];

// Non-English filename patterns (skip these)
const NON_ENGLISH_RE = /\b(como|para|avec|usando|leccio|lecci|tutori[ae]l-[a-z]{2}[-_]|hoejeon|beoteun|yong|mulri|ecsyong|cuga|agregar|comenzar|crear|utilizar|configurar|programar|diseno|eneoji|gaenyeom|sogae|jeunggang|teugsu|aegni|geonchug|ganeung|aengke|gyeongheom)\b/i;

// Generic C# filter keywords — skip pages that are purely about these
const GENERIC_CS_RE = /^(variables?|loops?|conditionals?|classes|interfaces|oop|object.oriented|inheritance|polymorphism|encapsulation|data.types|arrays?|lists?|dictionaries?)$/i;

function loadTopicMap() {
  return JSON.parse(readFileSync(join(ROOT, 'synthesis', 'topic-map.json'), 'utf8'));
}

function loadDeprecatedPatterns() {
  const raw = readFileSync(join(ROOT, 'synthesis', 'deprecated-patterns.md'), 'utf8');
  return raw;
}

function prioritizePages(pages) {
  // Sort by source priority, then by wordCount descending
  return [...pages].sort((a, b) => {
    const pa = SOURCE_PRIORITY[a.source] ?? 5;
    const pb = SOURCE_PRIORITY[b.source] ?? 5;
    if (pa !== pb) return pa - pb;
    return b.wordCount - a.wordCount;
  });
}

function isNonEnglish(page) {
  return NON_ENGLISH_RE.test(page.contentFile || '') || NON_ENGLISH_RE.test(page.url || '');
}

function extractCodeBlocks(content) {
  const blocks = [];
  const re = /```(\w*)\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    blocks.push({ lang: m[1] || 'csharp', code: m[2].trim() });
  }
  return blocks;
}

function extractSections(content) {
  const sections = [];
  const lines = content.split('\n');
  let currentHeading = '';
  let currentBody = [];

  for (const line of lines) {
    const hMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (hMatch) {
      if (currentHeading) {
        sections.push({ heading: currentHeading, body: currentBody.join('\n').trim() });
      }
      currentHeading = hMatch[2];
      currentBody = [];
    } else {
      currentBody.push(line);
    }
  }
  if (currentHeading) {
    sections.push({ heading: currentHeading, body: currentBody.join('\n').trim() });
  }
  return sections;
}

function getDeprecatedForTopic(deprecatedMd, topicName) {
  const lines = deprecatedMd.split('\n');
  const relevant = [];
  for (const line of lines) {
    if (line.includes('|') && line.toLowerCase().includes(topicName)) {
      relevant.push(line.trim());
    }
  }
  return relevant;
}

function readPage(contentFile) {
  const fullPath = join(ROOT, contentFile);
  if (!existsSync(fullPath)) return null;
  try {
    return readFileSync(fullPath, 'utf8');
  } catch {
    return null;
  }
}

function synthesizeTopic(topicName, topicMap, deprecatedMd) {
  const pages = topicMap.topics[topicName];
  if (!pages || pages.length === 0) {
    console.warn(`No pages for topic: ${topicName}`);
    return null;
  }

  // Prioritize and filter
  const sorted = prioritizePages(pages).filter(p => !isNonEnglish(p));

  // Budget: up to MAX_PAGES or MAX_WORDS
  let wordBudget = MAX_WORDS;
  const selected = [];
  for (const page of sorted) {
    if (selected.length >= MAX_PAGES) break;
    if (wordBudget <= 0) break;
    selected.push(page);
    wordBudget -= page.wordCount;
  }

  // Count by source
  const bySrc = {};
  for (const p of selected) {
    bySrc[p.source] = (bySrc[p.source] || 0) + 1;
  }

  // Read and extract content from selected pages
  const allCodeBlocks = [];
  const allSections = [];
  let pagesRead = 0;

  for (const page of selected) {
    const content = readPage(page.contentFile);
    if (!content) continue;
    pagesRead++;

    const blocks = extractCodeBlocks(content);
    allCodeBlocks.push(...blocks);

    const sections = extractSections(content);
    allSections.push(...sections);
  }

  // Get deprecated patterns for this topic
  const deprecated = getDeprecatedForTopic(deprecatedMd, topicName);

  // Build output
  const timestamp = new Date().toISOString().split('T')[0];
  const srcSummary = Object.entries(bySrc).map(([k, v]) => `${k}(${v})`).join(', ');

  const output = [
    `# ${topicName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} -- Synthesis Notes`,
    '',
    `> Source: ${selected.length} pages from ${srcSummary}`,
    `> Generated: ${timestamp}`,
    `> Status: DRAFT -- needs manual curation`,
    '',
    '## Key Concepts',
    '',
    '[Extracted key concepts -- to be curated]',
    '',
    '## Patterns & Workflows',
    '',
    '[Step-by-step patterns rewritten as concise reference]',
    '',
    '## Code Examples',
    '',
    ...allCodeBlocks.slice(0, 10).map(b =>
      `\`\`\`${b.lang}\n${b.code}\n\`\`\``
    ),
    '',
    '## API Quick Reference',
    '',
    '[Key APIs for this topic]',
    '',
    '## DO / DON\'T',
    '',
    ...deprecated.length > 0
      ? deprecated
      : ['[No deprecated patterns found for this topic]'],
    '',
    '## Version Notes',
    '',
    '[Unity 6.x specific changes]',
    '',
  ];

  return output.join('\n');
}

function main() {
  const args = process.argv.slice(2);
  const topicArg = args.find(a => a.startsWith('--topic='));
  const runAll = args.includes('--all');

  if (!topicArg && !runAll) {
    console.error('Usage: node synthesize-topic.mjs --topic=<name> | --all');
    process.exit(1);
  }

  const topicMap = loadTopicMap();
  const deprecatedMd = loadDeprecatedPatterns();
  const outDir = join(ROOT, 'synthesis');
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const topics = runAll ? TOPICS : [topicArg.split('=')[1]];

  for (const topic of topics) {
    console.log(`Synthesizing: ${topic}...`);
    const result = synthesizeTopic(topic, topicMap, deprecatedMd);
    if (result) {
      const outPath = join(outDir, `${topic}.md`);
      writeFileSync(outPath, result, 'utf8');
      console.log(`  -> ${outPath} (${result.split('\n').length} lines)`);
    }
  }

  console.log('Done.');
}

main();
