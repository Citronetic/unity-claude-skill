# Phase 2: Content Extraction - Context

**Gathered:** 2026-03-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Scrape all 46,183 URLs from the manifest (Learn: 13K, Manual: 3.5K, API: 29K), convert to clean Markdown, verify content quality (>100 words), and update the manifest with extraction status. Uses the Puppeteer pipeline and extract-page.mjs from Phase 1.

</domain>

<decisions>
## Implementation Decisions

### Batch & Scale Strategy
- **10 concurrent pages** — faster extraction, accept rate limit risk
- **Manifest-driven resume** — skip URLs with status "verified", resume from "pending". Naturally idempotent.
- **Auto-throttle** — detect 429/403 responses, automatically reduce concurrency and add delays, resume full speed after cooldown
- **Continuous with saves** — one long-running process, manifest updated after each page. Can be killed and resumed anytime.

### Source Prioritization
- **Order: Learn → Manual → API** — tutorials first (most skill-relevant), Manual second, API reference last (largest, 29K)
- **Phase 3 can start on completed sources** — once Learn is fully scraped, synthesis can begin while Manual/API scraping continues
- This means Phase 2 and Phase 3 can partially overlap

### Content Deduplication
- **During extraction** — compute content hash after extraction, mark duplicates in manifest immediately
- **Same content hash** — pages with identical or near-identical text content (after stripping navigation/chrome) are duplicates
- Duplicates are marked in manifest but original file is kept (not deleted)

### File Organization
- **By source + URL path** — `content/learn/...`, `content/manual/...`, `content/api/...` mirroring URL structure
- **URL-derived slug naming** — derive filename from URL path: `scripting/monobehaviour` → `scripting-monobehaviour.md`
- Subdirectories mirror the source site's URL structure for natural grouping

### Claude's Discretion
- Exact auto-throttle backoff algorithm (exponential, linear, etc.)
- How to handle pages that consistently fail after 5 retries
- Markdown conversion quality details (heading levels, code block formatting)
- Progress reporting format (stdout, log file, etc.)

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `scripts/browser-test.mjs` (315 lines): Puppeteer `fetchPageContent()` with retry logic, `validatePages()` — proven on all 3 source types
- `scripts/extract-page.mjs` (622 lines): `expandHiddenContent()`, `extractToMarkdown()`, `extractPage()` with CLI — handles tab expansion, content verification
- `scripts/discover-urls.mjs` (683 lines): Sitemap parsing, URL dedup — can be referenced for sitemap patterns
- `manifest.json` (46K entries): Full URL inventory with per-URL metadata schema

### Established Patterns
- Puppeteer-based browser automation (learn.unity.com blocks curl)
- Content selector picks element with most text content (avoids nav wrappers)
- 5-retry / 10s-wait for failed navigations
- >100 word threshold for content verification
- JSON manifest as single source of truth for extraction status

### Integration Points
- `manifest.json` drives the extraction loop (read pending URLs, write verified status)
- `content/` directory receives per-page .md files (now nested by source)
- Content hash in manifest enables dedup during extraction
- Phase 3 will consume completed source directories (Learn first)

</code_context>

<specifics>
## Specific Ideas

- User wants 100% coverage of all 46K URLs — no shortcuts
- Phase 3 overlap is explicitly allowed — synthesis can start on Learn while Manual/API extraction continues
- Auto-throttle is preferred over fixed delays — maximize throughput within site tolerance
- Existing test files (content/test-*.md) prove the extraction pipeline works end-to-end

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-content-extraction*
*Context gathered: 2026-03-30*
