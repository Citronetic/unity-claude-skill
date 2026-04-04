---
phase: 10-2022-3-content-extraction
plan: 01
subsystem: scraping
tags: [sitemap, url-discovery, puppeteer, unity-2022.3, docs.unity3d.com]

# Dependency graph
requires:
  - phase: v1.0 (Phase 2)
    provides: discover-urls.mjs pattern and manifest schema
provides:
  - scripts/discover-urls-2022.mjs for 2022.3 URL discovery
  - manifest-2022.json with 56358 URLs across Manual, API, and Package sources
affects: [10-02 batch extraction, 11-content-synthesis]

# Tech tracking
tech-stack:
  added: []
  patterns: [streaming sitemap filter — parse 1.4M URLs filtering during parse not after]

key-files:
  created:
    - scripts/discover-urls-2022.mjs
    - manifest-2022.json
  modified: []

key-decisions:
  - "Optimized sitemap parsing: root sitemap has 28 sub-sitemaps (1.4M URLs) — filter during parse, not after"
  - "Included all com.unity.* packages from sitemap (28671 URLs after dedup) rather than restricting to a curated list"
  - "Version dedup for packages uses highest version number per canonical path"

patterns-established:
  - "Streaming sitemap filter: fetch each sub-sitemap, quick-check raw URL strings before parsing, discard non-matching immediately"
  - "Unified root sitemap approach: all three sources (manual, api, packages) discovered from single pass through root sitemap"

requirements-completed: [EXT22-01]

# Metrics
duration: 19min
completed: 2026-04-04
---

# Phase 10 Plan 01: Discover 2022.3 URLs Summary

**URL discovery script parses 1.4M sitemap URLs to extract 56,358 Unity 2022.3 docs (2123 Manual + 25564 API + 28671 Package) into manifest-2022.json**

## Performance

- **Duration:** 19 min
- **Started:** 2026-04-04T04:21:17Z
- **Completed:** 2026-04-04T04:40:25Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Created discover-urls-2022.mjs (654 lines) adapted from v1.0 discover-urls.mjs for 2022.3 LTS
- Produced manifest-2022.json with 56,358 URLs across all three documentation sources
- Key packages confirmed present: Input System (475 URLs), Addressables (1,455), URP (729)
- Zero Unity 6 / 6000.x URL contamination verified

## Task Commits

Each task was committed atomically:

1. **Task 1: Create discover-urls-2022.mjs** - `df1adcfd` (feat)
2. **Task 2: Run discovery to produce manifest-2022.json** - `e5c9c155` (feat)

## Files Created/Modified
- `scripts/discover-urls-2022.mjs` - URL discovery targeting 2022.3 docs, optimized sitemap parsing
- `manifest-2022.json` - 56,358 URL manifest (2,123 manual + 25,564 API + 28,671 package docs)

## Decisions Made

1. **Streaming sitemap filter instead of collect-all-then-filter** — The root sitemap at docs.unity3d.com has 28 sub-sitemaps with 50,000 URLs each (1.4M total). Original v1.0 approach of collecting all URLs would use excessive memory and time. Rewrote to filter during parsing with a quick string check (`quickRelevanceCheck`) before expensive URL object creation.

2. **Unified root sitemap pass for all sources** — Since 2022.3-specific sitemaps return 404, all three sources (manual, api, packages) are discovered from a single pass through the root sitemap. This avoids fetching 28 sub-sitemaps three separate times.

3. **Broad package inclusion** — Included all `com.unity.*` packages found in sitemap rather than restricting to a curated list. This yielded 28,671 package doc URLs after version deduplication (from 82,187 raw). The version dedup keeps only the highest version for each canonical page path.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Optimized sitemap parsing for massive root sitemap**
- **Found during:** Task 1 (initial dry-run attempt)
- **Issue:** Version-specific sitemaps all return 404. Falling through to root sitemap collected ALL 1.4M URLs into memory before filtering — extremely slow and memory-heavy.
- **Fix:** Rewrote `fetchSitemap` into `discoverFromRootSitemap` with streaming filter approach: parse each sub-sitemap individually, use `quickRelevanceCheck` string test before URL parsing, discard non-matching immediately.
- **Files modified:** scripts/discover-urls-2022.mjs
- **Verification:** Full discovery completes in ~2 minutes instead of timing out
- **Committed in:** df1adcfd (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 bug — performance issue)
**Impact on plan:** Essential optimization for correctness. Without it, the script would not complete in reasonable time. No scope creep.

## Issues Encountered
- 2022.3-specific sitemaps (Manual/sitemap.xml, ScriptReference/sitemap.xml, Documentation/sitemap.xml) all return 404 — Unity only provides a single root sitemap covering all versions
- Root sitemap has 28 sub-sitemaps with 50K URLs each (1.4M total) — required streaming filter approach

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- manifest-2022.json is ready for batch extraction (Plan 10-02)
- All 56,358 URLs are status "pending" awaiting extraction
- Extraction infrastructure (batch-extract.mjs, extract-page.mjs) from v1.0 can be adapted for 2022.3

## Self-Check: PASSED

- FOUND: scripts/discover-urls-2022.mjs
- FOUND: manifest-2022.json
- FOUND: 10-01-SUMMARY.md
- FOUND: commit df1adcfd (Task 1)
- FOUND: commit e5c9c155 (Task 2)

---
*Phase: 10-2022-3-content-extraction*
*Completed: 2026-04-04*
