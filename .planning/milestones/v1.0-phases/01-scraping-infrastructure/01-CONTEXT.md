# Phase 1: Scraping Infrastructure - Context

**Gathered:** 2026-03-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Set up browser automation to reliably read Unity tutorial pages, map the complete URL tree across multiple Unity documentation sources, and create a JSON manifest system to track extraction status per URL. This phase delivers the infrastructure — actual content extraction happens in Phase 2.

</domain>

<decisions>
## Implementation Decisions

### Site & Language Strategy
- Final skill content will be in **English**
- **Primary source: learn.unity.com** (English) — guaranteed accessible, structured pathways
- **Supplementary source: docs.unity3d.com** (Unity Manual) — for reference topics not covered in tutorials
- CN site (unity.com/cn) is deprioritized — attempt as bonus only if English sources are insufficient
- If CN site blocks automation, skip it entirely — English content is canonical

### Browser Tool Choice
- **Try both**: Start with chrome-devtools-mcp (more granular control), fall back to `claude --chrome` if issues arise
- For hidden content behind tabs/accordions: **click-and-wait** approach using `evaluate_script` to click all expandable elements, wait 1-2s, then extract
- Retry strategy: **5 retries with 10-second waits** for failed/empty page loads
- Content verification: confirm each page has >100 words of substantive content before marking as scraped

### Manifest Design
- Format: **JSON** — structured, easy to parse programmatically
- Storage: **Per-page .md files** in a `content/` directory — one markdown file per tutorial page
- Metadata tracked per URL:
  - Status (pending/scraped/verified/failed)
  - Word count
  - Last attempt timestamp
  - Content hash (for deduplication and change detection)
  - Unity version tag (detected from page content)
  - Page category (scripting, physics, UI, etc.)

### Content Scope
- **Unity Learn pathways**: Full pathways — all units and tutorials within "Unity Essentials" and "Junior Programmer" (estimated 50-100 pages)
- **Unity Manual (docs.unity3d.com)**: Core manual sections (Working in Unity, Scripting, 2D/3D, UI, Physics, Animation, Audio, Build)
- **Best Practice Guides**: Included — high-value opinionated content
- **Package documentation**: Included (Input System, Addressables, UI Toolkit, etc.)
- **API scripting reference**: **Full reference** — all API pages (2000+ pages, very ambitious)
- Total estimated scope: 2000-3000+ pages across all sources

### Claude's Discretion
- Exact URL tree discovery algorithm (BFS vs DFS, link following strategy)
- Manifest file naming conventions
- How to categorize pages automatically
- Optimal page load timeouts

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — greenfield project, no existing code

### Established Patterns
- None — first phase

### Integration Points
- Manifest JSON will be consumed by Phase 2 (Content Extraction) to drive the scraping loop
- Per-page .md files will be consumed by Phase 3 (Content Synthesis) for restructuring
- Content hash enables deduplication across learn.unity.com and docs.unity3d.com overlap

</code_context>

<specifics>
## Specific Ideas

- User explicitly wants 100% coverage — no selective reading, no shortcuts
- Full API scripting reference is included despite massive scope — user prioritizes completeness over speed
- Both learn.unity.com and docs.unity3d.com are primary sources — not just the tutorial hub
- The manifest system must be robust enough to track 2000-3000+ URLs reliably

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-scraping-infrastructure*
*Context gathered: 2026-03-30*
