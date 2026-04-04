# Unity Development Skill for Claude Code

## What This Is

A comprehensive Claude Code skill providing opinionated Unity 6+ game development guidance across 16 reference topics. Built by systematically extracting 31,926 pages from official Unity documentation (learn.unity.com, docs.unity3d.com Manual, and API Reference), synthesizing them into concise, version-pinned reference material with full code examples and DO/DON'T guidance. Published as an open-source installable skill at github.com/Citronetic/unity-claude-skill.

## Core Value

Accurate, opinionated Unity 6+ development guidance that steers developers toward current best practices and away from deprecated patterns — delivered through progressive disclosure within Claude's context window.

## Requirements

### Validated

- ✓ Scraping infrastructure (Puppeteer, 46K URL manifest) — v1.0
- ✓ Content extraction (31,926 pages: API 91%, Manual 100%, Package-docs 100%) — v1.0
- ✓ Content synthesis (16 topics, opinionated reference tone, full code examples) — v1.0
- ✓ Skill foundation (SKILL.md 90 lines, 6 file triggers, intent routing) — v1.0
- ✓ 16 reference files (152-299 lines each, all validated) — v1.0
- ✓ Quality validation (size, version annotations, DO/DON'T, activation, context budget 3.8%) — v1.0
- ✓ Published to GitHub (Citronetic/unity-claude-skill) — v1.0

### Active

(None — v1.0 shipped)

### Out of Scope

- DOTS/ECS — rapidly evolving in Unity 6.4+
- Multiplayer/Netcode — highly specialized
- HLSL shader programming — Shader Graph covers most needs
- VFX Graph advanced — Particle System basics suffice
- Unity source code analysis — tutorials only
- Non-official tutorial content — official docs only
- Video tutorial transcription — text content only

## Context

Shipped v1.0 with 4,190 lines of skill content (SKILL.md + 16 references).
Backed by 31,926 extracted pages from 3 Unity documentation sources.
Published at github.com/Citronetic/unity-claude-skill.
Target audience: developers using Claude Code for Unity projects.

## Constraints

- **Source**: Official Unity documentation (learn.unity.com, docs.unity3d.com)
- **Format**: Agent Skills open standard (SKILL.md + references/)
- **Size**: SKILL.md <500 lines, references <300 lines each
- **Coverage**: Unity 6+ (6000.x LTS) — URP, UI Toolkit, New Input System, Addressables

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Puppeteer over chrome-devtools-mcp | learn.unity.com blocks curl via TLS fingerprinting | ✓ Good |
| English sources primary, CN site deprioritized | CN site returns 403, English content is canonical | ✓ Good |
| Opinionated reference tone | "Use X, not Y" steers toward best practices | ✓ Good |
| Full code examples | Complete scripts with using statements, class context | ✓ Good |
| Progressive disclosure | SKILL.md routing table → references/*.md on demand | ✓ Good |
| 69.5% extraction coverage accepted | learn.unity.com rate-limited; API/Manual/Packages complete | ⚠️ Revisit |
| Single-folder installation | unity-development-guide/ folder users copy to ~/.claude/skills/ | ✓ Good |

---
*Last updated: 2026-04-04 after v1.0 milestone*
