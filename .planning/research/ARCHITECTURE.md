# Architecture Patterns

**Domain:** Claude Code Skill for Unity Development
**Researched:** 2026-03-29

## System Overview

This project produces a Claude Code **skill** (not a traditional software application) -- a structured set of markdown instruction files that teach Claude how to assist with Unity game development. The "architecture" is therefore the **file organization, content hierarchy, and progressive disclosure strategy** of the skill itself, plus the **web-scraping workflow** used to build it from the Unity tutorial hub.

The skill follows the [Agent Skills open standard](https://agentskills.io) and must conform to Claude Code's three-level context loading model: metadata (always loaded, ~100 words) -> SKILL.md body (loaded on activation, <500 lines) -> reference files (loaded on demand, unlimited).

**Confidence: HIGH** -- sourced from official Claude Code skill documentation at https://code.claude.com/docs/en/skills and the anthropic/skills GitHub repository.

## Component Boundaries

### Component 1: Skill Entry Point (SKILL.md)

**Responsibility:** Frontmatter for triggering + high-level routing instructions that tell Claude which reference file to load for a given task.

**Communicates With:** All reference files via explicit "read this file when..." directives.

**Constraint:** Must stay under 500 lines. This is the single most important constraint. The SKILL.md is loaded into context every time the skill activates, so bloat here wastes tokens on every interaction.

**Content:**
- YAML frontmatter: `name`, `description` (keyword-rich for auto-triggering), `paths` (*.cs, *.unity, *.asmdef, etc.)
- A routing table: "When the user asks about X, read `references/X.md`"
- Core principles that apply to ALL Unity work (project structure conventions, Unity version targeting, C# style)
- Nothing task-specific -- that goes in reference files

### Component 2: Reference Files (references/*.md)

**Responsibility:** Deep-dive content for each Unity domain. Each file is a self-contained expert guide on one topic.

**Communicates With:** SKILL.md (which directs Claude here) and other reference files (via cross-references for related topics).

**Constraint:** Individual files should ideally be under 300 lines each. For files that exceed this, include a table of contents at the top so Claude can selectively read sections.

**Recommended file set:**

| File | Domain | Key Topics |
|------|--------|------------|
| `references/editor-workflows.md` | Unity Editor | Scene view navigation, Inspector, Hierarchy, Project window, Prefab editing, Play mode, Scene management |
| `references/scripting-fundamentals.md` | C# Scripting | MonoBehaviour lifecycle, Component pattern, GetComponent, SerializeField, Events, Coroutines, async/await |
| `references/scripting-patterns.md` | Architecture | ScriptableObjects, Singletons (and when NOT to use them), DI with VContainer, Observer pattern, FSM, Object pooling |
| `references/physics.md` | Physics | Rigidbody, Colliders, Triggers, Raycasting, Physics materials, 2D vs 3D physics, FixedUpdate |
| `references/ui-toolkit.md` | UI | UI Toolkit (recommended), UGUI (legacy), Canvas setup, responsive layout, data binding, USS styling |
| `references/animation.md` | Animation | Animator Controller, Animation Clips, State Machines, Blend Trees, DOTween for procedural animation |
| `references/rendering-2d.md` | 2D Rendering | Sprites, SpriteRenderers, Sorting Layers, 2D Lighting (URP), Tilemaps, Sprite Atlases |
| `references/rendering-3d.md` | 3D Rendering | Materials, Shaders (URP/ShaderGraph), Cameras, Lighting, Post-processing, LOD |
| `references/audio.md` | Audio | AudioSource, AudioListener, AudioMixer, Spatial audio, Audio clip management |
| `references/asset-pipeline.md` | Assets | Import settings, Addressables, AssetBundles, ScriptableObject databases, Resources (anti-pattern) |
| `references/build-deploy.md` | Build | Build settings, Platform switching, Player settings, CLI builds, IL2CPP vs Mono, Build scripts |
| `references/testing.md` | Testing | Unity Test Framework, EditMode vs PlayMode tests, NUnit, test assembly definitions, mocking Unity types |
| `references/project-setup.md` | Project | Folder structure, Assembly definitions, .gitignore for Unity, Package Manager, Unity version management |
| `references/cli-tools.md` | CLI | Unity command-line arguments, batch mode, build automation, Unity Hub CLI, package manager CLI |
| `references/input-system.md` | Input | New Input System, Input Actions, Player Input component, touch/mobile input |
| `references/mobile-platform.md` | Mobile | iOS/Android specifics, screen adaption, safe area, performance on mobile |

### Component 3: Scripts (scripts/*.sh or scripts/*.py)

**Responsibility:** Deterministic helper scripts bundled with the skill.

**Communicates With:** Claude invokes these via Bash tool when the skill is active.

**Potential scripts:**
- `scripts/unity-project-init.sh` -- scaffold a new Unity project with correct folder structure and .gitignore
- `scripts/create-asmdef.sh` -- generate assembly definition files with correct references
- `scripts/validate-scene.sh` -- check scene file for common issues (if feasible outside Unity editor)

**Note:** Scripts are secondary to reference content. Most Unity workflows require the Unity Editor, so scripts are limited to file generation and validation.

### Component 4: Templates (templates/*.md or templates/*.cs.template)

**Responsibility:** Boilerplate templates Claude fills in when generating new files.

**Communicates With:** Referenced from SKILL.md or reference files when Claude needs to create new files.

**Potential templates:**
- `templates/monobehaviour.cs.template` -- standard MonoBehaviour with lifecycle methods
- `templates/scriptableobject.cs.template` -- ScriptableObject data container
- `templates/editmode-test.cs.template` -- test file with correct assembly setup
- `templates/asmdef.json.template` -- assembly definition

## Recommended Project Structure

```
unity-skill/
├── SKILL.md                          # Entry point (<500 lines)
│   ├── YAML frontmatter              #   name, description, paths
│   └── Routing instructions          #   "For X, read references/X.md"
│
├── references/                       # Deep-dive content (loaded on demand)
│   ├── editor-workflows.md           #   Unity Editor navigation & usage
│   ├── scripting-fundamentals.md     #   C# basics for Unity
│   ├── scripting-patterns.md         #   Architecture patterns
│   ├── physics.md                    #   Physics system
│   ├── ui-toolkit.md                 #   UI development
│   ├── animation.md                  #   Animation system
│   ├── rendering-2d.md              #   2D graphics
│   ├── rendering-3d.md              #   3D graphics
│   ├── audio.md                      #   Audio system
│   ├── asset-pipeline.md             #   Asset management
│   ├── build-deploy.md              #   Build & deployment
│   ├── testing.md                    #   Unity Test Framework
│   ├── project-setup.md             #   Project organization
│   ├── cli-tools.md                  #   Command-line tools
│   ├── input-system.md              #   Input handling
│   └── mobile-platform.md           #   Mobile development
│
├── templates/                        # Code generation templates
│   ├── monobehaviour.cs.template
│   ├── scriptableobject.cs.template
│   ├── editmode-test.cs.template
│   └── asmdef.json.template
│
├── scripts/                          # Helper scripts
│   └── unity-project-init.sh
│
└── .planning/                        # Build process (not part of skill output)
    ├── PROJECT.md
    ├── research/
    └── ...
```

## Architectural Patterns

### Pattern 1: Progressive Disclosure via Routing Table

**What:** The SKILL.md body contains a compact routing table that maps user intent to reference files. Claude reads the routing table on every activation but only loads the specific reference file(s) needed for the current task.

**Why:** A comprehensive Unity skill easily exceeds 5000+ lines of content. Loading all of it on every activation would waste context. The three-level loading model (metadata -> body -> references) keeps the per-interaction cost low while maintaining full coverage.

**Structure:**

```markdown
## When to load reference files

| User intent | Read this file |
|-------------|---------------|
| Creating/editing scripts, MonoBehaviour questions | references/scripting-fundamentals.md |
| Architecture, design patterns, ScriptableObjects | references/scripting-patterns.md |
| Physics, collisions, rigidbodies | references/physics.md |
| UI layout, buttons, menus | references/ui-toolkit.md |
| Setting up a new project, folder structure | references/project-setup.md |
| Building, deploying, platform settings | references/build-deploy.md |
| Writing tests | references/testing.md |
| (working with *.cs files matching Game/**) | references/scripting-fundamentals.md + references/scripting-patterns.md |
```

**Confidence: HIGH** -- this is the pattern recommended by the official skill-creator skill and Claude Code docs.

### Pattern 2: Opinionated Defaults with Escape Hatches

**What:** Each reference file states the recommended approach as the default, mentions alternatives briefly, and explains when to deviate.

**Why:** Claude's training data contains every Unity pattern ever discussed online, including deprecated and anti-pattern approaches. Without opinionated guidance, Claude may suggest `Resources.Load` (deprecated pattern), UGUI for new projects (UI Toolkit is preferred), or old Input Manager (New Input System is preferred). The skill must override training-data defaults with current best practices.

**Structure:**

```markdown
## Input Handling

Use the **New Input System** package for all input handling.

- Create Input Action assets in `Assets/Settings/Input/`
- Use `PlayerInput` component for simple cases
- Use generated C# input classes for complex cases

**Do NOT use** the legacy `Input.GetKey`/`Input.GetAxis` API unless the project
already uses it and migration is out of scope.
```

**Confidence: HIGH** -- based on real-world experience from the unity-test project where training data led to outdated patterns.

### Pattern 3: Cross-Reference Linking Between Files

**What:** Reference files link to related files when topics overlap, using explicit "see also" directives.

**Why:** Unity topics are deeply interconnected. Physics references Animation (physics-driven animation), Scripting references Testing (how to test scripts), UI references Input (handling UI input). Without cross-references, Claude may miss important context in adjacent files.

**Structure:**

```markdown
<!-- In references/physics.md -->
## Related

- For physics-driven animation, also read [animation.md](animation.md)
- For testing physics interactions, also read [testing.md](testing.md)
- For Raycast-based input, also read [input-system.md](input-system.md)
```

### Pattern 4: Version-Aware Content

**What:** Each reference file specifies which Unity version its content targets and notes version-specific differences where they matter.

**Why:** Unity 6 (6000.x) introduced significant changes from Unity 2022 LTS. Package APIs, rendering pipelines, and build workflows differ across versions. The skill must help Claude give version-appropriate advice.

**Structure:**

```markdown
# UI Development

**Target version:** Unity 6+ (6000.x)
**Also applies to:** Unity 2022.3 LTS (with noted differences)

## UI Toolkit (Recommended for Unity 6+)

...

## UGUI (Legacy -- use only for Unity 2021 and earlier projects)

...

> **Version note:** UI Toolkit gained runtime support in Unity 2022.2.
> For projects on Unity 2021 or earlier, UGUI is the only option for runtime UI.
```

## Data Flow: Tutorial Page Reading Workflow

The skill content is built by systematically reading the Unity tutorial hub. This is a one-time build process, not a runtime data flow.

### Reading Strategy Using Chrome Integration

The project specifies `chrome-devtools-mcp` for reading tutorial pages. However, Claude Code now has **built-in Chrome integration** via `claude --chrome` (or `/chrome` within a session) which is simpler and more reliable. The built-in integration uses the Claude in Chrome extension and provides the same navigation, reading, and interaction capabilities.

**Recommended approach:** Use Claude Code's built-in Chrome integration (`--chrome` flag) rather than the separate chrome-devtools-mcp server. The built-in integration shares browser login state, handles tab management automatically, and is officially supported.

**Confidence: HIGH** -- verified from official Claude Code docs at https://code.claude.com/docs/en/chrome

### Page Navigation Strategy

```
1. ENTRY POINT
   Navigate to: https://unity.com/cn/learn/get-started
   Extract: All section headings, all links to sub-pages/tutorials

2. SITEMAP BUILDING
   For each link found on the entry page:
   - Navigate to the linked page
   - Extract the page title and full content
   - Note any sub-links to deeper tutorial pages
   - Record the page URL for citation

3. SYSTEMATIC READING (Depth-first)
   For each tutorial page:
   a. Navigate to URL
   b. Wait for page load (dynamic content)
   c. Extract full text content (evaluate_script or take_snapshot)
   d. Extract code examples separately (preserve formatting)
   e. Note any "Next"/"Previous" navigation links
   f. Follow "Next" links to ensure sequential coverage

4. CONTENT EXTRACTION PER PAGE
   For each page, extract:
   - Page title
   - Section headings (for structure)
   - Tutorial text (for concepts)
   - Code snippets (for examples)
   - "Key takeaway" or summary sections
   - Links to Unity documentation (for cross-reference)
```

### Alternative/Fallback: Direct Documentation Reading

If the Chinese Unity site (unity.com/cn) blocks automated access (403 errors were observed during research), fall back to:

1. **learn.unity.com** -- the English Unity Learn platform, which has the same content
2. **docs.unity3d.com** -- the Unity Manual, which has comprehensive reference content
3. The Unity Essentials Pathway at `learn.unity.com/pathway/unity-essentials` provides structured beginner content

**The Chinese site is likely a localized mirror of the same content.** If the Chinese version is specifically needed for language reasons, Chrome integration with a logged-in browser session may be required.

### Tutorial Content Mapping to Reference Files

| Tutorial Section (Unity Essentials Pathway) | Maps to Reference File |
|---------------------------------------------|----------------------|
| Unit 1: Editor Essentials (install, interface, scene navigation) | `references/editor-workflows.md` + `references/project-setup.md` |
| Unit 2: 3D Essentials (objects, physics, prefabs, lighting) | `references/rendering-3d.md` + `references/physics.md` |
| Unit 3: Audio Essentials | `references/audio.md` |
| Unit 4: Programming Essentials (scripts, rotation, collection) | `references/scripting-fundamentals.md` |
| Unit 5: 2D Essentials (2D room, puzzle, animation) | `references/rendering-2d.md` |
| Unit 6: Publishing Essentials (build, WebGL, share) | `references/build-deploy.md` |

The tutorials provide beginner-level content. The reference files must **go beyond** tutorials to include:
- Advanced patterns (from Unity Best Practice Guides)
- CLI workflows (from Unity documentation)
- Testing patterns (not covered in tutorials at all)
- Architecture patterns (ScriptableObjects, DI, FSM -- from best practice guides)

## Anti-Patterns to Avoid

### Anti-Pattern 1: Monolithic SKILL.md

**What:** Putting all Unity knowledge directly in SKILL.md.

**Why bad:** Exceeds the 500-line recommendation. Wastes context tokens on every activation. Claude loads the full SKILL.md body every time the skill triggers, even for a simple "how do I add a Rigidbody?" question.

**Instead:** Keep SKILL.md as a routing table. Put domain knowledge in reference files.

### Anti-Pattern 2: Training Data Echo

**What:** Writing reference files that simply repeat what Claude already knows from training data, without adding opinionated guidance or correcting common errors.

**Why bad:** The skill adds no value over Claude's baseline knowledge. The whole point is to **override** training data where it's wrong (deprecated APIs, outdated patterns) and **add structure** where training data is scattered.

**Instead:** Every reference file should have explicit "DO this / DO NOT do that" guidance that may contradict what Claude would otherwise suggest.

### Anti-Pattern 3: Tutorial Transcription

**What:** Copy-pasting tutorial content verbatim into reference files.

**Why bad:** Tutorial content is pedagogical (step-by-step with explanations). Skill content should be **reference-oriented** (concise, actionable, pattern-focused). Tutorials teach a beginner; skill content instructs an AI assistant that already understands programming.

**Instead:** Synthesize tutorial content into concise patterns, rules, and code templates. Extract the "what" and "how," discard the "let me walk you through this."

### Anti-Pattern 4: Version-Agnostic Content

**What:** Writing content that doesn't specify which Unity version it applies to.

**Why bad:** Unity APIs change significantly across major versions. `UnityEngine.UI` vs `UnityEngine.UIElements`, old Input vs new Input System, Mono vs IL2CPP defaults -- all version-dependent. Version-agnostic content leads to advice that works on one version but fails on another.

**Instead:** Target Unity 6+ (6000.x) as the default. Note differences for Unity 2022.3 LTS where relevant.

### Anti-Pattern 5: Ignoring the Path Trigger Pattern

**What:** Not using the `paths` frontmatter field to auto-trigger the skill when working with Unity files.

**Why bad:** Users have to remember to invoke the skill manually or hope the description matches. Unity files (*.cs, *.unity, *.asset, *.asmdef, *.shader) are strong signals that the skill should activate.

**Instead:** Use `paths: "*.cs, *.unity, *.asset, *.asmdef, *.shader, *.prefab, *.mat, *.controller"` in frontmatter so the skill auto-loads when editing Unity project files.

## Suggested Build Order

Content sections should be written in this order based on dependencies and impact:

### Phase 1: Foundation (write first)

1. **SKILL.md** -- the routing table and core principles. Everything else depends on this.
2. **references/project-setup.md** -- folder structure, asmdef, .gitignore. Needed before any coding guidance.
3. **references/scripting-fundamentals.md** -- MonoBehaviour lifecycle, components, serialization. The most frequently needed reference.

**Rationale:** These three files make the skill immediately useful for basic Unity development. All other content builds on these foundations.

### Phase 2: Core Gameplay Systems

4. **references/scripting-patterns.md** -- architecture patterns, ScriptableObjects, DI
5. **references/physics.md** -- physics interactions
6. **references/input-system.md** -- handling player input
7. **references/testing.md** -- writing and running tests

**Rationale:** These cover the core development loop: write architecture -> implement gameplay -> handle input -> test it.

### Phase 3: Presentation Layer

8. **references/rendering-2d.md** -- sprites, 2D rendering
9. **references/rendering-3d.md** -- materials, shaders, 3D rendering
10. **references/ui-toolkit.md** -- UI development
11. **references/animation.md** -- animation system
12. **references/audio.md** -- audio system

**Rationale:** Presentation depends on having gameplay systems in place. 2D comes before 3D because the user's actual project (BobSort) is 2D/2.5D.

### Phase 4: Production

13. **references/asset-pipeline.md** -- asset management, Addressables
14. **references/build-deploy.md** -- building and deploying
15. **references/cli-tools.md** -- command-line automation
16. **references/mobile-platform.md** -- mobile-specific concerns

**Rationale:** Production concerns come last because they're only relevant when the game is far enough along to build and deploy.

### Phase 5: Templates and Scripts

17. **templates/*.cs.template** -- code generation templates
18. **scripts/unity-project-init.sh** -- project scaffolding

**Rationale:** Templates and scripts are quality-of-life improvements that can be added after all reference content is complete.

## Scalability Considerations

| Concern | At 1 skill file | At 16 reference files | At 30+ reference files |
|---------|-----------------|----------------------|----------------------|
| Context usage | Minimal -- just SKILL.md body | Moderate -- SKILL.md + 1-2 references per query | Risk of multiple file loads; consider merging small files |
| Maintenance | Trivial | Manageable -- each file is independent | Need a content inventory and versioning strategy |
| Discovery | Routing table is short | Routing table is 1 page | Routing table may need categorization |
| Triggering accuracy | Good | Good -- paths + description | May need skill splitting by domain (unity-scripting, unity-rendering, etc.) |

If the skill grows beyond ~20 reference files, consider splitting into multiple related skills:
- `unity-scripting` -- scripting, patterns, testing
- `unity-visuals` -- rendering, animation, UI, audio
- `unity-ops` -- build, deploy, CLI, asset pipeline

## Sources

- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills) -- official skill format, frontmatter fields, progressive disclosure (HIGH confidence)
- [Anthropic Skills Repository - skill-creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md) -- reference implementation for skill creation (HIGH confidence)
- [Agent Skills Open Standard](https://agentskills.io) -- interoperability specification (HIGH confidence)
- [Claude Code Chrome Integration](https://code.claude.com/docs/en/chrome) -- built-in browser automation (HIGH confidence)
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) -- alternative browser automation via MCP (HIGH confidence)
- [Unity Essentials Pathway](https://learn.unity.com/pathway/unity-essentials) -- tutorial structure (MEDIUM confidence -- fetched structure, not full content)
- [Unity Best Practice Guides](https://docs.unity3d.com/6000.3/Documentation/Manual/best-practice-guides.html) -- advanced topics list (MEDIUM confidence)
- [Unity 6.2 Manual](https://docs.unity3d.com/6000.2/Documentation/Manual/UnityManual.html) -- topic coverage (MEDIUM confidence -- partial hierarchy extracted)
- [Getting Started with Unity](https://unity.com/learn/get-started) -- entry point page (LOW confidence -- 403 on cn variant, structure inferred from search results)
- [Mikhail Shilkov - Inside Claude Code Skills](https://mikhail.io/2025/10/claude-code-skills/) -- skill internals analysis (MEDIUM confidence)
