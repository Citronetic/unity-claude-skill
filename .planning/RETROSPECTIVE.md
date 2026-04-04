# Retrospective

## Milestone: v1.0 — Unity Development Skill

**Shipped:** 2026-04-04
**Phases:** 9 | **Plans:** 18 | **Commits:** 83

### What Was Built
- Puppeteer-based scraping infrastructure for 46K Unity documentation URLs
- 31,926 pages extracted (API 91%, Manual 100%, Package-docs 100%, Learn 14%)
- 16 synthesized reference files with opinionated Unity 6+ guidance
- SKILL.md routing table with progressive disclosure architecture
- Published to GitHub (Citronetic/unity-claude-skill)

### What Worked
- **Parallel execution** — Phases 6+7 ran simultaneously, Phase 5 plans ran in parallel
- **Synthesis-to-reference pipeline** — Phase 3 synthesis files were so well-structured that Phases 5-8 were simple light edits (~3 min each)
- **Manifest-driven extraction** — Resumable, idempotent, handled interruptions gracefully
- **Sitemap-first URL discovery** — Orders of magnitude faster than BFS crawling

### What Was Inefficient
- **learn.unity.com rate limiting** — 40% failure rate, 0.1 pg/s effective speed. Should have deprioritized learn earlier
- **Agent directory confusion** — Executor agents ran in wrong directory (unity-test vs unity-skill) when spawned from parent workspace. Required re-running with explicit cd instructions
- **API 403 interruptions** — Agent rate limits killed long-running extraction batches. Manual batch management was needed
- **Initial scope overestimate** — 46K URLs was far beyond the 2-3K estimate. Could have scoped more carefully

### Patterns Established
- Light-edit synthesis-to-reference transforms (~3 min per file)
- Manifest-driven batch extraction with auto-throttle
- Single combined executor agent for simple parallel file operations
- Explicit directory paths in agent prompts to avoid workspace confusion

### Key Lessons
- Rate-limited sites need early detection and deprioritization
- Agent directory context must be explicit, not assumed
- Synthesis quality directly determines downstream phase speed
- 300-line reference file limit is achievable and practical

### Cost Observations
- Model mix: 100% Opus (quality profile)
- Sessions: ~5 across 3 days
- Notable: Phases 5-8 were very fast (~3 min each) thanks to Phase 3 synthesis quality

## Cross-Milestone Trends

| Metric | v1.0 |
|--------|------|
| Phases | 9 |
| Plans | 18 |
| Duration | 3 days |
| Avg plan time | ~10 min |
| Requirement completion | 57/58 (98%) |
