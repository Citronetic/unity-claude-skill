---
phase: 02-content-extraction
plan: 01
subsystem: infra
tags: [puppeteer, batch-extraction, concurrency, sha256-dedup, content-hash, unity-version-tagging, manifest]

# Dependency graph
requires:
  - phase: 01-03
    provides: "extractPage() function for single-page HTML-to-Markdown conversion with retry and content verification"
  - phase: 01-02
    provides: "manifest.json with 46K URL entries and per-URL status tracking"
provides:
  - "batch-extract.mjs: concurrent extraction orchestrator with 10-page parallelism and auto-throttle"
  - "Content hash deduplication (SHA-256) marking duplicate pages in manifest"
  - "Unity version tagging from URL path or page content"
  - "Manifest-driven resume: skips verified/duplicate URLs, retries failed ones"
  - "Content files organized as content/{source}/{url-slug}.md"
  - "CLI interface: --source, --limit, --dry-run flags for targeted extraction"
affects: [02-02-PLAN, 03-content-synthesis]

# Tech tracking
tech-stack:
  added: [node-crypto-sha256]
  patterns: [semaphore-concurrency-pool, auto-throttle-backoff, content-hash-dedup, manifest-driven-resume]

key-files:
  created:
    - scripts/batch-extract.mjs
    - content/learn/ (14 test extraction files)
  modified:
    - manifest.json

key-decisions:
  - "Source priority order: learn-tutorial > learn-course > learn-project > learn-other > best-practice > manual > package-docs > api-reference"
  - "Content path derivation strips version prefix and Documentation/Manual|ScriptReference from docs.unity3d.com URLs"
  - "Duplicate detection uses exact SHA-256 match of full Markdown content; duplicateOf field points to canonical URL"
  - "Failed URLs remain eligible for retry on next run; insufficient content (<100 words) is terminal status"

patterns-established:
  - "Semaphore-based concurrency pool: acquire/release pattern for controlling parallel Puppeteer pages"
  - "Auto-throttle: detect 403/rate-limit, reduce to 2 concurrent, exponential backoff (30s/60s/120s), gradual recovery after 60s success"
  - "Manifest save after each page: enables kill-and-resume at any point"
  - "Content path convention: content/{learn|manual|api}/{url-slug}.md"

requirements-completed: [EXTR-02, EXTR-03, EXTR-04, EXTR-05]

# Metrics
duration: 8min
completed: 2026-03-30
---

# Phase 2 Plan 01: Batch Extraction Orchestrator Summary

**Concurrent batch extraction with 10-page parallelism, SHA-256 content dedup, auto-throttle on rate limits, and manifest-driven resume for 46K Unity doc URLs**

## Performance

- **Duration:** 8 min
- **Started:** 2026-03-30T04:18:44Z
- **Completed:** 2026-03-30T04:27:00Z
- **Tasks:** 2
- **Files modified:** 16

## Accomplishments
- Built batch-extract.mjs (450+ lines) with semaphore-based concurrency pool sharing a single Puppeteer browser
- Auto-throttle detects 403/rate-limit errors and reduces concurrency with exponential backoff, gradual recovery
- SHA-256 content hash deduplication correctly identified 2 duplicate pages in test batch
- Unity version tagging extracts version from URL path (6000.x) or page content scan
- Validated on 20-page test batch: 14 verified, 2 duplicates, 4 failed (404s), all manifest fields populated
- Resume verified: re-running skips already-extracted URLs (46167 eligible after first run)

## Task Commits

Each task was committed atomically:

1. **Task 1: Build batch extraction orchestrator** - `b433dd7` (feat)
2. **Task 2: Validate batch extraction on small test batch** - `9e0fec6` (feat)

## Files Created/Modified
- `scripts/batch-extract.mjs` - Batch extraction orchestrator with concurrency, throttle, dedup, version tagging, and CLI interface
- `content/learn/*.md` - 14 test extraction files from learn.unity.com tutorials
- `manifest.json` - Updated with extraction results (14 verified, 2 duplicate, 4 failed entries)

## Decisions Made
- **Source priority ordering**: Learn tutorials first (most skill-relevant), then courses/projects/other learn content, then manual, then API reference. This allows Phase 3 synthesis to start on Learn content while Manual/API extraction continues.
- **Content path derivation**: For docs.unity3d.com, strips the version prefix (e.g., `6000.0/Documentation/Manual/`) and lowercases the remaining path as the slug. For learn.unity.com, uses the full URL path with slashes replaced by dashes.
- **Duplicate detection**: Exact SHA-256 hash match of full Markdown content. The first extracted page becomes canonical; subsequent pages with the same hash are marked as duplicates with a `duplicateOf` pointer.
- **Insufficient content is terminal**: Pages with <100 words after extraction get status "insufficient" and are not retried. 404/403 error pages are also not retried (extractPage returns immediately).

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- 4 out of 20 test URLs returned 404 (learn.unity.com tutorials that have been removed or relocated). This is expected given the 46K URL inventory includes some stale sitemap entries. The batch extraction correctly marks these as "failed" in the manifest.
- Some learn.unity.com listing pages (e.g., `/tutorial`) extract cookie consent and error page boilerplate instead of tutorial content, but still pass the 100-word threshold. This is a pre-existing Phase 1 extraction quality issue, not caused by the batch orchestrator.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- batch-extract.mjs is ready for Plan 02-02 to execute the full 46K URL extraction run
- `--source learn` flag enables targeted extraction of the 13K learn URLs first
- Manifest-driven resume means the full run can be interrupted and continued at any time
- Content hash index persists across runs for cross-session dedup detection
- Known concern: learn.unity.com includes non-English tutorial translations (Korean, Japanese, Spanish) that may not be useful for the English skill. Phase 2 Plan 02 or Phase 3 can filter these.

## Self-Check: PASSED

- [x] scripts/batch-extract.mjs exists
- [x] content/learn/ directory with 14 files exists
- [x] Commit b433dd7 exists (Task 1)
- [x] Commit 9e0fec6 exists (Task 2)

---
*Phase: 02-content-extraction*
*Completed: 2026-03-30*
