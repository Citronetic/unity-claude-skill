---
phase: 02-content-extraction
verified: 2026-03-29T00:00:00Z
status: gaps_found
score: 3/5 must-haves verified
re_verification: false
gaps:
  - truth: "Full extraction runs to completion with 100% of manifest URLs having a non-pending status"
    status: failed
    reason: "9,837 learn.unity.com URLs remain in 'pending' status (never attempted). 4 best-practice URLs also remain pending. The original goal demanded 100% manifest coverage; the verify-extraction.mjs --check validation confirms this explicitly fails."
    artifacts:
      - path: "manifest.json"
        issue: "9,841 pending entries — 9,837 learn, 4 best-practice (docs.unity3d.com)"
    missing:
      - "Completion of learn.unity.com extraction for 9,837 pending URLs (rate-limited — acknowledged by user)"
      - "Extraction attempt for 4 pending best-practice docs.unity3d.com URLs"

  - truth: "The scraping manifest shows 100% of content URLs have status 'verified' (ROADMAP Success Criteria #1)"
    status: failed
    reason: "69.5% coverage (verified+duplicate). ROADMAP success criterion 1 and EXTR-01 require 100% manifest coverage. User approved proceeding to Phase 3 despite this gap."
    artifacts:
      - path: "manifest.json"
        issue: "46,183 total URLs; only 32,097 verified+duplicate (69.5%); 9,837 pending, 1,463 failed, 2,786 insufficient"
    missing:
      - "9,837 learn URLs still pending"
      - "1,463 failed URLs not retried/resolved (mostly 404s)"
      - "Note: user explicitly accepted this coverage level and approved Phase 3 proceed"
human_verification:
  - test: "Spot-check learn.unity.com content quality"
    expected: "Files in content/learn/ contain English-language tutorial text, not Japanese/Korean/Spanish translations"
    why_human: "Many learn files (e.g., tutorial-1-1-gyoyug-gwajeong-sogae.md) appear to be non-English translations, reducing usable coverage below the 1,860 verified count"
  - test: "Verify API content files contain actual API documentation"
    expected: "content/api/monobehaviour.md should contain the full API reference including code examples and parameter docs"
    why_human: "The spot-checked monobehaviour.md shows 316 lines but includes UI feedback boilerplate ('Leave feedback', 'Suggest a change'). Human should confirm real API content is present despite the clutter"
---

# Phase 2: Content Extraction Verification Report

**Phase Goal:** Every tutorial content page is scraped, converted to clean Markdown, and verified against the manifest
**Verified:** 2026-03-29
**Status:** gaps_found
**Re-verification:** No — initial verification

## Context: User-Approved Coverage Deviation

Before reviewing gaps, note that the user explicitly approved proceeding to Phase 3 at the current coverage level. The gaps below are factual — they represent real deviations from the stated goal — but the user has knowingly accepted them. The primary blocker (learn.unity.com rate-limiting) is an external infrastructure constraint, not an implementation failure.

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | batch-extract.mjs reads manifest, filters to pending, extracts in Learn->Manual->API priority order | VERIFIED | Script exists at 762 lines; dry-run confirms priority ordering; SOURCE_PRIORITY map confirmed |
| 2 | 10 concurrent pages with auto-throttle reducing on 429/403 | VERIFIED | Lines 300-399: semaphore pattern, ThrottleController class, exponential backoff 30s/60s/120s |
| 3 | Markdown files written to content/{source}/{slug}.md | VERIFIED | content/learn/ (1,870 files), content/manual/ (3,238 files), content/api/ (26,894 files) exist |
| 4 | Content hash computed per page, duplicates marked in manifest | VERIFIED | 175 duplicates confirmed; all have duplicateOf field; no verified entry missing contentHash |
| 5 | Unity version extracted from URL or page content | VERIFIED | 31,922 verified entries all have non-null unityVersion; distribution shows 6000.2 (25,036), 6000.1 (4,846), unknown (2,089) |
| 6 | Manifest updated after each page (status, wordCount, contentHash, unityVersion, contentFile) | VERIFIED | All 31,922 verified entries have all 5 fields populated |
| 7 | Kill-and-resume works — previously verified URLs are skipped | VERIFIED | 9,837 pending entries have lastAttempt=null, confirming they were never attempted; verified entries are skipped on re-run |
| 8 | A verification script reports exact coverage stats per source | VERIFIED | scripts/verify-extraction.mjs exists at 505 lines; produces coverage, dedup, version, quality, and validation reports |
| 9 | 100% of manifest URLs have a non-pending status | FAILED | 9,841 URLs still pending (9,837 learn + 4 best-practice) |
| 10 | Verified + duplicate >= 95% of total (EXTR-01 / SC#1) | FAILED | 69.5% (32,097 / 46,183) — learn.unity.com rate-limited |
| 11 | Every verified page has a Unity version tag | VERIFIED | verify-extraction.mjs --check PASS: "All verified have unityVersion" |
| 12 | Duplicate pages identified by content hash and marked | VERIFIED | 175 duplicates detected; all have duplicateOf pointer |

**Score:** 9/12 truths verified (3 truths failed, mapped to 2 gap items: both relate to incomplete learn coverage)

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `scripts/batch-extract.mjs` | Batch extraction orchestrator with concurrency, throttle, dedup, version tagging | VERIFIED | 762 lines (min 200) — substantially implemented |
| `scripts/verify-extraction.mjs` | Coverage reporting and extraction verification | VERIFIED | 505 lines (min 60) — full report + --check + --failures modes |
| `content/learn/` | Learn tutorial Markdown files | PARTIAL | 1,870 files present; 1,860 verified in manifest (14% of 13,158 learn URLs) |
| `content/manual/` | Manual Markdown files | VERIFIED | 3,238 files; 3,250 verified in manifest (100% of manual source) |
| `content/api/` | API reference Markdown files | VERIFIED | 26,894 files; 26,812 verified (91% of API — remaining are insufficient/failed) |

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `scripts/batch-extract.mjs` | `scripts/extract-page.mjs` | `import { extractPage } from './extract-page.mjs'` | WIRED | Line 29 — import confirmed |
| `scripts/batch-extract.mjs` | `manifest.json` | `readFileSync(MANIFEST_PATH)` / `writeFileSync(MANIFEST_PATH, ...)` | WIRED | Lines 125 and 131 confirmed |
| `scripts/batch-extract.mjs` | `content/` | `writeFileSync(contentPath, result.markdown)` | WIRED | Line 707 confirmed |
| `scripts/verify-extraction.mjs` | `manifest.json` | `readFileSync(MANIFEST_PATH, 'utf-8')` | WIRED | Line 53 confirmed |

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|------------|-------------|--------|----------|
| EXTR-01 | 02-01, 02-02 | All tutorial content pages are scraped with verified content (100% manifest coverage) | BLOCKED | 9,841 pending URLs; 69.5% coverage vs 100% target. User approved this gap. |
| EXTR-02 | 02-01 | Code blocks are preserved with proper formatting in extracted content | SATISFIED | 14 API files and 112 manual files contain `csharp` code blocks; extract-page.mjs provides code block conversion |
| EXTR-03 | 02-01, 02-02 | Duplicate content across pathways is de-duplicated by canonical URL | SATISFIED | 175 duplicates confirmed with SHA-256 dedup; all have duplicateOf pointer |
| EXTR-04 | 02-01 | Extracted content is converted to clean Markdown (not raw HTML) | SATISFIED | verify-extraction.mjs quality check confirms all spot-checked files are "markdown: yes"; content/manual/ files show proper Markdown tables, headers, lists |
| EXTR-05 | 02-01, 02-02 | Each extracted page is tagged with its Unity version | SATISFIED | All 31,922 verified entries have non-null unityVersion; verify-extraction.mjs PASS |

**Note on EXTR-01:** REQUIREMENTS.md shows EXTR-01 as unchecked (pending). This is correct. The requirement is formally blocked by the learn.unity.com rate-limiting constraint. EXTR-02 through EXTR-05 are all marked complete in REQUIREMENTS.md traceability table, which matches the evidence above.

**Orphaned requirements check:** No Phase 2 requirements appear in REQUIREMENTS.md that are absent from plan frontmatter. All 5 phase requirements (EXTR-01 through EXTR-05) are declared across the two plans.

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `manifest.json` | n/a | 9,837 learn URLs with status "pending" and lastAttempt=null | Warning | These URLs were never attempted — full coverage impossible without re-run |
| `manifest.json` | n/a | 4 best-practice docs.unity3d.com URLs still pending | Warning | Minor gap — 4 URLs from docs.unity3d.com (non-learn) that should be extractable without rate limit issues |
| `content/learn/` | n/a | Non-English content files present (JP, KO, ES translations) | Info | Reduces usable English coverage below 1,860; not filtered at extraction time |
| `content/api/monobehaviour.md` | n/a | UI feedback boilerplate in extracted content ("Leave feedback", "Suggest a change") | Info | Pre-existing Phase 1 extraction quality issue; content is still valid Markdown |

### Human Verification Required

#### 1. Confirm usable learn content ratio

**Test:** Open 5 random `.md` files in `content/learn/` and confirm they contain English-language tutorial content (not JP/KO/ES translations)
**Expected:** Majority of 1,860 verified learn files contain actionable English-language Unity tutorial content
**Why human:** File names reveal non-English translations exist (e.g., `tutorial-1-1-gyoyug-gwajeong-sogae.md`, `tutorial-1-1-configuracion-del-proyecto-vr.md`). Cannot programmatically determine what fraction of 1,860 files is in English vs. other languages.

#### 2. Confirm API content sufficiency for Phase 3

**Test:** Open `content/api/monobehaviour.md` and a few other heavily-used API files (`content/api/transform.md`, `content/api/rigidbody.md`)
**Expected:** Files contain parameter documentation, return types, and at least some C# code examples
**Why human:** The spot-check shows "code blocks: no" for the 5 randomly verified API files and the monobehaviour.md file shows feedback UI boilerplate. Human should judge whether the 26,812 API files provide sufficient reference for Phase 3 synthesis.

### Gaps Summary

Two related gaps block the stated phase goal, both rooted in learn.unity.com rate-limiting:

**Gap 1 — 9,841 pending URLs never attempted.** The verify-extraction.mjs --check reports "FAIL: 9,837 URLs still pending." These are all learn.unity.com or best-practice docs URLs. The 4 best-practice URLs (docs.unity3d.com domain) could potentially be extracted without rate-limit issues. The 9,837 learn URLs require either waiting out rate limits, distributed extraction, or accepting the 14% learn coverage.

**Gap 2 — Coverage at 69.5%, below the 95% threshold.** Even counting duplicates, only 32,097 of 46,183 URLs are resolved (verified+duplicate). The gap is entirely attributable to the 9,837 pending learn URLs plus 1,463 failed URLs. API (91%) and Manual (100%) sources are fully or near-fully covered.

**Accepted by user:** The user explicitly approved proceeding to Phase 3 with this coverage level. Phase 3 (Content Synthesis) can proceed with 31,922 verified pages covering 100% of Manual, 100% of Package-docs, 91% of API, and 14% of Learn.

EXTR-01 remains formally open in REQUIREMENTS.md and cannot be closed until learn coverage improves. EXTR-02 through EXTR-05 are correctly marked complete.

---

_Verified: 2026-03-29_
_Verifier: Claude (gsd-verifier)_
