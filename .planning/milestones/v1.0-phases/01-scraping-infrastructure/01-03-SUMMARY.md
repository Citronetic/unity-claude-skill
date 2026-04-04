---
phase: 01-scraping-infrastructure
plan: 03
subsystem: infra
tags: [puppeteer, markdown-extraction, hidden-content, tabs, accordions, content-verification]

# Dependency graph
requires:
  - "01-01: Puppeteer-based fetchPageContent() with retry logic and Chrome automation"
provides:
  - "extractPage() function: fetches URL, expands hidden content, converts HTML to Markdown, verifies quality"
  - "extract-page.mjs CLI: takes URL, outputs Markdown file with exit code 0/1"
  - "Hidden content expansion: clicks tabs, accordions, aria-expanded, show-more buttons before extraction"
  - "Content verification: >100 substantive words (excluding code blocks and metadata)"
  - "Proven test extractions from all 3 Unity source types (Learn, Manual, ScriptReference)"
affects: [02-content-extraction]

# Tech tracking
tech-stack:
  added: []
  patterns: [html-to-markdown-dom-conversion, hidden-content-expansion, best-content-selector]

key-files:
  created:
    - scripts/extract-page.mjs
    - content/test-tutorial.md
    - content/test-manual.md
    - content/test-api.md
  modified: []

key-decisions:
  - "Content selector picks element with most text content (not first over threshold) to avoid shallow nav wrappers"
  - "CreatingGameplay.html returns 404; used UnityManual.html as manual test page"
  - "Code block language detection from CSS class patterns (language-X, lang-X, or specific language names)"
  - "Error pages (403, 404) are not retried; only navigation timeouts trigger retries"
  - "Insufficient content (<100 words) is not retried; page loaded successfully but lacks substance"

patterns-established:
  - "extractPage(url, options) pattern: returns {url, markdown, wordCount, expandedCount, success, error}"
  - "Best-content-selector: iterate all selectors, pick element with longest textContent"
  - "Hidden content expansion: click-and-wait with 1.5s delay after all expansions"

requirements-completed: [SCRP-05, SCRP-06]

# Metrics
duration: 13min
completed: 2026-03-30
---

# Phase 1 Plan 03: Hidden Content Expansion and Content Verification Pipeline Summary

**Puppeteer extraction pipeline converting Unity docs HTML to Markdown with tab/accordion expansion and >100-word content verification, proven on 3 source types**

## Performance

- **Duration:** 13 min
- **Started:** 2026-03-30T03:17:45Z
- **Completed:** 2026-03-30T03:31:07Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- Built extract-page.mjs with full HTML-to-Markdown conversion (headings, code blocks, lists, tables, emphasis, links, images)
- Implemented hidden content expansion clicking tabs, accordions, aria-expanded elements, and "show more" buttons
- Content verification enforces >100 substantive words (excluding code blocks and metadata)
- Validated extraction on all 3 Unity source types: Learn (832w), Manual (1344w), ScriptReference (2079w)
- Fixed content selector to pick element with most content rather than first matching selector

## Task Commits

Each task was committed atomically:

1. **Task 1: Build extraction script with tab/accordion expansion and content verification** - `08ff13b` (feat)
2. **Task 2: Validate extraction on test pages from each source type** - `c557ace` (feat)

## Files Created/Modified
- `scripts/extract-page.mjs` - Core extraction pipeline: expandHiddenContent(), extractToMarkdown(), extractPage(), CLI entry
- `content/test-tutorial.md` - Extracted learn.unity.com tutorial (832 words, 1 expansion)
- `content/test-manual.md` - Extracted docs.unity3d.com Manual landing page (1344 words, 4 expansions)
- `content/test-api.md` - Extracted docs.unity3d.com ScriptReference/MonoBehaviour (2079 words, 4 expansions)

## Decisions Made
- **Best-content selector over first-match**: ScriptReference pages have a `.content` wrapper with only 219 chars (navigation) while `.section` has 14528 chars (actual API docs). Changed to pick the selector matching element with the most text content.
- **CreatingGameplay.html is 404**: Unity restructured Manual URLs. Used UnityManual.html instead for the manual test page.
- **No retry on insufficient content**: Distinguishes between "page load failure" (retry worthwhile) and "page loaded but <100 words" (page exists but has little content -- retrying won't help).
- **Error pages not retried**: 403/404 pages are detected via page text content and returned immediately as failures.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed content selector for ScriptReference pages**
- **Found during:** Task 2
- **Issue:** ScriptReference pages have a `.content` element with only 219 chars of navigation text, which was selected before `.section` (14528 chars of actual API docs). Result was 4 words extracted.
- **Fix:** Changed selector logic from "first match over 200 chars" to "element with most text content across all candidate selectors"
- **Files modified:** scripts/extract-page.mjs
- **Verification:** MonoBehaviour.html now extracts 1722/2079 words successfully
- **Committed in:** c557ace

**2. [Rule 1 - Bug] Updated Manual test URL (CreatingGameplay.html returns 404)**
- **Found during:** Task 2
- **Issue:** Plan suggested `CreatingGameplay.html` which returns "Sorry... that page seems to be missing!" (404). Unity restructured Manual URLs.
- **Fix:** Used `UnityManual.html` instead, which is the Manual landing page with substantive content.
- **Files modified:** content/test-manual.md
- **Verification:** 1344 words extracted with 26 headings
- **Committed in:** c557ace

---

**Total deviations:** 2 auto-fixed (2 bugs)
**Impact on plan:** Both fixes necessary for correct extraction. No scope creep.

## Issues Encountered
- Navigation timeouts (30s) on first attempts are common for Unity docs -- the 5-retry strategy recovers reliably on second or third attempt
- ScriptReference pages include feedback form HTML in the `.section` container, adding some noise to extraction -- acceptable for Phase 2 where more granular noise selectors can be added

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- extract-page.mjs is ready for Phase 2 to import extractPage() function for bulk extraction
- All 3 Unity source types extract successfully with the same pipeline
- Known concern: navigation timeouts add ~10-20s per page on first attempt; bulk extraction in Phase 2 should reuse browser instances
- Known concern: ScriptReference feedback form noise in extracted content; Phase 2 may add `.section` sub-selectors for cleaner output

## Self-Check: PASSED

- [x] scripts/extract-page.mjs exists
- [x] content/test-tutorial.md exists (832 words)
- [x] content/test-manual.md exists (1344 words)
- [x] content/test-api.md exists (2079 words)
- [x] Commit 08ff13b exists (Task 1)
- [x] Commit c557ace exists (Task 2)

---
*Phase: 01-scraping-infrastructure*
*Completed: 2026-03-30*
