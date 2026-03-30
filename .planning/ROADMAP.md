# Roadmap: Unity Development Skill for Claude Code

## Overview

This project builds a Claude Code skill for Unity game development by systematically scraping the official Unity tutorial hub, extracting and synthesizing content into structured reference files, and packaging everything into a multi-file Agent Skills plugin. The build follows a strict dependency chain: scraping infrastructure must work before content can be extracted, extraction must complete before synthesis, synthesis must complete before any skill files are written, and the skill foundation (SKILL.md routing table) must exist before domain-specific reference files can be created. Domain reference files then follow their own dependency order: editor/scripting fundamentals first, then gameplay systems, then presentation layer, then production concerns. Final validation ensures every file meets size, quality, and activation constraints.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Scraping Infrastructure** - Chrome integration working, URL tree mapped, manifest tracking extraction status
- [ ] **Phase 2: Content Extraction** - All tutorial pages scraped with verified Markdown content
- [ ] **Phase 3: Content Synthesis** - Tutorial prose restructured into concise reference format with version-verified APIs
- [ ] **Phase 4: Skill Foundation** - SKILL.md routing table and progressive disclosure architecture in place
- [ ] **Phase 5: Editor & Scripting Fundamentals** - Foundation reference files covering project setup, editor workflows, and C# scripting
- [ ] **Phase 6: Core Gameplay Systems** - Physics, input, and testing reference files delivering the gameplay loop knowledge
- [ ] **Phase 7: Presentation Layer** - Rendering, UI, animation, and audio reference files covering visual and audio output
- [ ] **Phase 8: Production & Platform** - Build/deploy, asset pipeline, CLI tools, and mobile platform reference files
- [ ] **Phase 9: Quality & Validation** - All files validated against size limits, activation tested, context budget confirmed

## Phase Details

### Phase 1: Scraping Infrastructure
**Goal**: Chrome integration reliably reads Unity tutorial pages and a complete URL manifest tracks every page to be scraped
**Depends on**: Nothing (first phase)
**Requirements**: SCRP-01, SCRP-02, SCRP-03, SCRP-04, SCRP-05, SCRP-06
**Success Criteria** (what must be TRUE):
  1. Chrome integration (built-in or MCP) can navigate to a Unity tutorial page and return rendered text content
  2. The unity.com/cn language behavior is resolved with a documented fallback to the English site if needed
  3. A scraping manifest file exists listing every content URL with status tracking (pending/scraped/verified/failed)
  4. Hidden content behind tabs and accordions is expanded and captured in at least one test page
  5. Content verification confirms extracted pages have substantive content (>100 words)
**Plans**: 3 plans

Plans:
- [ ] 01-01-PLAN.md -- Chrome integration setup and CN site language resolution
- [ ] 01-02-PLAN.md -- URL tree discovery and manifest creation with status tracking
- [ ] 01-03-PLAN.md -- Hidden content expansion and content verification pipeline

### Phase 2: Content Extraction
**Goal**: Every tutorial content page is scraped, converted to clean Markdown, and verified against the manifest
**Depends on**: Phase 1
**Requirements**: EXTR-01, EXTR-02, EXTR-03, EXTR-04, EXTR-05
**Success Criteria** (what must be TRUE):
  1. The scraping manifest shows 100% of content URLs have status "verified"
  2. Extracted content is clean Markdown (not raw HTML) with properly formatted code blocks
  3. Duplicate pages across tutorial pathways are de-duplicated to a single canonical version
  4. Each extracted page file includes a Unity version tag
**Plans**: TBD

Plans:
- [ ] 02-01: TBD
- [ ] 02-02: TBD

### Phase 3: Content Synthesis
**Goal**: Raw tutorial content is restructured from pedagogical walkthrough format into concise, actionable reference material verified against Unity 6.3
**Depends on**: Phase 2
**Requirements**: SYNTH-01, SYNTH-02, SYNTH-03, SYNTH-04, SYNTH-05
**Success Criteria** (what must be TRUE):
  1. Synthesized content reads as concise reference material, not step-by-step tutorials
  2. All API names in the synthesized content are verified against Unity 6.3 scripting documentation
  3. Deprecated patterns are identified and replaced with current Unity 6 equivalents
  4. Code examples include using statements and class context (not bare snippets)
  5. Content that Claude already knows from training data is filtered out, keeping only Unity-specific additive knowledge
**Plans**: TBD

Plans:
- [ ] 03-01: TBD
- [ ] 03-02: TBD

### Phase 4: Skill Foundation
**Goal**: SKILL.md exists with valid frontmatter, a routing table covering all reference files, and the progressive disclosure architecture is established
**Depends on**: Phase 3
**Requirements**: SKIL-01, SKIL-02, SKIL-03, SKIL-04, SKIL-05
**Success Criteria** (what must be TRUE):
  1. SKILL.md has valid YAML frontmatter with name, description, and paths triggers for Unity file extensions
  2. SKILL.md body contains a routing table mapping user intents (e.g., "physics", "scripting", "build") to specific reference files
  3. SKILL.md is under 500 lines and the description has front-loaded high-frequency Unity keywords
  4. The references/ directory structure is created with the progressive disclosure layout (SKILL.md -> references/*.md)
**Plans**: TBD

Plans:
- [ ] 04-01: TBD
- [ ] 04-02: TBD

### Phase 5: Editor & Scripting Fundamentals
**Goal**: The foundational reference files that all other domain files depend on are complete and accurate
**Depends on**: Phase 4
**Requirements**: EDIT-01, EDIT-02, EDIT-03, SCPT-01, SCPT-02, SCPT-03, SCPT-04
**Success Criteria** (what must be TRUE):
  1. references/project-setup.md covers Unity Hub, project creation, folder structure, .gitignore, LFS config, and meta file handling
  2. references/editor-workflows.md covers scene management, GameObjects, Prefabs, and Inspector workflows
  3. references/scripting-fundamentals.md covers MonoBehaviour lifecycle, components, events, and serialization
  4. references/scripting-patterns.md covers ScriptableObjects, coroutines, async/await, and explicitly steers away from deprecated patterns
**Plans**: TBD

Plans:
- [ ] 05-01: TBD
- [ ] 05-02: TBD

### Phase 6: Core Gameplay Systems
**Goal**: Reference files covering the gameplay loop (physics, input, testing) are complete and cross-referenced
**Depends on**: Phase 5
**Requirements**: PHYS-01, PHYS-02, PHYS-03, INPUT-01, INPUT-02, INPUT-03, TEST-01, TEST-02
**Success Criteria** (what must be TRUE):
  1. references/physics.md covers Rigidbody, Colliders, triggers, raycasting, and callbacks for both 2D and 3D
  2. references/input-system.md covers New Input System (Input Actions, bindings, PlayerInput component) and explicitly recommends it over legacy InputManager
  3. references/testing.md covers Unity Test Framework with EditMode and PlayMode test patterns using NUnit
  4. Touch and mobile input patterns are documented alongside desktop input
**Plans**: TBD

Plans:
- [ ] 06-01: TBD
- [ ] 06-02: TBD

### Phase 7: Presentation Layer
**Goal**: Reference files covering visual output, UI, animation, and audio are complete
**Depends on**: Phase 5
**Requirements**: RNDR-01, RNDR-02, RNDR-03, UI-01, UI-02, UI-03, ANIM-01, ANIM-02, AUDIO-01, AUDIO-02
**Success Criteria** (what must be TRUE):
  1. references/rendering-2d.md covers sprites, SpriteRenderer, 2D lighting, and tilemaps
  2. references/rendering-3d.md covers materials, lighting, cameras, and URP setup with an explicit recommendation of URP over Built-in Render Pipeline
  3. references/ui-toolkit.md covers UI Toolkit as primary system with uGUI guidance for legacy projects, including both runtime and editor UI patterns
  4. references/animation.md covers Animator state machines, animation clips, and procedural animation patterns
  5. references/audio.md covers AudioSource, AudioListener, AudioMixer, and compression format considerations
**Plans**: TBD

Plans:
- [ ] 07-01: TBD
- [ ] 07-02: TBD
- [ ] 07-03: TBD

### Phase 8: Production & Platform
**Goal**: Reference files covering build, deployment, asset management, CLI tools, and mobile optimization are complete
**Depends on**: Phase 6, Phase 7
**Requirements**: BUILD-01, BUILD-02, BUILD-03, ASSET-01, ASSET-02, MOBL-01, MOBL-02
**Success Criteria** (what must be TRUE):
  1. references/build-deploy.md covers build settings, player settings, platform switching, and IL2CPP vs Mono backends
  2. references/cli-tools.md covers Unity command-line arguments and batch mode operations
  3. references/asset-pipeline.md covers import settings, asset management, and Addressables as the modern replacement for Resources.Load
  4. references/mobile-platform.md covers mobile-specific optimization, touch input, screen resolution, and performance considerations
**Plans**: TBD

Plans:
- [ ] 08-01: TBD
- [ ] 08-02: TBD

### Phase 9: Quality & Validation
**Goal**: Every reference file meets size and quality constraints, the skill activates correctly, and total content fits within context budget
**Depends on**: Phase 8
**Requirements**: QUAL-01, QUAL-02, QUAL-03, QUAL-04, QUAL-05
**Success Criteria** (what must be TRUE):
  1. Every reference file is under 300 lines
  2. All reference files include Unity 6+ version annotations and explicit DO/DO NOT guidance
  3. The skill activates correctly when asked representative Unity development questions
  4. Total skill content (SKILL.md + all references) stays under 5% of Claude context window
**Plans**: TBD

Plans:
- [ ] 09-01: TBD
- [ ] 09-02: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6 (and 7 in parallel) -> 8 -> 9

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Scraping Infrastructure | 1/3 | In Progress | - |
| 2. Content Extraction | 0/TBD | Not started | - |
| 3. Content Synthesis | 0/TBD | Not started | - |
| 4. Skill Foundation | 0/TBD | Not started | - |
| 5. Editor & Scripting Fundamentals | 0/TBD | Not started | - |
| 6. Core Gameplay Systems | 0/TBD | Not started | - |
| 7. Presentation Layer | 0/TBD | Not started | - |
| 8. Production & Platform | 0/TBD | Not started | - |
| 9. Quality & Validation | 0/TBD | Not started | - |
