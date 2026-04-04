# Requirements: Unity 2022.3 LTS Skill (v1.1)

**Defined:** 2026-04-04
**Core Value:** Accurate Unity 2022.3 LTS development guidance as a standalone Claude Code skill — version-appropriate patterns without Unity 6+ assumptions.

## v1 Requirements

### Extraction Infrastructure

- [ ] **EXT22-01**: URL manifest built for docs.unity3d.com/2022.3 Manual, API Reference, and Package docs
- [ ] **EXT22-02**: All 2022.3 Manual pages extracted to clean Markdown
- [ ] **EXT22-03**: All 2022.3 API Reference pages extracted to clean Markdown
- [ ] **EXT22-04**: 2022.3 Package documentation extracted (Input System, Addressables, URP, etc.)
- [ ] **EXT22-05**: Content verified (>100 words per page, code blocks preserved)

### Content Synthesis

- [ ] **SYN22-01**: Tutorial/reference content restructured into concise reference format
- [ ] **SYN22-02**: API names verified against 2022.3 scripting docs
- [ ] **SYN22-03**: Version-appropriate patterns used (no Unity 6+ assumptions)
- [ ] **SYN22-04**: Code examples include using statements and class context
- [ ] **SYN22-05**: Content filtered for Unity-specific additive knowledge

### Skill Foundation

- [ ] **SKL22-01**: SKILL.md with valid YAML frontmatter, name "Unity 2022.3 LTS Guide"
- [ ] **SKL22-02**: SKILL.md routing table mapping intents to 16 reference files
- [ ] **SKL22-03**: SKILL.md under 500 lines with front-loaded keywords
- [ ] **SKL22-04**: Progressive disclosure: SKILL.md → references/*.md

### Reference Files — Editor & Scripting

- [ ] **REF22-01**: references/project-setup.md covers 2022.3 Hub, folder structure, .gitignore
- [ ] **REF22-02**: references/editor-workflows.md covers scene management, GameObjects, Prefabs
- [ ] **REF22-03**: references/scripting-fundamentals.md covers MonoBehaviour lifecycle, 2022.3 APIs
- [ ] **REF22-04**: references/scripting-patterns.md covers ScriptableObjects, coroutines (no Awaitable)

### Reference Files — Gameplay Systems

- [ ] **REF22-05**: references/physics.md covers Rigidbody, Colliders, raycasting (2D+3D)
- [ ] **REF22-06**: references/input-system.md covers both old InputManager AND New Input System
- [ ] **REF22-07**: references/testing.md covers Unity Test Framework (EditMode/PlayMode)

### Reference Files — Presentation

- [ ] **REF22-08**: references/rendering-2d.md covers sprites, 2D lighting, tilemaps
- [ ] **REF22-09**: references/rendering-3d.md covers Built-in RP as default AND URP option
- [ ] **REF22-10**: references/ui-toolkit.md covers uGUI as primary, UI Toolkit as emerging
- [ ] **REF22-11**: references/animation.md covers Animator, state machines
- [ ] **REF22-12**: references/audio.md covers AudioSource, AudioMixer

### Reference Files — Production

- [ ] **REF22-13**: references/build-deploy.md covers build settings, IL2CPP, platforms
- [ ] **REF22-14**: references/cli-tools.md covers 2022.3 command-line arguments
- [ ] **REF22-15**: references/asset-pipeline.md covers both Resources and Addressables
- [ ] **REF22-16**: references/mobile-platform.md covers mobile optimization

### Quality & Publishing

- [ ] **QAL22-01**: Every reference file under 300 lines
- [ ] **QAL22-02**: All files have version annotations (Unity 2022.3 LTS)
- [ ] **QAL22-03**: All files have DO/DO NOT guidance appropriate for 2022.3
- [ ] **QAL22-04**: Skill activates correctly for Unity development questions
- [ ] **QAL22-05**: unity-2022-guide/ folder published to GitHub repo

## Future Requirements

- **FUT-01**: Learn.unity.com tutorial extraction for 2022.3-specific tutorials
- **FUT-02**: Migration guide from 2022.3 to Unity 6
- **FUT-03**: Merged skill that detects Unity version from ProjectSettings

## Out of Scope

| Feature | Reason |
|---------|--------|
| Unity 2021 or earlier | Only 2022.3 LTS is in active support |
| DOTS/ECS for 2022.3 | Even more experimental in 2022.3 than Unity 6 |
| Multiplayer/Netcode | Highly specialized, same as v1.0 |
| learn.unity.com extraction | Rate-limited; defer to future requirement |
| Merging with Unity 6+ skill | Separate folders for clarity |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| (Populated during roadmap creation) | | |

**Coverage:**
- v1 requirements: 33 total
- Mapped to phases: 0 (pending roadmap)
- Unmapped: 33

---
*Requirements defined: 2026-04-04*
*Last updated: 2026-04-04 after initial definition*
