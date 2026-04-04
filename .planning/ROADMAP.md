# Roadmap: Unity Development Skill for Claude Code

## Milestones

- ✅ **v1.0 Unity Development Skill** — Phases 1-9 (shipped 2026-04-04)
- 🚧 **v1.1 Unity 2022.3 LTS Skill** — Phases 10-15 (in progress)

## Phases

<details>
<summary>✅ v1.0 Unity Development Skill (Phases 1-9) — SHIPPED 2026-04-04</summary>

- [x] Phase 1: Scraping Infrastructure (3/3 plans) — completed 2026-03-30
- [x] Phase 2: Content Extraction (2/2 plans) — completed 2026-03-31
- [x] Phase 3: Content Synthesis (3/3 plans) — completed 2026-03-31
- [x] Phase 4: Skill Foundation (1/1 plans) — completed 2026-04-01
- [x] Phase 5: Editor & Scripting Fundamentals (2/2 plans) — completed 2026-04-01
- [x] Phase 6: Core Gameplay Systems (2/2 plans) — completed 2026-04-01
- [x] Phase 7: Presentation Layer (3/3 plans) — completed 2026-04-01
- [x] Phase 8: Production & Platform (1/1 plans) — completed 2026-04-01
- [x] Phase 9: Quality & Validation (1/1 plans) — completed 2026-04-01

</details>

### 🚧 v1.1 Unity 2022.3 LTS Skill (In Progress)

**Milestone Goal:** Create a standalone Claude Code skill for Unity 2022.3 LTS with 16 reference files adapted for 2022.3 APIs, patterns, and version-appropriate guidance.

- [ ] **Phase 10: 2022.3 Content Extraction** - Extract Manual, API, and Package docs from docs.unity3d.com/2022.3
- [ ] **Phase 11: Content Synthesis** - Synthesize extracted pages into concise, version-pinned reference material
- [ ] **Phase 12: Skill Foundation & Core References** - SKILL.md routing + Editor/Scripting reference files
- [ ] **Phase 13: Gameplay & Presentation References** - Physics, Input, Testing, Rendering, UI, Animation, Audio references
- [ ] **Phase 14: Production References** - Build, CLI, Asset Pipeline, Mobile reference files
- [ ] **Phase 15: Quality Validation & Publishing** - Validate all files and publish unity-2022-guide/ to GitHub

## Phase Details

### Phase 10: 2022.3 Content Extraction
**Goal**: All Unity 2022.3 LTS documentation is extracted and available as clean Markdown for synthesis
**Depends on**: Nothing (reuses v1.0 scraping infrastructure)
**Requirements**: EXT22-01, EXT22-02, EXT22-03, EXT22-04, EXT22-05
**Success Criteria** (what must be TRUE):
  1. URL manifest exists covering docs.unity3d.com/2022.3 Manual, API Reference, and Package docs
  2. Manual pages are extracted as clean Markdown with code blocks preserved
  3. API Reference pages are extracted as clean Markdown with method signatures intact
  4. Package documentation (Input System, Addressables, URP, etc.) is extracted
  5. Extracted pages pass quality checks (>100 words, code blocks preserved)
**Plans**: 2 plans

Plans:
- [x] 10-01-PLAN.md — Discover 2022.3 URLs and produce manifest-2022.json
- [ ] 10-02-PLAN.md — Batch extract all 2022.3 content and verify quality

### Phase 11: Content Synthesis
**Goal**: Extracted documentation is restructured into concise, opinionated reference material with 2022.3-appropriate patterns
**Depends on**: Phase 10
**Requirements**: SYN22-01, SYN22-02, SYN22-03, SYN22-04, SYN22-05
**Success Criteria** (what must be TRUE):
  1. Tutorial/reference content is restructured into concise "Use X, not Y" reference format
  2. All API names referenced in synthesis match 2022.3 scripting docs (no Unity 6+ APIs)
  3. No Unity 6+ assumptions leak through (no Awaitable, no default URP, etc.)
  4. Code examples are complete with using statements and MonoBehaviour/class context
  5. Content is filtered for Unity-specific additive knowledge (no generic C# tutorials)
**Plans**: TBD

Plans:
- [ ] 11-01: TBD
- [ ] 11-02: TBD

### Phase 12: Skill Foundation & Core References
**Goal**: Users can install the 2022.3 skill and get routed to Editor/Scripting reference files for core Unity workflows
**Depends on**: Phase 11
**Requirements**: SKL22-01, SKL22-02, SKL22-03, SKL22-04, REF22-01, REF22-02, REF22-03, REF22-04
**Success Criteria** (what must be TRUE):
  1. SKILL.md has valid YAML frontmatter with name "Unity 2022.3 LTS Guide" and is under 500 lines
  2. SKILL.md routing table maps intents to all 16 reference files with front-loaded keywords
  3. project-setup.md covers 2022.3 Hub, folder structure, and .gitignore
  4. editor-workflows.md covers scene management, GameObjects, and Prefabs
  5. scripting-fundamentals.md covers MonoBehaviour lifecycle with 2022.3 APIs (no Awaitable)
**Plans**: TBD

Plans:
- [ ] 12-01: TBD
- [ ] 12-02: TBD

### Phase 13: Gameplay & Presentation References
**Goal**: Reference files cover all gameplay systems and presentation topics with 2022.3-appropriate guidance
**Depends on**: Phase 12
**Requirements**: REF22-05, REF22-06, REF22-07, REF22-08, REF22-09, REF22-10, REF22-11, REF22-12
**Success Criteria** (what must be TRUE):
  1. physics.md covers Rigidbody, Colliders, raycasting for both 2D and 3D
  2. input-system.md covers both old InputManager AND New Input System (both valid in 2022.3)
  3. rendering-3d.md treats Built-in RP as the default pipeline and URP as an option (not the reverse)
  4. ui-toolkit.md treats uGUI as the primary UI system and UI Toolkit as emerging
  5. testing.md, rendering-2d.md, animation.md, and audio.md each cover their domain with complete examples
**Plans**: TBD

Plans:
- [ ] 13-01: TBD
- [ ] 13-02: TBD
- [ ] 13-03: TBD

### Phase 14: Production References
**Goal**: Reference files cover build/deploy, CLI, asset pipeline, and mobile optimization for 2022.3
**Depends on**: Phase 12
**Requirements**: REF22-13, REF22-14, REF22-15, REF22-16
**Success Criteria** (what must be TRUE):
  1. build-deploy.md covers build settings, IL2CPP, and platform targets for 2022.3
  2. cli-tools.md covers 2022.3-specific command-line arguments
  3. asset-pipeline.md covers both Resources and Addressables (both fully supported in 2022.3)
  4. mobile-platform.md covers mobile optimization patterns appropriate for 2022.3
**Plans**: TBD

Plans:
- [ ] 14-01: TBD

### Phase 15: Quality Validation & Publishing
**Goal**: All skill files pass quality checks and the unity-2022-guide/ folder is published to GitHub
**Depends on**: Phase 13, Phase 14
**Requirements**: QAL22-01, QAL22-02, QAL22-03, QAL22-04, QAL22-05
**Success Criteria** (what must be TRUE):
  1. Every reference file is under 300 lines
  2. All files have "Unity 2022.3 LTS" version annotations
  3. All files have DO/DO NOT guidance appropriate for 2022.3 (not copy-pasted from Unity 6+)
  4. Skill activates correctly when Claude encounters Unity development questions
  5. unity-2022-guide/ folder is published to the GitHub repo and installable
**Plans**: TBD

Plans:
- [ ] 15-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 10 → 11 → 12 → 13 → 14 → 15
(Phases 13 and 14 can run in parallel after Phase 12)

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Scraping Infrastructure | v1.0 | 3/3 | Complete | 2026-03-30 |
| 2. Content Extraction | v1.0 | 2/2 | Complete | 2026-03-31 |
| 3. Content Synthesis | v1.0 | 3/3 | Complete | 2026-03-31 |
| 4. Skill Foundation | v1.0 | 1/1 | Complete | 2026-04-01 |
| 5. Editor & Scripting Fundamentals | v1.0 | 2/2 | Complete | 2026-04-01 |
| 6. Core Gameplay Systems | v1.0 | 2/2 | Complete | 2026-04-01 |
| 7. Presentation Layer | v1.0 | 3/3 | Complete | 2026-04-01 |
| 8. Production & Platform | v1.0 | 1/1 | Complete | 2026-04-01 |
| 9. Quality & Validation | v1.0 | 1/1 | Complete | 2026-04-01 |
| 10. 2022.3 Content Extraction | v1.1 | 1/2 | In Progress | - |
| 11. Content Synthesis | v1.1 | 0/? | Not started | - |
| 12. Skill Foundation & Core References | v1.1 | 0/? | Not started | - |
| 13. Gameplay & Presentation References | v1.1 | 0/? | Not started | - |
| 14. Production References | v1.1 | 0/? | Not started | - |
| 15. Quality Validation & Publishing | v1.1 | 0/? | Not started | - |
