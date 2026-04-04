# Phase 3: Content Synthesis - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Restructure 31,926 extracted markdown pages into concise, opinionated reference material verified against Unity 6.3. Produces intermediate synthesized notes per topic (not the final reference files — those are Phases 5-8). Filters out training-data-redundant content, verifies APIs, and replaces deprecated patterns.

</domain>

<decisions>
## Implementation Decisions

### Synthesis Approach
- **Curate + condense** — read all content per topic, extract the most useful patterns/guidance, write concise reference prose
- **Opinionated reference tone** — prescriptive: "Use X, not Y. Here's why." Clear DO/DON'T guidance. Like a senior dev's notes.
- **Full code examples** — complete scripts with comments, including using statements and class context. Most helpful even though it takes more space.
- **English only** — consistent with Phase 1 decision

### Knowledge Filtering
- **Moderate filter** — keep Unity-specific patterns, version-pinned APIs, opinionated guidance. Remove generic C#, basic OOP, obvious concepts.
- **Explicit DO/DON'T for deprecated patterns** — for each deprecated pattern, show: "DON'T use X (deprecated in Unity 6), DO use Y instead." Direct corrections.
- Apply "only add what Claude doesn't already know" — skip C# fundamentals, general programming concepts, obvious patterns

### API Verification Strategy
- **Cross-reference extracted API pages** — our 26K API reference pages are the ground truth. Any API mentioned in synthesized content must exist in our extracted docs.
- **Known deprecations only** — check against the documented Unity 6 deprecation list from research (PITFALLS.md). Practical and covers the important cases.
- Don't do a full API diff — trust extracted Unity 6.3 content as current

### Output Structure
- **Intermediate then final** — produce per-topic synthesized notes first, then reshape into the 16 reference files in Phases 5-8
- **Category tag from manifest** — use the page category field in manifest.json to group content by topic
- Intermediate output goes to a `synthesis/` directory, organized by the 16 reference file topics
- Each synthesis file should be self-contained with all relevant content for that topic

### Claude's Discretion
- Exact grouping of pages to topics when category tags are ambiguous
- How to handle content that spans multiple topics (e.g., physics + scripting)
- Level of detail for code examples vs. prose explanations
- How to structure the intermediate synthesis files internally

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `manifest.json` (46K entries) — has category tags per URL for content grouping
- `content/api/` (26,812 files) — API reference pages with Unity version tags
- `content/manual/` (3,250 files) — Manual reference pages
- `content/learn/` (1,860 files) — Tutorial pages
- `scripts/verify-extraction.mjs` — can be adapted for synthesis quality checks
- `.planning/research/PITFALLS.md` — contains known deprecated patterns list

### Established Patterns
- Content files are clean Markdown with code blocks and version tags
- Manifest tracks source, category, version, and content hash per URL
- Per-page .md files organized by source + URL path

### Integration Points
- `manifest.json` category field drives topic grouping
- Intermediate synthesis files feed into Phases 5-8 reference file creation
- API page content serves as ground truth for verification
- Deprecated patterns from PITFALLS.md inform DO/DON'T guidance

</code_context>

<specifics>
## Specific Ideas

- Full code examples (not snippets) — user prioritizes helpfulness over conciseness
- Opinionated tone is key — the skill should steer developers toward current best practices, not just document options
- Intermediate synthesis allows quality review before committing to final reference file format
- 26K API pages are ground truth for verification — any API name in synthesized content must be traceable to extracted docs

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 03-content-synthesis*
*Context gathered: 2026-04-01*
