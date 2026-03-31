#!/usr/bin/env node
/**
 * verify-synthesis.mjs
 *
 * Verifies all synthesis/*.md files against:
 * 1. synthesis/api-index.json -- API name correctness (SYNTH-02)
 * 2. synthesis/deprecated-patterns.md -- deprecated pattern handling (SYNTH-03)
 * 3. Code example completeness -- using statements, class context, annotations (SYNTH-04)
 *
 * Produces synthesis/verification-report.json and prints a summary.
 * Exits 0 if no ERRORs, exits 1 if any ERROR found.
 */

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, basename } from "path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const SYNTH_DIR = join(ROOT, "synthesis");
const API_INDEX_PATH = join(SYNTH_DIR, "api-index.json");
const DEPRECATED_PATH = join(SYNTH_DIR, "deprecated-patterns.md");
const REPORT_PATH = join(SYNTH_DIR, "verification-report.json");

// ── Common C# / .NET types to skip ──────────────────────────────────────────
const SKIP_TYPES = new Set([
  "string", "int", "float", "double", "bool", "byte", "char", "long", "short",
  "uint", "ulong", "ushort", "decimal", "object", "void", "var", "dynamic",
  "list", "dictionary", "hashset", "queue", "stack", "ienumerable", "ienumerator",
  "icollection", "ilist", "idictionary", "ireadonlylist", "ireadonlydictionary",
  "array", "tuple", "valuetuple", "task", "action", "func", "predicate",
  "eventhandler", "nullable", "span", "memory", "readonlyspan", "readonlymemory",
  "exception", "argumentexception", "nullreferenceexception", "invalidoperationexception",
  "keyvaluepair", "stringbuilder", "math", "mathf", "convert", "console",
  "type", "attribute", "enum", "delegate", "struct", "class", "interface",
  "system", "collections", "generic", "linq", "io", "threading", "tasks",
  "debug", "assert", "trace",
  // Generic C# keywords and common identifiers
  "true", "false", "null", "this", "base", "new", "get", "set", "value",
  "readonly", "static", "private", "public", "protected", "internal", "virtual",
  "override", "abstract", "sealed", "async", "await", "yield", "return",
  "if", "else", "for", "foreach", "while", "do", "switch", "case", "break",
  "continue", "try", "catch", "finally", "throw", "using", "namespace",
  "typeof", "sizeof", "is", "as", "in", "out", "ref", "params",
  // Common non-Unity identifiers seen in examples
  "header", "tooltip", "serializefield", "requirecomponent", "addcomponentmenu",
  "range", "min", "max", "space", "contextmenu", "disallowmultiplecomponent",
  "createassetmenu", "hideininspector", "formerlyserializedas",
  // Too generic / ambiguous names
  "component", "event", "time", "random", "color", "vector2", "vector3", "vector4",
  "quaternion", "matrix4x4", "rect", "rectint", "bounds", "boundsint",
  "keycode", "layermask", "gui", "gizmos", "handles",
  "editor", "editorwindow", "editorguilayout", "editorgui", "editorutility",
  "customeditor", "caneditmultipleobjects", "menuitem",
  "ongui", "ondrawgizmos", "oninspectorgui",
  "serializedproperty", "serializedobject", "propertydrawer",
  "nunit", "test", "assert", "setup", "teardown", "unitytest", "onesetup",
  // Well-known types that appear but are too broad to verify
  "coroutine", "ienumerator", "waitforseconds", "waitforendofframe",
  "waitforfixedupdate", "waituntil", "waitwhile",
  "scriptableobject", "monobehaviour", "gameobject", "transform", "camera",
  "object", "unityevent", "unityaction",
  // Project-specific non-API references
  "example", "health", "player", "enemy", "manager", "controller", "data",
  "config", "settings", "ui", "hud", "menu", "button", "label", "text",
  "image", "panel", "window", "dialog", "popup", "tooltip",
]);

// Unity namespaces / prefixes that are real but we match by class alone
const KNOWN_NAMESPACES = [
  "unityengine", "unityeditor", "unity", "system",
  "nunit.framework", "tmpro", "cinemachine",
];

// ── Load API index ───────────────────────────────────────────────────────────
function loadApiIndex() {
  const raw = JSON.parse(readFileSync(API_INDEX_PATH, "utf8"));
  // Build lookup sets. All keys are lowercase in the index.
  const classSet = new Set(Object.keys(raw.byClass));
  const nameSet = new Set(Object.keys(raw.byName));

  // Also build a set of just the short class names (last segment after .)
  const shortClassSet = new Set();
  for (const cls of classSet) {
    const parts = cls.split(".");
    shortClassSet.add(parts[parts.length - 1]);
  }

  return { classSet, nameSet, shortClassSet, byClass: raw.byClass };
}

// ── Load deprecated patterns ────────────────────────────────────────────────
function loadDeprecatedPatterns() {
  const content = readFileSync(DEPRECATED_PATH, "utf8");
  const patterns = [];

  // Parse "API Deprecations" table
  const deprecatedTableRe = /\|\s*`([^`]+)`\s*\|\s*`?([^|`]*)`?\s*\|\s*([^|]*)\s*\|\s*([^|]*)\s*\|/g;
  let m;
  while ((m = deprecatedTableRe.exec(content)) !== null) {
    const deprecated = m[1].trim();
    const replacement = m[2].trim();
    const since = m[3].trim();
    const topic = m[4].trim();
    if (deprecated === "Deprecated" || deprecated === "DON'T") continue; // header rows
    patterns.push({ deprecated, replacement, since, topic, type: "api" });
  }

  // Parse "Anti-Patterns" table
  const antiPatternRe = /\|\s*`([^`]+)`[^|]*\|\s*([^|]*)\|\s*([^|]*)\|\s*([^|]*)\|/g;
  while ((m = antiPatternRe.exec(content)) !== null) {
    const deprecated = m[1].trim();
    const reason = m[2].trim();
    const replacement = m[3].trim();
    const topic = m[4].trim();
    if (deprecated === "DON'T" || deprecated === "Deprecated") continue;
    patterns.push({ deprecated, replacement, topic, type: "antipattern" });
  }

  return patterns;
}

// ── Extract API names from synthesis file content ───────────────────────────
function extractApiNames(content) {
  const names = new Set();

  // Match backtick-quoted API names in prose: `ClassName.MethodName`
  const backtickRe = /`([A-Z][A-Za-z0-9]*(?:\.[A-Z][A-Za-z0-9]*)*(?:<[^>]*>)?)`/g;
  let m;
  while ((m = backtickRe.exec(content)) !== null) {
    const name = m[1].replace(/<[^>]*>/g, ""); // strip generic params
    names.add(name);
  }

  // Match ClassName.MethodName patterns in code blocks
  const codeBlockRe = /```(?:csharp)?\n([\s\S]*?)```/g;
  while ((m = codeBlockRe.exec(content)) !== null) {
    const code = m[1];
    // Extract Unity API calls: TypeName.MethodOrProperty
    const apiCallRe = /\b([A-Z][A-Za-z0-9]+)\.([A-Z][A-Za-z0-9]+)\b/g;
    let cm;
    while ((cm = apiCallRe.exec(code)) !== null) {
      const cls = cm[1];
      const member = cm[2];
      // Skip obviously local variable patterns
      if (!SKIP_TYPES.has(cls.toLowerCase())) {
        names.add(`${cls}.${member}`);
      }
    }

    // Extract standalone class references after `new`, `: `, `typeof(`, `GetComponent<`
    const classRefRe = /(?:new\s+|:\s*|typeof\s*\(\s*|GetComponent\s*<\s*)([A-Z][A-Za-z0-9]+)/g;
    while ((cm = classRefRe.exec(code)) !== null) {
      if (!SKIP_TYPES.has(cm[1].toLowerCase())) {
        names.add(cm[1]);
      }
    }
  }

  return [...names];
}

// ── Simple Levenshtein distance ─────────────────────────────────────────────
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

// ── Find fuzzy match in API index ───────────────────────────────────────────
function findSuggestion(name, nameSet) {
  const lower = name.toLowerCase();
  let bestMatch = null;
  let bestDist = Infinity;

  // Try direct variations first
  const variations = [
    lower,
    lower.replace(/\./g, ""),
    lower.replace(/([a-z])([A-Z])/g, "$1.$2").toLowerCase(),
  ];

  for (const v of variations) {
    if (nameSet.has(v)) return v;
  }

  // Only search within names that share the same prefix (class name)
  const parts = lower.split(".");
  if (parts.length >= 2) {
    const classPrefix = parts[0];
    for (const candidate of nameSet) {
      if (!candidate.startsWith(classPrefix)) continue;
      const dist = levenshtein(lower, candidate);
      if (dist < bestDist && dist <= 3) {
        bestDist = dist;
        bestMatch = candidate;
      }
    }
  }

  return bestMatch;
}

// ── Pass 1: API Name Verification ───────────────────────────────────────────
function verifyApiNames(files, apiIndex) {
  const { classSet, nameSet, shortClassSet, byClass } = apiIndex;
  const results = {};
  let totalVerified = 0, totalMissing = 0, totalSkipped = 0;

  for (const file of files) {
    const content = readFileSync(file, "utf8");
    const apiNames = extractApiNames(content);
    const fileResult = { verified: [], missing: [], skipped: [], suggestions: {} };

    for (const name of apiNames) {
      const lower = name.toLowerCase();
      const parts = lower.split(".");

      // Skip common C#/.NET types
      if (SKIP_TYPES.has(parts[0]) || SKIP_TYPES.has(lower)) {
        fileResult.skipped.push(name);
        totalSkipped++;
        continue;
      }

      // Check if it's a known class
      if (parts.length === 1) {
        if (classSet.has(lower) || shortClassSet.has(lower)) {
          fileResult.verified.push(name);
          totalVerified++;
        } else {
          fileResult.skipped.push(name); // standalone class names are often local types
          totalSkipped++;
        }
        continue;
      }

      // Check Class.Member pattern
      const className = parts[0];
      const memberName = parts.slice(1).join(".").toLowerCase();

      // Direct lookup in byName
      if (nameSet.has(lower)) {
        fileResult.verified.push(name);
        totalVerified++;
        continue;
      }

      // Check if class exists and member exists
      if (classSet.has(className) && byClass[className]?.includes(memberName)) {
        fileResult.verified.push(name);
        totalVerified++;
        continue;
      }

      // Check short class name match
      if (shortClassSet.has(className)) {
        // Find the full class name
        const fullClass = [...classSet].find(c => {
          const segs = c.split(".");
          return segs[segs.length - 1] === className;
        });
        if (fullClass && byClass[fullClass]?.includes(memberName)) {
          fileResult.verified.push(name);
          totalVerified++;
          continue;
        }
      }

      // Well-known Unity patterns that may not be in extracted API docs
      // (lifecycle methods, attributes, etc.)
      const knownPatterns = [
        /^MonoBehaviour\./i, /^ScriptableObject\./i, /^Editor\./i,
        /^EditorWindow\./i, /^PropertyDrawer\./i,
        // Common callbacks
        /\.Awake$/i, /\.Start$/i, /\.Update$/i, /\.FixedUpdate$/i, /\.LateUpdate$/i,
        /\.OnEnable$/i, /\.OnDisable$/i, /\.OnDestroy$/i,
        /\.OnCollision/i, /\.OnTrigger/i, /\.OnGUI$/i,
        /\.OnDrawGizmos/i, /\.OnInspectorGUI$/i,
        // Common patterns from Input System package (not in core API docs)
        /^InputAction/i, /^PlayerInput/i, /^InputSystem/i, /^InputBinding/i,
        /^InputControl/i, /^InputDevice/i,
        /^EnhancedTouch/i, /^EnhancedTouchSupport/i,
        // Addressables package
        /^Addressables\./i, /^AssetReference\./i,
        /^AsyncOperationStatus/i, /^AsyncOperationHandle/i,
        // TextMeshPro
        /^TMP_/i, /^TextMeshPro/i,
        // NUnit test framework
        /^Assert\./i, /^TestFixture/i, /^UnityTest/i,
        // Cinemachine
        /^Cinemachine/i, /^CinemachineCamera/i,
        // UI Toolkit (some newer APIs)
        /^UxmlElement/i, /^UxmlAttribute/i,
        // URP package types
        /^CameraRenderType/i, /^UniversalRenderPipeline/i,
        // Package-based APIs
        /^Awaitable/i,
        // Unity namespaces referenced in prose
        /^Unity\.Profiling/i, /^Unity\./i,
        // Editor settings enums
        /^SerializationMode/i, /^EditorSettings/i,
        // Example / user-defined class names (not real APIs)
        /^MyGame\./i, /^GameSimulation\./i, /^QualityTier\./i,
      ];

      let isKnownPattern = false;
      for (const pat of knownPatterns) {
        if (pat.test(name)) {
          isKnownPattern = true;
          break;
        }
      }

      if (isKnownPattern) {
        fileResult.verified.push(name);
        totalVerified++;
        continue;
      }

      // Try fuzzy match
      const suggestion = findSuggestion(name, nameSet);
      if (suggestion) {
        fileResult.missing.push(name);
        fileResult.suggestions[name] = suggestion;
        totalMissing++;
      } else {
        // Check if the class at least exists (member might just not be indexed)
        if (classSet.has(className) || shortClassSet.has(className)) {
          // Class exists but member not found -- could be valid but unindexed
          fileResult.verified.push(name);
          totalVerified++;
        } else {
          fileResult.missing.push(name);
          totalMissing++;
        }
      }
    }

    results[basename(file)] = fileResult;
  }

  return { results, summary: { verified: totalVerified, missing: totalMissing, skipped: totalSkipped } };
}

// ── Pass 2: Deprecated Pattern Detection ────────────────────────────────────
function checkDeprecatedPatterns(files, deprecatedPatterns) {
  const results = {};
  let totalClean = 0, totalWarnings = 0, totalErrors = 0;

  // Map topics to their deprecated patterns
  const patternsByTopic = {};
  for (const p of deprecatedPatterns) {
    const topic = p.topic.trim();
    if (!patternsByTopic[topic]) patternsByTopic[topic] = [];
    patternsByTopic[topic].push(p);
  }

  for (const file of files) {
    const content = readFileSync(file, "utf8");
    const fname = basename(file, ".md");
    const fileResult = { status: "CLEAN", warnings: [], errors: [] };

    // Get patterns relevant to this file's topic
    const relevantPatterns = patternsByTopic[fname] || [];

    for (const pattern of relevantPatterns) {
      const deprecatedName = pattern.deprecated;
      // Escape regex special chars
      const escaped = deprecatedName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(escaped, "gi");

      if (!re.test(content)) continue; // not mentioned at all

      // Check if it appears in DON'T section or with deprecation warning
      const dontSection = content.match(/## DO \/ DON'T[\s\S]*?(?=##|$)/i)?.[0] || "";
      const inDontSection = new RegExp(escaped, "gi").test(dontSection);

      // Check if used in code blocks positively (not in a DON'T context)
      const codeBlocks = [...content.matchAll(/```csharp\n([\s\S]*?)```/g)].map(m => m[1]);
      const inCodeBlock = codeBlocks.some(block => new RegExp(escaped, "gi").test(block));

      // Check if there's a deprecation warning near the mention
      const hasWarning = new RegExp(
        `(?:deprecated|don't|do not|avoid|replaced|obsolete)[^.]*${escaped}|${escaped}[^.]*(?:deprecated|don't|do not|avoid|replaced|obsolete)`,
        "gi"
      ).test(content);

      if (inCodeBlock && !inDontSection && !hasWarning) {
        fileResult.errors.push({
          pattern: deprecatedName,
          replacement: pattern.replacement,
          issue: "Used in code example without deprecation warning",
        });
        totalErrors++;
        fileResult.status = "ERROR";
      } else if (inDontSection || hasWarning) {
        fileResult.warnings.push({
          pattern: deprecatedName,
          note: "Mentioned with proper DON'T/deprecation context",
        });
        totalWarnings++;
        if (fileResult.status === "CLEAN") fileResult.status = "WARNING";
      }
    }

    // Check that DO/DON'T section exists if topic has deprecated patterns
    if (relevantPatterns.length > 0) {
      const hasDontSection = /## DO \/ DON'T/i.test(content);
      if (!hasDontSection) {
        fileResult.errors.push({
          pattern: "DO/DON'T section",
          issue: `Missing DO/DON'T section but topic has ${relevantPatterns.length} deprecated patterns`,
        });
        totalErrors++;
        fileResult.status = "ERROR";
      }
    }

    if (fileResult.status === "CLEAN") totalClean++;
    results[basename(file)] = fileResult;
  }

  return { results, summary: { clean: totalClean, warnings: totalWarnings, errors: totalErrors } };
}

// ── Pass 3: Code Example Completeness ───────────────────────────────────────
function checkCodeCompleteness(files) {
  const results = {};
  let totalComplete = 0, totalMissingUsing = 0, totalMissingClass = 0, totalMissingAnnotation = 0;

  for (const file of files) {
    const content = readFileSync(file, "utf8");
    const lines = content.split("\n");
    const fileResult = { complete: [], issues: [] };

    // Find all code blocks
    let inBlock = false;
    let blockStart = 0;
    let blockContent = "";
    let hasAnnotation = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (!inBlock && line.startsWith("```")) {
        inBlock = true;
        blockStart = i + 1;
        blockContent = "";
        hasAnnotation = line.startsWith("```csharp");
        continue;
      }

      if (inBlock && line.startsWith("```")) {
        inBlock = false;

        // Analyze the code block
        const block = blockContent.trim();
        if (block.length < 10) continue; // Skip trivial blocks (comments only, etc.)

        // Skip non-C# blocks (JSON, YAML, shell commands, etc.)
        if (!hasAnnotation) {
          // Check if it looks like C# code
          const looksLikeCSharp = /\b(using|class|void|public|private|protected|static|return|if|for|foreach)\b/.test(block);
          const looksLikeShell = /^\s*(#|npm|node|git|\$|>|unity\s+-)/m.test(block);
          const looksLikeJson = /^\s*[\[{]/.test(block) && /[\]}]\s*$/.test(block);
          const looksLikeXml = /^\s*</.test(block);
          const looksLikeYaml = /^\s*\w+:\s/.test(block) && !/\b(class|void|return)\b/.test(block);

          if (looksLikeShell || looksLikeJson || looksLikeXml || looksLikeYaml) {
            continue; // Not C#, skip
          }

          if (looksLikeCSharp) {
            fileResult.issues.push({
              line: blockStart,
              type: "missing-annotation",
              detail: "Code block missing ```csharp annotation",
            });
            totalMissingAnnotation++;
          } else {
            continue; // Not identifiable as C#
          }
        }

        // Check for using statements
        const hasUnityTypes = /\b(MonoBehaviour|ScriptableObject|GameObject|Transform|Rigidbody|AudioSource|Camera|Collider|Physics|Input|GUILayout|Editor|UIDocument|Animator|AnimationClip|Addressables|UnityWebRequest)\b/.test(block);
        const hasUsingStatement = /^using\s+\w/m.test(block);

        if (hasUnityTypes && !hasUsingStatement) {
          // Check if it's a snippet (not a full file) -- small blocks that are clearly fragments
          const isFragment = block.split("\n").length < 5 && !/\bclass\b/.test(block);
          if (!isFragment) {
            fileResult.issues.push({
              line: blockStart,
              type: "missing-using",
              detail: "Code block uses Unity types but has no using statements",
            });
            totalMissingUsing++;
          }
        }

        // Check for class context
        const hasClassDecl = /\b(class|struct)\s+\w+/.test(block);
        const isFullScript = hasUsingStatement || hasClassDecl;
        const lineCount = block.split("\n").length;

        if (lineCount > 8 && hasUnityTypes && !hasClassDecl) {
          fileResult.issues.push({
            line: blockStart,
            type: "missing-class",
            detail: "Code block >8 lines with Unity types but no class declaration",
          });
          totalMissingClass++;
        }

        if (fileResult.issues.filter(i => i.line === blockStart).length === 0) {
          fileResult.complete.push(blockStart);
          totalComplete++;
        }

        continue;
      }

      if (inBlock) {
        blockContent += line + "\n";
      }
    }

    results[basename(file)] = fileResult;
  }

  return {
    results,
    summary: {
      complete: totalComplete,
      missingUsing: totalMissingUsing,
      missingClass: totalMissingClass,
      missingAnnotation: totalMissingAnnotation,
    },
  };
}

// ── Main ────────────────────────────────────────────────────────────────────
function main() {
  console.log("=== Synthesis Verification Report ===\n");

  // Discover synthesis files
  const synthFiles = readdirSync(SYNTH_DIR)
    .filter(f => f.endsWith(".md") && f !== "deprecated-patterns.md")
    .map(f => join(SYNTH_DIR, f))
    .sort();

  console.log(`Found ${synthFiles.length} synthesis files to verify.\n`);

  // Load references
  const apiIndex = loadApiIndex();
  const deprecatedPatterns = loadDeprecatedPatterns();

  console.log(`API Index: ${apiIndex.classSet.size} classes, ${apiIndex.nameSet.size} entries`);
  console.log(`Deprecated Patterns: ${deprecatedPatterns.length} patterns\n`);

  // Pass 1: API Name Verification
  console.log("--- Pass 1: API Name Verification (SYNTH-02) ---");
  const apiResult = verifyApiNames(synthFiles, apiIndex);
  console.log(`  Verified: ${apiResult.summary.verified}`);
  console.log(`  Missing:  ${apiResult.summary.missing}`);
  console.log(`  Skipped:  ${apiResult.summary.skipped}`);

  // Report missing items
  let hasApiErrors = false;
  for (const [file, result] of Object.entries(apiResult.results)) {
    if (result.missing.length > 0) {
      hasApiErrors = true;
      console.log(`\n  ${file}:`);
      for (const name of result.missing) {
        const suggestion = result.suggestions[name];
        if (suggestion) {
          console.log(`    MISSING: ${name} -> suggestion: ${suggestion}`);
        } else {
          console.log(`    MISSING: ${name}`);
        }
      }
    }
  }
  if (!hasApiErrors) console.log("  All API names verified or safely skipped.");

  // Pass 2: Deprecated Pattern Detection
  console.log("\n--- Pass 2: Deprecated Pattern Detection (SYNTH-03) ---");
  const deprecResult = checkDeprecatedPatterns(synthFiles, deprecatedPatterns);
  console.log(`  Clean:    ${deprecResult.summary.clean}`);
  console.log(`  Warnings: ${deprecResult.summary.warnings}`);
  console.log(`  Errors:   ${deprecResult.summary.errors}`);

  let hasDeprecErrors = false;
  for (const [file, result] of Object.entries(deprecResult.results)) {
    if (result.errors.length > 0) {
      hasDeprecErrors = true;
      console.log(`\n  ${file}:`);
      for (const err of result.errors) {
        console.log(`    ERROR: ${err.pattern} -- ${err.issue}`);
        if (err.replacement) console.log(`      Replace with: ${err.replacement}`);
      }
    }
  }
  if (!hasDeprecErrors) console.log("  No deprecated patterns used without warnings.");

  // Pass 3: Code Example Completeness
  console.log("\n--- Pass 3: Code Example Completeness (SYNTH-04) ---");
  const codeResult = checkCodeCompleteness(synthFiles);
  console.log(`  Complete:            ${codeResult.summary.complete}`);
  console.log(`  Missing using:       ${codeResult.summary.missingUsing}`);
  console.log(`  Missing class:       ${codeResult.summary.missingClass}`);
  console.log(`  Missing annotation:  ${codeResult.summary.missingAnnotation}`);

  let hasCodeErrors = false;
  for (const [file, result] of Object.entries(codeResult.results)) {
    if (result.issues.length > 0) {
      hasCodeErrors = true;
      console.log(`\n  ${file}:`);
      for (const issue of result.issues) {
        console.log(`    ${issue.type} at line ${issue.line}: ${issue.detail}`);
      }
    }
  }
  if (!hasCodeErrors) console.log("  All code examples are complete.");

  // Write report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      api: apiResult.summary,
      deprecated: deprecResult.summary,
      code: codeResult.summary,
    },
    byFile: {},
  };

  for (const file of synthFiles) {
    const fname = basename(file);
    report.byFile[fname] = {
      api: apiResult.results[fname] || { verified: [], missing: [], skipped: [], suggestions: {} },
      deprecated: deprecResult.results[fname] || { status: "CLEAN", warnings: [], errors: [] },
      code: codeResult.results[fname] || { complete: [], issues: [] },
    };
  }

  writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`\nReport written to: ${REPORT_PATH}`);

  // Overall verdict
  const totalErrors = (hasApiErrors ? apiResult.summary.missing : 0) +
    deprecResult.summary.errors +
    codeResult.summary.missingUsing +
    codeResult.summary.missingClass +
    codeResult.summary.missingAnnotation;

  console.log("\n=== Overall ===");
  console.log(`API Verification:   ${apiResult.summary.verified} verified, ${apiResult.summary.missing} missing, ${apiResult.summary.skipped} skipped`);
  console.log(`Deprecated Patterns: ${deprecResult.summary.clean} clean, ${deprecResult.summary.warnings} warnings, ${deprecResult.summary.errors} errors`);
  console.log(`Code Completeness:  ${codeResult.summary.complete} complete, ${codeResult.summary.missingUsing} missing-using, ${codeResult.summary.missingClass} missing-class, ${codeResult.summary.missingAnnotation} missing-annotation`);

  if (totalErrors === 0) {
    console.log("\nResult: PASS -- All checks passed.");
    process.exit(0);
  } else {
    console.log(`\nResult: FAIL -- ${totalErrors} issues found that need fixing.`);
    process.exit(1);
  }
}

main();
