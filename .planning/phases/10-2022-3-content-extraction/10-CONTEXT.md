# Phase 10: 2022.3 Content Extraction - Context

**Gathered:** 2026-04-04
**Status:** Ready for planning

<domain>
## Phase Boundary

Extract all Unity 2022.3 LTS documentation (Manual, API Reference, Package docs) as clean Markdown using existing v1.0 scraping infrastructure. Reuses Puppeteer, batch-extract.mjs, extract-page.mjs, and discover-urls.mjs with 2022.3-specific URL targets.

</domain>

<decisions>
## Implementation Decisions

### URL Targeting Strategy
- **Sitemap + version filter** — use docs.unity3d.com sitemaps, filter for /2022.3/ paths
- Same sitemap-first approach as v1.0 but targeting `docs.unity3d.com/2022.3/` instead of `docs.unity3d.com/6000.x/`
- **Package docs**: Extract Input System, Addressables, URP, etc. at their 2022.3-compatible versions
- No learn.unity.com extraction (Out of Scope for v1.1 — rate-limited)

### Content Storage
- **Separate directory**: `content-2022/` alongside existing `content/`
- Subdirectories: `content-2022/manual/`, `content-2022/api/`, `content-2022/packages/`
- **Separate manifest**: `manifest-2022.json` alongside existing `manifest.json`
- Clean separation — no risk of mixing Unity 6 and 2022.3 content

### Carried from v1.0
- Puppeteer automation (docs.unity3d.com extracts at ~2 pg/s, 0 failures)
- 10 concurrent pages, auto-throttle on rate limits
- SHA-256 content hash dedup
- >100 word content verification
- URL-derived slug filenames
- Per-page .md files organized by source + URL path

### Claude's Discretion
- Exact discover-urls.mjs modifications needed for 2022.3 sitemaps
- Whether to create a wrapper script or modify existing scripts with a --version flag
- How to handle 2022.3 pages that don't exist in Unity 6 (or vice versa)

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `scripts/browser-test.mjs` (315 lines) — Puppeteer fetchPageContent(), validatePages()
- `scripts/discover-urls.mjs` (683 lines) — sitemap parsing, URL dedup (needs version parameter)
- `scripts/batch-extract.mjs` (762 lines) — batch orchestrator with concurrency, throttle, dedup
- `scripts/extract-page.mjs` (622 lines) — page extraction with tab expansion, markdown conversion
- `manifest.json` — existing Unity 6 manifest (reference for schema)

### Established Patterns
- docs.unity3d.com pages extract reliably at ~2 pg/s with zero failures
- Sitemap-first discovery is orders of magnitude faster than BFS
- Version dedup keeps only target version docs

### Integration Points
- New manifest-2022.json follows same schema as manifest.json
- content-2022/ follows same structure as content/
- Phase 11 synthesis will read from content-2022/

</code_context>

<specifics>
## Specific Ideas

- User provided https://docs.unity3d.com/2022.3/Documentation//Manual/WhatsNew2022LTS.html as the starting reference
- The 2022.3 doc URLs follow pattern: docs.unity3d.com/2022.3/Documentation/Manual/ and /ScriptReference/
- Package docs may be at different URLs than Unity 6 packages

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 10-2022-3-content-extraction*
*Context gathered: 2026-04-04*
