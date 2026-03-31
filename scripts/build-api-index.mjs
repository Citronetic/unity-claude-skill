#!/usr/bin/env node
/**
 * build-api-index.mjs
 *
 * Scans all content/api/*.md files and extracts API names from filenames.
 * Builds a searchable index: className -> members, and fullName -> contentFile.
 *
 * Filename conventions (all lowercase):
 *   - classname.md                          -> class page
 *   - classname.membername.md               -> method/static member
 *   - classname-membername.md               -> property/field
 *   - namespace.classname.md                -> namespaced class
 *   - namespace.classname.membername.md     -> namespaced method
 *   - namespace.classname-membername.md     -> namespaced property
 *   - classname-ctor.md                     -> constructor
 *
 * Output: synthesis/api-index.json
 */

import { readdirSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const API_DIR = 'content/api';
const OUTPUT = 'synthesis/api-index.json';

function parseApiFilename(filename) {
  // Remove .md extension
  const base = filename.replace(/\.md$/, '');

  // Split on the LAST hyphen to separate className from member
  // But some names have hyphens as part of the class (rare).
  // The pattern is: namespace.namespace.classname-member
  // Or: classname-member
  // Or: namespace.namespace.classname.method (dot for methods)
  // Or: classname.method

  // Strategy:
  // 1. If there's a hyphen, the last part after final hyphen in the "leaf" is the member (property/field)
  // 2. If no hyphen but multiple dots, the last dot-segment is the method/class
  // 3. If only one segment, it's a class page

  // First, handle the hyphen case: split on the first hyphen that follows the class name
  // The dots separate namespaces/class, the hyphen separates class from property
  const hyphenIdx = base.lastIndexOf('-');
  const dotParts = base.split('.');

  let className, memberName, fullName;

  if (hyphenIdx > 0) {
    // Has a hyphen -> property/field page or constructor
    const beforeHyphen = base.substring(0, hyphenIdx);
    const afterHyphen = base.substring(hyphenIdx + 1);

    // beforeHyphen could be "namespace.classname" or just "classname"
    // afterHyphen is the member name
    className = beforeHyphen;
    memberName = afterHyphen;

    // Convert class to PascalCase-style for display
    fullName = `${className}.${memberName}`;
  } else if (dotParts.length >= 2) {
    // No hyphen, has dots -> could be namespace.class or class.method
    // Heuristic: if last segment looks like a method (lowercase, common method names),
    // treat it as class.method. Otherwise treat whole thing as namespace.class.
    // Since we can't perfectly distinguish, we treat it as:
    //   - All but last dot-part = className (namespace-qualified)
    //   - Last dot-part = member (method)
    // UNLESS the whole thing is just "namespace.classname" (class page)

    // For class pages like "accessibility.accessibilityhierarchy.md",
    // we want className = "accessibility.accessibilityhierarchy", member = null

    // For method pages like "physics.raycast.md",
    // we want className = "physics", member = "raycast"

    // The convention seems to be: if file is a class page, it ends with the class name.
    // If it's a method page, it ends with the method name.
    // We can't always tell, but filename patterns suggest:
    //   - Class pages: the last segment IS the class name
    //   - Method pages: class.method

    // Let's use a simple heuristic: the first segment(s) form the class path,
    // and if there are method-like names at the end, that's the member.
    // For indexing purposes, we'll store class as all-but-last and member as last.

    className = dotParts.slice(0, -1).join('.');
    memberName = dotParts[dotParts.length - 1];
    fullName = base;
  } else {
    // Single segment, no dots or hyphens -> class page
    className = base;
    memberName = null;
    fullName = base;
  }

  return { className, memberName, fullName };
}

function main() {
  console.log('Scanning content/api/ directory...');

  const files = readdirSync(API_DIR).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} API files`);

  const byClass = {};
  const byName = {};
  let totalAPIs = 0;

  for (const file of files) {
    const { className, memberName, fullName } = parseApiFilename(file);
    const contentFile = `content/api/${file}`;

    // Index by class
    if (!byClass[className]) {
      byClass[className] = [];
    }
    if (memberName && !byClass[className].includes(memberName)) {
      byClass[className].push(memberName);
    }

    // Index by full name
    byName[fullName] = contentFile;
    totalAPIs++;
  }

  // Sort members within each class
  for (const cls of Object.keys(byClass)) {
    byClass[cls].sort();
  }

  const output = {
    generatedAt: new Date().toISOString(),
    totalAPIs,
    classCount: Object.keys(byClass).length,
    byClass,
    byName,
  };

  mkdirSync('synthesis', { recursive: true });
  writeFileSync(OUTPUT, JSON.stringify(output, null, 2));

  console.log(`\nTotal APIs indexed: ${totalAPIs}`);
  console.log(`Unique classes/namespaces: ${Object.keys(byClass).length}`);
  console.log(`Wrote ${OUTPUT}`);

  // Show top 10 largest classes
  const sorted = Object.entries(byClass)
    .map(([cls, members]) => [cls, members.length])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);

  console.log('\nTop 15 classes by member count:');
  for (const [cls, count] of sorted) {
    console.log(`  ${cls}: ${count} members`);
  }
}

main();
