# Phase 6: Core Gameplay Systems - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Populate 3 reference files from synthesis content: physics.md, input-system.md, testing.md. Same light-edit pattern as Phase 5.

</domain>

<decisions>
## Implementation Decisions

### Content Reshaping
- **Light edit** — same pattern as Phase 5: strip synthesis metadata header, simplify title, preserve all content verbatim
- Keep 6-section structure (Key Concepts / Patterns / Code Examples / API Quick Reference / DO/DON'T / Version Notes)
- Under 300 lines per file
- Full code examples preserved, DO/DON'T tables preserved

### Claude's Discretion
- All formatting decisions follow Phase 5 established pattern
- Cross-references to foundational files (scripting-fundamentals.md, scripting-patterns.md) where relevant

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `synthesis/physics.md` (246 lines) — ready, under limit
- `synthesis/input-system.md` (268 lines) — ready, under limit
- `synthesis/testing.md` (301 lines) — at limit, may need light trim
- `references/physics.md` (7 lines) — placeholder to populate
- `references/input-system.md` (7 lines) — placeholder to populate
- `references/testing.md` (7 lines) — placeholder to populate

### Established Patterns
- Phase 5 light-edit: 3-min transforms, strip metadata header, preserve content
- SKILL.md routing table already wired to these files

</code_context>

<deferred>
## Deferred Ideas

None

</deferred>

---

*Phase: 06-core-gameplay-systems*
*Context gathered: 2026-04-01*
