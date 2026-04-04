# Phase 9: Quality & Validation - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Validate every reference file meets size and quality constraints, test skill activation, confirm total content fits within context budget. Cross-cutting validation of all prior phases' output.

</domain>

<decisions>
## Implementation Decisions

### Validation Checks
- QUAL-01: Every reference file under 300 lines
- QUAL-02: All reference files include version annotations (Unity 6+)
- QUAL-03: All reference files include explicit DO/DO NOT guidance
- QUAL-04: Skill activates correctly when asked Unity development questions
- QUAL-05: Skill content stays under 5% of Claude context window

### Claude's Discretion
- How to test activation (manual spot-check vs automated)
- How to calculate context window percentage
- How to fix any files that fail validation

</decisions>

<code_context>
## Existing Code Insights

### Files to Validate
- SKILL.md (90 lines)
- 16 references/*.md files (152-299 lines each)
- scripts/verify-synthesis.mjs can be adapted for final validation

</code_context>

<deferred>
## Deferred Ideas

None

</deferred>

---

*Phase: 09-quality-validation*
*Context gathered: 2026-04-01*
