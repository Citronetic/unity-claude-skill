# Requirements: Unity Development Skill for Claude Code

**Defined:** 2026-03-29
**Core Value:** Every Unity development workflow, CLI command, and best practice from the official tutorials is captured in a single, accurate, actionable skill file -- no gaps, no omissions.

## v1 Requirements

### Scraping Infrastructure

- [ ] **SCRP-01**: Chrome DevTools MCP can navigate to Unity tutorial hub and render full page content
- [ ] **SCRP-02**: Complete URL tree of all tutorial pages is mapped into a scraping manifest
- [ ] **SCRP-03**: Language/access behavior of unity.com/cn resolved with fallback to English site
- [ ] **SCRP-04**: Scraping manifest tracks per-URL status (pending/scraped/verified/failed)
- [ ] **SCRP-05**: Hidden content behind tabs/accordions is expanded before extraction
- [ ] **SCRP-06**: Content verification confirms each page has >100 words of actual content

### Content Extraction

- [ ] **EXTR-01**: All tutorial content pages are scraped with verified content (100% manifest coverage)
- [ ] **EXTR-02**: Code blocks are preserved with proper formatting in extracted content
- [ ] **EXTR-03**: Duplicate content across pathways is de-duplicated by canonical URL
- [ ] **EXTR-04**: Extracted content is converted to clean Markdown (not raw HTML)
- [ ] **EXTR-05**: Each extracted page is tagged with its Unity version

### Content Synthesis

- [ ] **SYNTH-01**: Tutorial prose is restructured into concise reference format
- [ ] **SYNTH-02**: All API names are verified against Unity 6.3 scripting docs
- [ ] **SYNTH-03**: Deprecated patterns are identified and replaced with current equivalents
- [ ] **SYNTH-04**: Code examples include using statements and class context
- [ ] **SYNTH-05**: Content applies "only add what Claude doesn't already know" filter

### Skill Foundation

- [ ] **SKIL-01**: SKILL.md has valid YAML frontmatter with name, description, and paths triggers
- [ ] **SKIL-02**: SKILL.md body is a routing table mapping user intent to reference files
- [ ] **SKIL-03**: SKILL.md stays under 500 lines
- [ ] **SKIL-04**: Skill description has front-loaded keywords for activation matching
- [ ] **SKIL-05**: Progressive disclosure architecture: SKILL.md -> references/*.md

### Editor & Project Setup

- [ ] **EDIT-01**: references/project-setup.md covers Unity Hub, project creation, folder structure
- [ ] **EDIT-02**: references/editor-workflows.md covers scene management, GameObjects, Prefabs, Inspector
- [ ] **EDIT-03**: Content includes recommended .gitignore, LFS config, meta file handling

### Scripting

- [ ] **SCPT-01**: references/scripting-fundamentals.md covers MonoBehaviour lifecycle, components, events
- [ ] **SCPT-02**: references/scripting-patterns.md covers ScriptableObjects, coroutines, async/await
- [ ] **SCPT-03**: Scripting content covers serialization and component patterns
- [ ] **SCPT-04**: Content explicitly steers away from deprecated patterns (old Input, Resources.Load)

### Physics

- [ ] **PHYS-01**: references/physics.md covers Rigidbody, Colliders, triggers, raycasting
- [ ] **PHYS-02**: Content includes both 2D and 3D physics variants
- [ ] **PHYS-03**: Physics callbacks (OnCollisionEnter, OnTriggerEnter) documented

### Rendering

- [ ] **RNDR-01**: references/rendering-2d.md covers sprites, SpriteRenderer, 2D lighting, tilemaps
- [ ] **RNDR-02**: references/rendering-3d.md covers materials, lighting, cameras, URP setup
- [ ] **RNDR-03**: Content recommends URP over Built-in Render Pipeline for new projects

### UI Systems

- [ ] **UI-01**: references/ui-toolkit.md covers UI Toolkit as primary UI system
- [ ] **UI-02**: Content includes uGUI guidance for existing/legacy projects
- [ ] **UI-03**: UI content covers both runtime UI and editor UI patterns

### Animation

- [ ] **ANIM-01**: references/animation.md covers Animator, state machines, animation clips
- [ ] **ANIM-02**: Content includes procedural animation patterns (DOTween or similar)

### Audio

- [ ] **AUDIO-01**: references/audio.md covers AudioSource, AudioListener, AudioMixer
- [ ] **AUDIO-02**: Content covers audio compression formats and platform considerations

### Input

- [ ] **INPUT-01**: references/input-system.md covers New Input System (Input Actions, bindings)
- [ ] **INPUT-02**: Content covers PlayerInput component and touch/mobile input
- [ ] **INPUT-03**: Content explicitly recommends New Input System over legacy InputManager

### Build & Deploy

- [ ] **BUILD-01**: references/build-deploy.md covers build settings, player settings, platform switching
- [ ] **BUILD-02**: references/cli-tools.md covers Unity command-line arguments and batch mode
- [ ] **BUILD-03**: Content covers IL2CPP vs Mono scripting backends

### Asset Pipeline

- [ ] **ASSET-01**: references/asset-pipeline.md covers import settings, asset management
- [ ] **ASSET-02**: Content covers Addressables as modern replacement for Resources.Load

### Testing

- [ ] **TEST-01**: references/testing.md covers Unity Test Framework (EditMode/PlayMode)
- [ ] **TEST-02**: Content includes NUnit patterns and test organization

### Mobile Platform

- [ ] **MOBL-01**: references/mobile-platform.md covers mobile-specific optimization
- [ ] **MOBL-02**: Content covers touch input, screen resolution, performance considerations

### Quality & Validation

- [ ] **QUAL-01**: Every reference file stays under 300 lines
- [ ] **QUAL-02**: All reference files include version annotations (Unity 6+)
- [ ] **QUAL-03**: All reference files include explicit DO/DO NOT guidance
- [ ] **QUAL-04**: Skill activates correctly when asked Unity development questions
- [ ] **QUAL-05**: Skill content stays under 5% of Claude context window

## v2 Requirements

### Advanced Content

- **ADV-01**: DOTS/ECS coverage (deferred -- rapidly evolving in Unity 6.4+)
- **ADV-02**: Multiplayer/Netcode for GameObjects
- **ADV-03**: HLSL shader programming (Shader Graph covers most needs for v1)
- **ADV-04**: VFX Graph advanced usage
- **ADV-05**: iOS/Android deep deployment specifics
- **ADV-06**: Custom editor tool authoring (windows, inspectors)
- **ADV-07**: Assembly Definitions (.asmdef) and code organization
- **ADV-08**: Addressables advanced patterns (remote content, catalog management)

### Templates & Scripts

- **TMPL-01**: MonoBehaviour boilerplate template
- **TMPL-02**: ScriptableObject boilerplate template
- **TMPL-03**: EditMode test boilerplate template
- **TMPL-04**: Project scaffolding scripts

## Out of Scope

| Feature | Reason |
|---------|--------|
| Unity 4.x/5.x legacy patterns | Actively harmful -- deprecated APIs cause compile errors |
| UNet networking | Deprecated, replaced by Netcode for GameObjects |
| OnGUI for game UI | Legacy system, replaced by UI Toolkit |
| UnityScript/Boo | Removed from Unity entirely |
| Legacy Animation system | Replaced by Mecanim Animator |
| Built-in RP as default | URP is the recommended pipeline for new projects |
| WWW class | Deprecated, use UnityWebRequest |
| PlayerPrefs for save data | Anti-pattern for non-trivial data; use JSON serialization |
| Video tutorial transcription | Focus on web text content only |
| Non-official tutorial sources | Only unity.com official materials for v1 |
| Engine source code analysis | Reading tutorials, not reverse-engineering internals |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SCRP-01 | Phase 1 | Pending |
| SCRP-02 | Phase 1 | Pending |
| SCRP-03 | Phase 1 | Pending |
| SCRP-04 | Phase 1 | Pending |
| SCRP-05 | Phase 1 | Pending |
| SCRP-06 | Phase 1 | Pending |
| EXTR-01 | Phase 2 | Pending |
| EXTR-02 | Phase 2 | Pending |
| EXTR-03 | Phase 2 | Pending |
| EXTR-04 | Phase 2 | Pending |
| EXTR-05 | Phase 2 | Pending |
| SYNTH-01 | Phase 3 | Pending |
| SYNTH-02 | Phase 3 | Pending |
| SYNTH-03 | Phase 3 | Pending |
| SYNTH-04 | Phase 3 | Pending |
| SYNTH-05 | Phase 3 | Pending |
| SKIL-01 | Phase 4 | Pending |
| SKIL-02 | Phase 4 | Pending |
| SKIL-03 | Phase 4 | Pending |
| SKIL-04 | Phase 4 | Pending |
| SKIL-05 | Phase 4 | Pending |
| EDIT-01 | Phase 5 | Pending |
| EDIT-02 | Phase 5 | Pending |
| EDIT-03 | Phase 5 | Pending |
| SCPT-01 | Phase 5 | Pending |
| SCPT-02 | Phase 5 | Pending |
| SCPT-03 | Phase 5 | Pending |
| SCPT-04 | Phase 5 | Pending |
| PHYS-01 | Phase 6 | Pending |
| PHYS-02 | Phase 6 | Pending |
| PHYS-03 | Phase 6 | Pending |
| INPUT-01 | Phase 6 | Pending |
| INPUT-02 | Phase 6 | Pending |
| INPUT-03 | Phase 6 | Pending |
| TEST-01 | Phase 6 | Pending |
| TEST-02 | Phase 6 | Pending |
| RNDR-01 | Phase 7 | Pending |
| RNDR-02 | Phase 7 | Pending |
| RNDR-03 | Phase 7 | Pending |
| UI-01 | Phase 7 | Pending |
| UI-02 | Phase 7 | Pending |
| UI-03 | Phase 7 | Pending |
| ANIM-01 | Phase 7 | Pending |
| ANIM-02 | Phase 7 | Pending |
| AUDIO-01 | Phase 7 | Pending |
| AUDIO-02 | Phase 7 | Pending |
| BUILD-01 | Phase 8 | Pending |
| BUILD-02 | Phase 8 | Pending |
| BUILD-03 | Phase 8 | Pending |
| ASSET-01 | Phase 8 | Pending |
| ASSET-02 | Phase 8 | Pending |
| MOBL-01 | Phase 8 | Pending |
| MOBL-02 | Phase 8 | Pending |
| QUAL-01 | Phase 9 | Pending |
| QUAL-02 | Phase 9 | Pending |
| QUAL-03 | Phase 9 | Pending |
| QUAL-04 | Phase 9 | Pending |
| QUAL-05 | Phase 9 | Pending |

**Coverage:**
- v1 requirements: 58 total
- Mapped to phases: 58/58
- Unmapped: 0

---
*Requirements defined: 2026-03-29*
*Last updated: 2026-03-29 after roadmap creation (traceability populated)*
