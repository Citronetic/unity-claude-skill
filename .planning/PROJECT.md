# Unity Development Skill for Claude Code

## What This Is

A comprehensive Claude Code skill that provides Unity game engine development guidance — covering workflows, CLI tools, editor usage, scripting patterns, and best practices. Created by systematically reading and synthesizing the official Unity tutorial content from unity.com/cn/learn/get-started, ensuring complete coverage of all tutorial pages.

## Core Value

Every Unity development workflow, CLI command, and best practice from the official tutorials is captured in a single, accurate, actionable skill file — no gaps, no omissions.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Read all pages from the Unity "Get Started" tutorial hub using chrome-devtools-mcp
- [ ] Extract Unity Editor workflows (scene management, prefabs, UI, physics, etc.)
- [ ] Extract Unity CLI/command-line tool usage (Unity CLI, package manager, build commands)
- [ ] Extract scripting patterns (C# MonoBehaviour, lifecycle, components, events)
- [ ] Extract asset pipeline workflows (import, configure, optimize)
- [ ] Extract build and deployment workflows (platforms, player settings)
- [ ] Synthesize all content into a well-structured Claude Code skill file
- [ ] Ensure zero omissions — every tutorial page referenced and covered
- [ ] Use skill-creator conventions for proper skill file formatting
- [ ] Skill should be immediately usable for Unity development assistance

### Out of Scope

- Unity source code analysis — we're reading tutorials, not engine internals
- Non-official tutorial content — only unity.com official materials
- Video tutorial transcription — focus on text/web content only
- Advanced topics not covered in the get-started tutorials — stick to what's there

## Context

- The skill will be created as a Claude Code skill file (markdown-based)
- Chrome DevTools MCP will be used to navigate and read tutorial pages programmatically
- The Unity tutorial hub at unity.com/cn/learn/get-started is the primary source
- The skill-creator pattern in Claude Code provides the formatting conventions
- Target audience: developers using Claude Code who need Unity development assistance

## Constraints

- **Source**: Only official Unity tutorials from unity.com — ensures accuracy
- **Tool**: Must use chrome-devtools-mcp for web reading — ensures complete page content capture
- **Format**: Must follow Claude Code skill file conventions — ensures compatibility
- **Coverage**: 100% tutorial page coverage required — no selective reading

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use chrome-devtools-mcp for reading | Ensures full page content is captured including dynamic content | — Pending |
| Chinese Unity site (cn) | User specified this URL; may have localized content | — Pending |
| Fine granularity phases | Many tutorial pages to cover systematically | — Pending |

---
*Last updated: 2026-03-29 after initialization*
