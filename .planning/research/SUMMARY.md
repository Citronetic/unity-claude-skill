# Project Research Summary

**Project:** Unity Development Skill for Claude Code
**Domain:** AI agent skill creation via web scraping and knowledge synthesis
**Researched:** 2026-03-29
**Confidence:** HIGH

## Executive Summary

This project builds a Claude Code skill that teaches Claude how to assist with Unity 6.3 game development. The domain is unusual: the output is not a software application but a structured set of markdown instruction files following the Agent Skills open standard (agentskills.io). The primary content source is `unity.com/cn/learn/get-started` read via browser automation, synthesized into progressive-disclosure skill files targeting Unity 6000.x LTS. A comprehensive reference implementation already exists (Nice-Wolf-Studio/unity-claude-skills, 35 skills, 44,500+ lines), which means this project's value comes from its focused beginner-to-intermediate scope and explicit sourcing from the CN tutorial hub.

The recommended approach is a multi-skill plugin architecture: a SKILL.md entry point under 500 lines acting as a routing table, plus ~16 domain-specific reference files under 300 lines each. Content is scraped using Claude Code's built-in Chrome integration (preferred) or chrome-devtools-mcp (fallback), then synthesized into opinionated, version-pinned guidance that overrides Claude's training-data defaults where they diverge from Unity 6 best practices. The content build follows a clear four-phase dependency order: Foundation (editor + scripting) -> Core Gameplay Systems (physics, input, testing) -> Presentation Layer (rendering, UI, animation, audio) -> Production (build, deploy, asset pipeline).

The critical risks are operational: the Unity website uses JavaScript-heavy rendering that causes silent content extraction failures, hidden content behind tabs/accordions that naive scraping misses, and the possibility that the Chinese tutorial hub either returns 403 errors or produces content that differs substantially from the English canonical tutorials. A scraping manifest with per-URL verification is non-negotiable to prevent silently incomplete content. A secondary risk is token budget: Unity's domain is vast enough to violate the 500-line SKILL.md limit if not aggressively enforced through progressive disclosure.

## Key Findings

### Recommended Stack

The project uses no traditional runtime dependencies. The "stack" is a set of tools and output formats. Chrome integration (via `claude --chrome` or chrome-devtools-mcp) handles web reading; the Agent Skills specification defines the output format; Unity 6.3 LTS (6000.3, supported through Dec 2027) is the target knowledge domain. The SKILL.md + references/ pattern with YAML frontmatter is the required output format — the spec is adopted across Claude Code, Codex CLI, VS Code, Cursor, and 20+ other platforms.

**Core technologies:**
- Agent Skills 1.0 (SKILL.md + YAML): output format standard — universal portability across AI coding assistants
- Chrome integration / chrome-devtools-mcp: tutorial reading — only tool capable of rendering Unity's JS-heavy site
- Unity 6.3 LTS (6000.3): target knowledge domain — current LTS, supported Dec 2027
- Git: skill artifact versioning — standard
- Multi-skill plugin layout (`.claude-plugin/` + `skills/`): content organization — Unity domain too large for a single SKILL.md

**What NOT to use:**
- WebFetch: returns 403 on unity.com, cannot render JS-dependent content
- Single monolithic SKILL.md: violates 500-line limit, degrades Claude performance
- Raw tutorial transcription: skill content must be synthesized reference material, not pedagogical walkthroughs

### Expected Features

Features are organized by content domain rather than product features. The skill must cover Unity development comprehensively, with priority tier guiding build order.

**Must have (table stakes — Priority 0/1):**
- Editor & Project Fundamentals (Unity Hub, interface, scenes, GameObjects, Prefabs, folder structure)
- C# Scripting Fundamentals (MonoBehaviour lifecycle, component patterns, coroutines, events, ScriptableObjects, serialization, async/await)
- Physics (Rigidbody, Colliders, triggers, raycasting, callbacks, 2D variants)
- Rendering Fundamentals (render pipeline selection, materials, lighting, camera, 2D rendering/sprites)
- New Input System (Input Actions, bindings, PlayerInput component, touch/mobile)
- Build & Deployment (build settings, CLI builds, player settings, IL2CPP vs Mono)
- UI Systems (UI Toolkit primary, uGUI for existing projects)
- Animation (Animator, state machines, DOTween for procedural)
- Audio (AudioSource, AudioMixer, compression formats)
- Version Control (Git + Unity .gitignore, LFS, meta files, serialization mode)

**Should have (differentiators — Priority 2):**
- Performance & Optimization (Profiler, object pooling, draw call optimization, mobile-specific)
- ScriptableObject architecture patterns (event channels, factories, data separation)
- Addressables system (modern asset loading replacing Resources.Load anti-pattern)
- Unity Test Framework (EditMode/PlayMode tests, NUnit, TDD patterns)
- Custom editor tools (editor windows, custom inspectors)
- Assembly Definitions (.asmdef files, build time reduction, code boundaries)

**Defer to v2+:**
- DOTS / ECS (still evolving rapidly in Unity 6.4+)
- Multiplayer / Netcode for GameObjects (highly specialized, most Unity projects are single-player)
- HLSL shader programming (Shader Graph covers most needs)
- VFX Graph (Particle System basics suffice initially)
- iOS/Android deep deployment specifics

**Hard anti-features (never include):**
- Unity 4.x/5.x legacy patterns, UNet, OnGUI for game UI, UnityScript, Legacy Animation, old Input Manager as primary, Built-in Render Pipeline for new projects, WWW class, PlayerPrefs for save data

### Architecture Approach

The skill follows Claude Code's three-level context loading model: YAML frontmatter metadata (always loaded, ~100 words) activates the skill; SKILL.md body (loaded on activation, <500 lines) provides a routing table mapping user intent to reference files; reference files (loaded on demand, each <300 lines) contain the deep-dive content. This progressive disclosure strategy keeps per-interaction token cost low while maintaining full coverage across Unity's 16+ major domains. All references live exactly one level deep from SKILL.md — no nesting — and every reference file includes version annotations (Unity 6+) and explicit DO/DO NOT guidance to override training-data defaults.

**Major components:**
1. **SKILL.md** — routing table + universal principles + frontmatter with `paths:` trigger for *.cs, *.unity, *.asset, *.asmdef, *.shader, *.prefab; must stay under 500 lines
2. **references/*.md** — 16 domain-specific files (editor-workflows, scripting-fundamentals, scripting-patterns, physics, ui-toolkit, animation, rendering-2d, rendering-3d, audio, asset-pipeline, build-deploy, testing, project-setup, cli-tools, input-system, mobile-platform); each under 300 lines, self-contained, cross-referenced
3. **templates/*.cs.template** — boilerplate code generation (MonoBehaviour, ScriptableObject, EditMode test, asmdef)
4. **scripts/** — helper scripts for project scaffolding (secondary priority)
5. **Scraping manifest** — build-time artifact tracking extraction status per URL, word count, content hash; not part of skill output

### Critical Pitfalls

1. **SPA/dynamic content extraction failures** — After every `navigate_page` call, verify content loaded via `evaluate_script` checking `document.body.innerText.length`; retry with 5-second wait if zero; maintain a scraping manifest with per-URL status; never mark a page done without verified content above 100 words.

2. **Hidden content behind tabs and accordions** — Before extracting text, click all expandable elements (`document.querySelectorAll('[data-toggle], .accordion-trigger, [role="tab"]').forEach(el => el.click())`); wait 1-2 seconds; validate that code blocks are present in scripting tutorial content.

3. **Unity version API mismatch** — Tag each scraped page with its Unity version; cross-reference all API names against Unity 6.3 scripting docs; target Unity 6000.x by default; note Unity 2022.3 LTS differences where material.

4. **Skill token budget exceeded** — Enforce 500-line SKILL.md and 300-line reference file limits during synthesis; apply "only add what Claude doesn't already know" ruthlessly; skip C# fundamentals, basic OOP, general programming concepts.

5. **Skill never activates** — Write the description with front-loaded high-frequency keywords: "Unity Editor workflows, C# MonoBehaviour scripting, prefabs, scenes, physics, UI Toolkit, Addressables, build settings." Include `paths:` trigger. Test activation with real Unity questions.

## Implications for Roadmap

Based on research, the build follows two parallel tracks: (A) scraping infrastructure and content extraction, (B) skill file assembly. Track A must precede Track B, but within Track B phases are driven by content dependencies.

### Phase 1: Environment Setup and Scraping Infrastructure

**Rationale:** Everything depends on having working web access and a manifest system. The Chinese site's behavior (403 vs redirect vs actual Chinese content) must be resolved on day one or the entire project stalls.
**Delivers:** Working Chrome integration, URL tree mapped for unity.com/cn/learn/get-started, scraping manifest initialized, language/access issue resolved, fallback to english learn.unity.com if needed.
**Addresses:** Foundation for all content phases.
**Avoids:** Pitfall 1 (SPA failures), Pitfall 5 (Chinese content mismatch), Technical Debt Pattern 1 (no progress tracking), Technical Debt Pattern 3 (scraping hub pages not content pages).

### Phase 2: Content Extraction

**Rationale:** Raw content must be extracted before synthesis can begin. Full URL tree (50-200 content pages) is scraped and verified.
**Delivers:** Per-page Markdown files with verified content, code blocks preserved, all tabs/accordions expanded, duplicates de-duplicated by canonical URL, manifest showing 100% coverage.
**Uses:** Chrome integration, scraping manifest from Phase 1.
**Avoids:** Pitfall 2 (hidden content), Technical Debt Pattern 2 (raw HTML instead of Markdown), Gotcha 1 (duplicate content across pathways).

### Phase 3: Content Synthesis

**Rationale:** Raw extracted content must be restructured from pedagogical tutorial format into concise reference format before any skill files are written. Unity version tagging happens here.
**Delivers:** Synthesized content inventory mapped to reference file domains, all API names verified against Unity 6.3 docs, code patterns include using statements and class context, version-inappropriate content flagged/replaced.
**Avoids:** Pitfall 3 (version API mismatch), Gotcha 2 (code examples without context), over-explaining what Claude already knows.

### Phase 4: Foundation Skill Files (SKILL.md + Project Setup + Scripting Fundamentals)

**Rationale:** These three files make the skill immediately useful and all other phases depend on them. SKILL.md is the routing table — nothing else works without it.
**Delivers:** Working skill with `name`, `description`, `paths` frontmatter; routing table covering all 16 reference files; `references/project-setup.md`; `references/scripting-fundamentals.md`.
**Implements:** Progressive disclosure architecture; opinionated defaults pattern; path-trigger auto-activation.
**Avoids:** Pitfall 4 (token budget), Gotcha 3 (skill never activates).

### Phase 5: Core Gameplay Systems

**Rationale:** After foundation, the core gameplay loop (architecture -> physics -> input -> testing) forms a dependency cluster that should ship together.
**Delivers:** `references/scripting-patterns.md` (ScriptableObjects, DI, FSM, object pooling), `references/physics.md`, `references/input-system.md`, `references/testing.md`.
**Implements:** Cross-reference linking between physics/animation, scripting/testing.

### Phase 6: Presentation Layer

**Rationale:** Presentation depends on gameplay systems being defined. 2D comes before 3D because the existing project context (BobSort) is 2D/2.5D.
**Delivers:** `references/rendering-2d.md`, `references/rendering-3d.md`, `references/ui-toolkit.md`, `references/animation.md`, `references/audio.md`.

### Phase 7: Production and CLI

**Rationale:** Build/deploy concerns are only relevant when the game is far enough along, so they come last.
**Delivers:** `references/asset-pipeline.md` (Addressables, anti-Resources pattern), `references/build-deploy.md`, `references/cli-tools.md`, `references/mobile-platform.md`.

### Phase 8: Templates, Scripts, and Validation

**Rationale:** Quality-of-life enhancements added after all reference content is complete. Final validation against the "Looks Done But Isn't" checklist.
**Delivers:** `templates/*.cs.template` (MonoBehaviour, ScriptableObject, EditMode test, asmdef), `scripts/unity-project-init.sh`, full activation test with representative Unity questions, `/context` check confirming skill is under 5% of context window.

### Phase Ordering Rationale

- Phases 1-3 (infrastructure + extraction + synthesis) are strictly sequential and must complete before any skill file writing begins — scraping cannot be interleaved with writing because content gaps are only detectable after full extraction.
- Phase 4 (Foundation) gates all subsequent phases — no reference file is useful without a working routing table in SKILL.md.
- Phases 5-7 follow the dependency tree in FEATURES.md: Foundation -> Core Gameplay -> Presentation -> Production.
- 2D rendering precedes 3D because the BobSort reference project is 2D/2.5D, and 2D patterns are simpler.
- Validation (Phase 8) is explicitly separated to avoid false-completion scenarios identified in PITFALLS.md.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 1:** Unity CN site access behavior needs live verification — the 403 behavior observed in research may or may not apply to Chrome integration with an authenticated session.
- **Phase 2:** Exact URL tree depth for unity.com/cn/learn/get-started is unknown — research inferred 50-200 content pages but could not verify without live access. Plan for variability.
- **Phase 5 (scripting-patterns.md):** DI patterns (VContainer/Zenject) and ScriptableObject architecture are not covered in the basic "get started" tutorials — will require supplementing from Unity Best Practice Guides and community sources.

Phases with standard patterns (skip research-phase):
- **Phase 4:** SKILL.md structure, frontmatter format, routing table pattern — all well-documented in official Claude Code skill docs and the skill-creator reference implementation.
- **Phase 6 (audio):** AudioSource/Mixer content is stable across Unity versions and well-documented — straightforward to synthesize.
- **Phase 7 (build-deploy):** CLI arguments and build profiles are fully documented in Unity 6.3 manual — no ambiguity.
- **Phase 8 (templates):** Standard MonoBehaviour, ScriptableObject, and asmdef patterns are fixed — no research needed.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All core tools verified from official docs: Agent Skills spec, Chrome DevTools MCP, Unity 6.3 release notes, Claude Code skills documentation |
| Features | HIGH | Derived from official Unity Learn pathways structure, Unity manual top-level sections, and verified against Nice-Wolf-Studio reference implementation coverage |
| Architecture | HIGH | Progressive disclosure pattern sourced from official Claude Code skill docs and anthropic/skills reference implementation (skill-creator skill) |
| Pitfalls | HIGH (scraping) / MEDIUM (CN site) | Scraping pitfalls sourced from GitHub issues and official docs; CN site language/access behavior requires live verification |

**Overall confidence:** HIGH

### Gaps to Address

- **CN site language and access behavior:** Not confirmed whether unity.com/cn/learn/get-started serves Chinese content, redirects to English, or blocks automation. Must be resolved as the first action in Phase 1. If blocked, fall back to learn.unity.com (English) which has identical content.
- **Actual URL tree depth:** Research inferred 50-200 content pages but could not traverse the full tree. Phase 1 must map the complete tree before committing to a scraping timeline.
- **DI and advanced architecture patterns:** VContainer/Zenject dependency injection and advanced ScriptableObject event architecture are not in the beginner tutorial hub. Phase 5 will require supplemental research from unity.com/how-to guides and Unity blog posts.
- **claude --chrome vs chrome-devtools-mcp:** ARCHITECTURE.md recommends the built-in Chrome integration as simpler and more reliable, but this should be confirmed in the actual execution environment before committing.

## Sources

### Primary (HIGH confidence)
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills) — skill format, frontmatter fields, progressive disclosure, token budgets
- [Agent Skills Open Standard](https://agentskills.io/specification) — SKILL.md format, portability spec
- [Anthropic Skills Repository — skill-creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md) — routing table pattern reference implementation
- [Claude Code Chrome Integration](https://code.claude.com/docs/en/chrome) — built-in browser automation
- [Chrome DevTools MCP Repository](https://github.com/ChromeDevTools/chrome-devtools-mcp) — tool capabilities, known issues #832, #492, #116
- [Unity 6 Releases and Support](https://unity.com/releases/unity-6/support) — version timeline, LTS support dates
- [Unity 6.3 User Manual](https://docs.unity3d.com/6000.3/Documentation/Manual/UnityManual.html) — official API reference
- [Unity Manual: Upgrade to Unity 6.0](https://docs.unity3d.com/6000.3/Documentation/Manual/UpgradeGuideUnity6.html) — deprecated API list
- [Unity Manual: Upgrade to Unity 6.2](https://docs.unity3d.com/6000.2/Documentation/Manual/UpgradeGuideUnity62.html) — additional deprecations
- [Skill Authoring Best Practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) — description authoring, activation rate guidance
- [Unity CLI Command-line Arguments](https://docs.unity3d.com/6000.3/Documentation/Manual/CommandLineArguments.html) — build automation

### Secondary (MEDIUM confidence)
- [Nice-Wolf-Studio/unity-claude-skills](https://github.com/Nice-Wolf-Studio/unity-claude-skills) — 35-skill reference implementation, content organization patterns
- [The1Studio/theone-training-skills](https://github.com/The1Studio/theone-training-skills) — production Unity skill with DI focus
- [Unity Essentials Pathway](https://learn.unity.com/pathway/unity-essentials) — tutorial structure, unit breakdown
- [Unity Best Practice Guides](https://docs.unity3d.com/6000.3/Documentation/Manual/best-practice-guides.html) — advanced patterns for differentiator content
- [Unity Addressables Best Practices](https://unity.com/blog/engine-platform/addressables-planning-and-best-practices) — asset loading patterns
- [Unity ScriptableObjects Architecture](https://unity.com/how-to/architect-game-code-scriptable-objects) — architecture patterns
- [ECS Development Status March 2025](https://discussions.unity.com/t/ecs-development-status-milestones-march-2025/1615810) — reason to defer DOTS coverage

### Tertiary (LOW confidence)
- [Unity Get Started CN Hub](https://unity.com/cn/learn/get-started) — primary scraping target; 403 errors observed during research; actual content structure unverified
- Unity 2026 roadmap (CoreCLR migration, quarterly release cadence) — mentioned in community sources, not officially confirmed

---
*Research completed: 2026-03-29*
*Ready for roadmap: yes*
