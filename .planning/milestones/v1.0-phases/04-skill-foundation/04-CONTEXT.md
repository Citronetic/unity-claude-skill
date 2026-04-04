# Phase 4: Skill Foundation - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Create SKILL.md with valid YAML frontmatter, a routing table mapping user intents to the 16 reference files, and establish the references/ directory with progressive disclosure architecture. This is the skeleton — actual reference file content comes from Phases 5-8.

</domain>

<decisions>
## Implementation Decisions

### Skill Activation & Triggers
- **File extension triggers**: *.cs, *.unity, *.prefab, *.asset, *.asmdef, *.shader
- No meta files, no generic json/yaml (avoid false positives on non-Unity projects)
- Description should have front-loaded high-frequency keywords for activation matching

### Routing Table Design
- **By user intent** — map questions/tasks to reference files: "Working with physics?" → physics.md, "Setting up a project?" → project-setup.md
- Intent categories should cover the 16 reference file topics
- Fallback: if no specific intent matches, route to the most relevant general reference

### Skill Identity
- **Name**: "Unity Development Guide"
- Description should front-load: Unity Editor, C# MonoBehaviour, scripting, prefabs, scenes, physics, UI Toolkit, Addressables, build settings, URP
- Opinionated tone carried through from synthesis — "Use X, not Y"

### Claude's Discretion
- Exact description wording and keyword ordering
- Routing table format (markdown table vs. bullet list vs. conditional sections)
- How to structure the references/ directory (flat vs. grouped)
- SKILL.md body structure beyond the routing table (universal principles, quick tips)
- Whether to include a brief "what this skill covers" section at the top

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `synthesis/*.md` (16 files) — curated reference content ready to be reshaped into references/*.md in Phases 5-8
- `synthesis/deprecated-patterns.md` — DO/DON'T reference for the routing table
- `synthesis/api-index.json` — 26,894 API entries for cross-referencing
- `synthesis/topic-map.json` — page-to-topic assignments

### Established Patterns
- Agent Skills open standard: SKILL.md with YAML frontmatter, references/ directory
- 500-line limit for SKILL.md, 300-line limit per reference file
- Progressive disclosure: SKILL.md → references/*.md (one level deep, no nesting)
- Opinionated reference tone with full code examples

### Integration Points
- SKILL.md frontmatter `paths:` field takes the file extension triggers
- Routing table maps to references/*.md files (16 planned)
- Phases 5-8 will populate references/ with content from synthesis/
- Phase 9 will validate activation and context budget

</code_context>

<specifics>
## Specific Ideas

- Research identified Nice-Wolf-Studio/unity-claude-skills as a reference implementation (35 skills, 44K+ lines) — our skill is more focused but should follow the same structural patterns
- The skill-creator skill in Claude Code provides formatting conventions to follow
- Front-loaded keywords in description are critical for activation rate

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 04-skill-foundation*
*Context gathered: 2026-04-01*
