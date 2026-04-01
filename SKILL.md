---
name: Unity Development Guide
description: >
  Comprehensive Unity Editor, C# MonoBehaviour scripting, prefabs, scenes, physics,
  UI Toolkit, Addressables, build settings, URP, animation, audio, and mobile platform
  reference for Unity 6+ (6000.x) game development. Covers project setup, editor workflows,
  scripting fundamentals and patterns, rendering (2D and 3D), input system, testing,
  asset pipeline, CLI tools, and build/deploy pipelines.
  Use this skill whenever the user is working with Unity, C# scripts, scene files, prefabs,
  shaders, or any Unity project files. Activate for questions about MonoBehaviour lifecycle,
  ScriptableObjects, coroutines, physics colliders, raycasting, UI Toolkit layouts, Animator
  state machines, AudioMixer routing, Addressables asset loading, URP rendering, or Unity
  command-line batch mode -- even if the user does not explicitly mention "Unity" by name.
paths:
  - "*.cs"
  - "*.unity"
  - "*.prefab"
  - "*.asset"
  - "*.asmdef"
  - "*.shader"
---

# Unity Development Guide

Reference skill for Unity 6+ game development. Provides opinionated, actionable guidance
across 16 topic areas -- from project setup through mobile deployment. Load only the
reference file relevant to the current task.

## Routing Table

Find the reference file that matches the user's intent. Each file is self-contained.

### Project and Editor

| Intent / Question | Reference File | Covers |
|---|---|---|
| "Create a new Unity project", "Set up .gitignore for Unity", "Configure Unity Hub", "Recommended folder structure" | [references/project-setup.md](references/project-setup.md) | Unity Hub, project creation, folder layout, .gitignore, Git LFS, meta files, package manifest |
| "How do I use the Inspector?", "Prefab workflows", "Scene management tips", "Multi-scene editing" | [references/editor-workflows.md](references/editor-workflows.md) | Scene hierarchy, GameObjects, Prefab variants, Inspector, Toolbar, layout customization |

### Scripting

| Intent / Question | Reference File | Covers |
|---|---|---|
| "MonoBehaviour lifecycle order", "How does Start vs Awake work?", "Serialization in Unity", "Component references" | [references/scripting-fundamentals.md](references/scripting-fundamentals.md) | MonoBehaviour lifecycle, components, events, serialization, SerializeField, GetComponent |
| "ScriptableObject patterns", "Coroutine vs async/await", "Singleton in Unity", "Object pooling" | [references/scripting-patterns.md](references/scripting-patterns.md) | ScriptableObjects, coroutines, async/await, dependency injection, object pooling, event patterns |

### Gameplay Systems

| Intent / Question | Reference File | Covers |
|---|---|---|
| "Rigidbody setup", "OnCollisionEnter not firing", "Raycasting", "2D vs 3D physics" | [references/physics.md](references/physics.md) | Rigidbody/Rigidbody2D, Colliders, triggers, raycasting, physics callbacks, layers, joints |
| "New Input System setup", "How to rebind keys", "Touch input on mobile", "PlayerInput component" | [references/input-system.md](references/input-system.md) | Input Actions, action maps, bindings, PlayerInput, touch/mobile input, InputAction callbacks |
| "How to write Unity tests", "EditMode vs PlayMode tests", "NUnit in Unity", "Test Runner" | [references/testing.md](references/testing.md) | Unity Test Framework, EditMode tests, PlayMode tests, NUnit, test organization, mocking |

### Presentation

| Intent / Question | Reference File | Covers |
|---|---|---|
| "SpriteRenderer setup", "Tilemap workflow", "2D lighting with URP", "Sprite atlas" | [references/rendering-2d.md](references/rendering-2d.md) | Sprites, SpriteRenderer, tilemaps, 2D lighting, sprite atlases, sorting layers, 2D shadows |
| "URP setup", "Materials and shaders", "Lighting a 3D scene", "Camera stacking" | [references/rendering-3d.md](references/rendering-3d.md) | URP pipeline, materials, Shader Graph, lighting, cameras, post-processing, LOD, occlusion |
| "UI Toolkit basics", "UXML and USS", "Runtime UI vs Editor UI", "Migrate from uGUI" | [references/ui-toolkit.md](references/ui-toolkit.md) | UI Toolkit, UXML, USS, VisualElement, runtime UI, editor UI, data binding, uGUI migration |
| "Animator controller setup", "Animation clips", "State machine transitions", "Root motion" | [references/animation.md](references/animation.md) | Animator, state machines, animation clips, blend trees, root motion, Animation Rigging, events |
| "AudioSource setup", "AudioMixer routing", "Spatial audio", "Compression formats" | [references/audio.md](references/audio.md) | AudioSource, AudioListener, AudioMixer, snapshots, spatial audio, compression, platform formats |

### Production

| Intent / Question | Reference File | Covers |
|---|---|---|
| "Build settings for Android/iOS", "IL2CPP vs Mono", "Player settings", "Platform switching" | [references/build-deploy.md](references/build-deploy.md) | Build profiles, player settings, IL2CPP/Mono backends, platform switching, scripting defines |
| "Unity CLI batch mode", "Command-line build", "Headless Unity", "CI/CD with Unity" | [references/cli-tools.md](references/cli-tools.md) | Command-line arguments, batch mode, -executeMethod, build automation, license activation |
| "Addressables setup", "Asset bundles", "Import settings", "Texture compression" | [references/asset-pipeline.md](references/asset-pipeline.md) | Addressables, asset import, texture/audio/model settings, sprite packing, asset references |
| "Mobile optimization tips", "Touch input handling", "Screen DPI and safe area", "Mobile performance" | [references/mobile-platform.md](references/mobile-platform.md) | Mobile optimization, touch input, screen resolution, safe areas, thermal throttling, profiling |

## Universal Principles

These apply across all topics. When generating Unity code or advice, always follow:

1. **Target Unity 6+** (6000.x). Do not reference Unity 5.x or 2017-2022 LTS APIs unless
   explicitly maintaining a legacy project.
2. **Use URP** (Universal Render Pipeline), not the Built-in Render Pipeline, for new projects.
3. **Use UI Toolkit** for new UI work. Recommend uGUI only when extending existing legacy UI.
4. **Use New Input System** (`UnityEngine.InputSystem`), not the legacy `Input` class.
5. **Use Addressables** for asset loading, not `Resources.Load`.
6. **Always include `using` statements and class context** in code examples -- never bare snippets.
7. **Prefer `SerializeField` on private fields** over making fields `public` for Inspector exposure.
8. **Use `CompareTag("X")`** instead of `tag == "X"` for tag comparisons (avoids GC allocation).
9. **Avoid `Find` methods at runtime** (`GameObject.Find`, `FindObjectOfType`) -- cache references
   in `Awake` or assign via Inspector.
10. **Use assembly definitions** (`.asmdef`) to organize code into compilation units for faster
    iteration in larger projects.
