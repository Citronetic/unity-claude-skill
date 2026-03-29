# Feature Landscape

**Domain:** Unity Game Engine Development Skill for Claude Code
**Researched:** 2026-03-29

## Table Stakes

Features users expect from a Unity development skill. Missing any of these means the skill feels incomplete and unhelpful for everyday Unity work.

### Editor & Project Fundamentals

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Unity Hub management | Every developer uses it daily to manage installs, projects, licenses | Low | Version management, project creation, template selection |
| Editor interface navigation | Cannot use Unity without understanding the layout | Low | Scene/Game/Inspector/Hierarchy/Project/Console windows |
| Scene management | Core workflow for every Unity project | Low | Scene creation, loading, multi-scene editing, additive scenes |
| GameObject & Component model | The foundational architecture of Unity | Medium | Entity-component pattern, Transform hierarchy, composition over inheritance |
| Prefab system | Standard reuse pattern, every project uses prefabs | Medium | Prefab creation, overrides, nested prefabs, prefab variants |
| Project folder organization | Bad structure = unmanageable project at scale | Low | Recommended folder hierarchy, naming conventions, third-party asset isolation |
| Asset import pipeline | Every project imports assets constantly | Medium | Import settings per asset type, texture compression, mesh import, audio compression |
| Inspector workflows | Primary interface for configuring components | Low | Custom inspectors awareness, serialized fields, property drawers |

### C# Scripting Fundamentals

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| MonoBehaviour lifecycle | Core mental model for all Unity scripting | High | Awake/Start/Update/FixedUpdate/LateUpdate/OnDestroy execution order |
| Component scripting patterns | How every script interacts with the engine | Medium | GetComponent, AddComponent, SerializeField, RequireComponent |
| Coroutines | Standard async pattern in Unity (still widely used) | Medium | yield return, WaitForSeconds, WaitForEndOfFrame, StartCoroutine/StopCoroutine |
| Events and delegates | Standard communication pattern between components | Medium | C# events, UnityEvent, Action/Func delegates, observer pattern |
| ScriptableObjects | Modern data architecture backbone | High | Data containers, event channels, configuration assets, factory pattern, runtime vs edit-time behavior differences |
| Serialization rules | Constant source of bugs for beginners | Medium | What Unity serializes, [SerializeField], [System.Serializable], ScriptableObject persistence |
| Debug and logging | Every developer needs to troubleshoot | Low | Debug.Log, Debug.DrawRay, Gizmos, conditional compilation, Profiler markers |
| async/await in Unity | Modern C# pattern increasingly used alongside coroutines | Medium | UniTask awareness, Awaitable (Unity 6+), cancellation tokens, main thread context |

### Physics

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Rigidbody and Collider setup | Any game with movement or interaction needs physics | Medium | Rigidbody/Rigidbody2D, Collider types, trigger vs collision, layers |
| Physics callbacks | Standard interaction detection | Medium | OnCollisionEnter/Stay/Exit, OnTriggerEnter/Stay/Exit, 2D variants |
| Raycasting | Used in nearly every game for input, AI, detection | Medium | Physics.Raycast, RaycastHit, LayerMask, SphereCast, 2D variants |
| Physics materials | Basic surface interaction tuning | Low | Friction, bounciness, combine modes |
| Physics settings and layers | Critical for performance and correctness | Medium | Layer collision matrix, fixed timestep, gravity settings |

### User Interface

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| UI Toolkit fundamentals | Unity's recommended future-facing UI system | High | USS styling, UXML layout, visual elements, data binding |
| uGUI (Unity UI) basics | Still dominant in existing projects and runtime game UI | Medium | Canvas, RectTransform, anchoring, layout groups, event system |
| Screen space vs world space UI | Common architectural decision | Medium | Overlay/Camera/World space canvas modes, use cases for each |
| UI event handling | Every UI needs interactivity | Medium | Button clicks, input fields, scroll views, event triggers |

### Animation

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Animator and Animation Clips | Core animation system used in almost every game | Medium | Animator Controller, states, transitions, parameters |
| Animation state machines | Standard pattern for character/object animation | Medium | States, transitions, conditions, layers, blend trees |
| DOTween / tweening patterns | De facto standard for procedural animation | Medium | Tween sequences, easing, callbacks; mention DOTween as dominant third-party |
| Sprite animation (2D) | Essential for any 2D game | Low | Sprite sheets, Animation window, frame-by-frame |

### Audio

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| AudioSource and AudioClip | Basic audio playback used in every game | Low | Play, PlayOneShot, volume, pitch, spatial blend |
| AudioListener setup | Required for any audio to work | Low | Single listener rule, camera attachment |
| Audio Mixer | Standard mixing/effects pipeline | Medium | Groups, snapshots, effects, exposed parameters, ducking |
| Audio compression formats | Affects build size and load time significantly | Low | Vorbis, ADPCM, PCM, when to use each, platform-specific settings |

### Build & Deployment

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Build settings and platforms | Every project needs to build eventually | Medium | Build Settings window, target platform switching, player settings |
| Command-line builds | CI/CD is standard practice | Medium | -batchmode, -quit, -buildTarget, -executeMethod, -logFile |
| Player settings | Platform-specific configuration | Medium | Resolution, fullscreen, icons, scripting backend (IL2CPP vs Mono), API compatibility |
| Platform-specific considerations | Mobile/PC/Console differ significantly | High | iOS provisioning, Android keystore, WebGL constraints, console certification |

### Rendering Fundamentals

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Render pipeline selection guidance | First decision in any new project | Medium | URP (recommended default), HDRP (high-end), Built-in (legacy/prototyping) |
| Materials and shaders basics | Visual appearance of every object | Medium | Standard/Lit shaders, material properties, texture maps (albedo, normal, metallic) |
| Lighting fundamentals | Every scene needs lighting | Medium | Directional/Point/Spot lights, baked vs real-time, light probes, reflection probes |
| Camera setup | Every game has a camera | Low | Perspective vs orthographic, culling mask, depth, multiple cameras, cinemachine awareness |
| 2D rendering | Essential for 2D games | Medium | Sprite Renderer, Sorting Layers, Order in Layer, 2D lighting (URP) |

### Input

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| New Input System package | Unity's recommended input solution for new projects | High | Input Actions, bindings, action maps, PlayerInput component, control schemes |
| Legacy Input Manager awareness | Still in many existing projects | Low | Input.GetAxis, Input.GetButton, Input.GetKey -- know it exists, recommend migration |
| Touch and mobile input | Large portion of Unity games target mobile | Medium | Touch phases, multi-touch, gesture recognition patterns |

### Version Control

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Git with Unity | Standard VCS for game projects | Medium | .gitignore for Unity, LFS for large assets, meta files, serialization mode (force text) |
| Merge conflict prevention | Unity-specific pain point | Medium | Prefab/scene merge strategies, smart locks, per-file serialization |

## Differentiators

Features that make the skill exceptional and go beyond what typical Unity tutorials cover. Not expected, but highly valued by intermediate-to-advanced developers.

### Performance & Optimization

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Unity Profiler deep dive | Identifies bottlenecks that otherwise take hours to find | High | CPU/GPU/Memory profilers, timeline view, custom markers, frame debugger |
| Memory management patterns | GC spikes are the #1 mobile performance issue | High | Object pooling, avoiding allocations in Update, struct vs class, NativeArray |
| Draw call optimization | Directly impacts frame rate on all platforms | High | Batching (static/dynamic/SRP), GPU instancing, texture atlasing, LOD |
| Mobile-specific optimization | Critical for the largest Unity market segment | High | ASTC textures, thermal throttling, target 50 draw calls, overdraw reduction |
| Burst Compiler and Jobs | 10-100x performance gains for compute-heavy code | High | Job System, Burst compilation, NativeContainers, parallel jobs |

### Advanced Scripting Architecture

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Dependency injection patterns | Cleaner architecture for larger projects | High | Zenject/VContainer awareness, service locator, composition root |
| State machine patterns | Robust game state and AI management | Medium | Hierarchical state machines, behavior trees, finite state machines in C# |
| Custom editor tools | Productivity multiplier for teams | High | Editor windows, custom inspectors, property drawers, SceneView handles |
| Assembly Definitions | Build time reduction, code boundary enforcement | Medium | .asmdef files, reference management, test assembly separation, circular dependency avoidance |

### Shader Programming

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Shader Graph workflows | Visual shader creation accessible to non-programmers | High | Node types, sub-graphs, custom functions, keyword switching |
| HLSL shader basics | Deep control when Shader Graph is insufficient | High | Vertex/fragment shaders, surface shaders, shader properties, multi-pass |
| Post-processing / URP Renderer Features | Visual polish that makes games look professional | Medium | Bloom, color grading, ambient occlusion, custom render passes |

### Visual Effects

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| VFX Graph (GPU particles) | High-fidelity particle effects at scale | High | GPU-driven particles, spawn/update/output contexts, property binders |
| Particle System (Shuriken) | Still widely used, simpler than VFX Graph | Medium | Emission, shape, renderer, sub-emitters, collision, trails |

### Asset Management

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Addressables system | Modern asset loading for any project beyond prototype | High | Asset references, groups, profiles, remote content, catalogs, memory management |
| Asset Bundle fundamentals | Understanding what Addressables wraps | Medium | Bundle building, loading, caching, dependency tracking |
| Sprite Atlas management | Essential for 2D game performance | Medium | Atlas creation, packing settings, variant atlases, runtime access |

### Multiplayer & Networking

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Netcode for GameObjects basics | Official Unity multiplayer solution | High | NetworkObject, NetworkBehaviour, RPCs, NetworkVariable, ownership |
| Multiplayer architecture patterns | Choosing the right topology | High | Client-server vs peer-to-peer, authority models, lag compensation |

### Testing

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Unity Test Framework | Quality assurance for game code | Medium | NUnit integration, Edit Mode tests, Play Mode tests, [UnityTest] attribute |
| Test-driven development patterns | Higher code quality, fewer regressions | Medium | Testable architecture, mocking Unity APIs, test fixtures |

### DOTS / ECS

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| ECS concepts and patterns | Future of Unity for performance-critical code | High | Entities, Components (IComponentData), Systems, World, EntityManager |
| ECS-GameObject interop | Practical migration path for existing projects | High | Baking, SubScene, hybrid approach; ECS becoming core in Unity 6.4+ |

### AI & Navigation

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| NavMesh and pathfinding | Standard AI navigation for 3D games | Medium | NavMeshAgent, NavMeshSurface, obstacle avoidance, off-mesh links |
| Behavior tree patterns | Standard game AI architecture | Medium | Task nodes, decorators, composites; popular third-party: NodeCanvas, Behavior Designer |

### Platform-Specific Workflows

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| iOS and Android deployment | Most common Unity deployment targets | High | Provisioning profiles, Xcode integration, Gradle, APK/AAB, Google Play requirements |
| WebGL considerations | Growing deployment target, unique constraints | Medium | Memory limits, no threads, compression, build size optimization |

## Anti-Features

Features to explicitly NOT include in the skill. Including these would mislead developers or teach outdated patterns.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Unity 4.x/5.x legacy patterns | Severely outdated, misleads beginners | Reference Unity 6 / Unity 2022+ patterns only |
| UNet (legacy networking) | Officially deprecated and removed in Unity 2022.2 | Recommend Netcode for GameObjects or third-party (Mirror, Photon) |
| OnGUI / IMGUI for game UI | Deprecated approach for runtime UI | Teach UI Toolkit for new projects, uGUI for existing ones; IMGUI only for editor tools |
| UnityScript (JavaScript) | Removed entirely from Unity years ago | C# is the only supported language |
| Legacy Animation system | Replaced by Mecanim Animator system | Use Animator/AnimationController; mention Legacy only if context requires |
| Legacy Input Manager as primary | Being phased out in favor of Input System package | Teach new Input System; acknowledge legacy exists for migration context only |
| Built-in Render Pipeline for new projects | URP is the recommended default for new work | Recommend URP; mention built-in only for legacy/prototyping context |
| WWW class for web requests | Deprecated, replaced by UnityWebRequest | Use UnityWebRequest exclusively |
| PlayerPrefs for game saves | Insecure, limited, not designed for save data | Recommend JSON/binary serialization to files; mention PlayerPrefs only for trivial settings |
| Detailed Unity Asset Store browsing guidance | Out of scope; not a development skill | Focus on how to integrate third-party assets, not how to shop for them |
| Video tutorial transcription content | Project constraint: text/web content only | Stick to official text documentation and tutorial pages |
| Unity source code / engine internals | Project is about using Unity, not modifying the engine | Focus on public API, workflows, and best practices |
| Muse / AI tool guidance as primary workflow | Rapidly changing, unreliable as stable reference | Mention existence briefly; skill focuses on manual development knowledge |

## Feature Dependencies

```
Unity Hub management
  -> Editor interface navigation
    -> Scene management
    -> GameObject & Component model
      -> Prefab system
      -> Component scripting patterns
        -> MonoBehaviour lifecycle
          -> Coroutines
          -> Events and delegates
          -> async/await in Unity
        -> Physics (Rigidbody, Collider, Raycasting)
        -> Animation (Animator, state machines)
        -> Audio (AudioSource, AudioClip)
      -> ScriptableObjects (requires understanding of serialization)
    -> Inspector workflows
      -> Serialization rules

Render pipeline selection
  -> Materials and shaders basics
    -> Lighting fundamentals
    -> Camera setup
    -> 2D rendering
  -> Shader Graph workflows (differentiator)
    -> Post-processing / URP Renderer Features
  -> HLSL shader basics (differentiator)

UI Toolkit fundamentals
  -> UI event handling
  -> Screen space vs world space UI

New Input System package
  -> Touch and mobile input

Build settings and platforms
  -> Command-line builds (CI/CD)
  -> Player settings
    -> Platform-specific considerations
      -> iOS and Android deployment (differentiator)
      -> WebGL considerations (differentiator)

Project folder organization + Git with Unity
  -> Assembly Definitions (differentiator)

Unity Profiler (differentiator)
  -> Memory management patterns
  -> Draw call optimization
  -> Mobile-specific optimization

Addressables system (differentiator)
  -> Asset Bundle fundamentals

ECS concepts (differentiator)
  -> Burst Compiler and Jobs
  -> ECS-GameObject interop
```

## MVP Recommendation

The skill must be immediately useful for the most common Unity development tasks. Prioritize breadth of table-stakes coverage before depth of differentiators.

### Priority 1: Core Foundation (must ship)
1. **Editor & Project Fundamentals** -- Cannot use Unity without this
2. **C# Scripting Fundamentals** -- MonoBehaviour lifecycle, components, ScriptableObjects, serialization
3. **Physics basics** -- Rigidbody, Collider, Raycasting, callbacks
4. **Rendering Fundamentals** -- Render pipeline selection, materials, lighting, camera
5. **Input** -- New Input System as primary
6. **Build & Deployment** -- Build settings, CLI builds, player settings

### Priority 2: Essential Systems (ship soon after)
7. **UI** -- UI Toolkit + uGUI basics
8. **Animation** -- Animator, state machines, tweening patterns
9. **Audio** -- Sources, clips, mixer
10. **Version Control** -- Git with Unity, .gitignore, LFS, meta files

### Priority 3: High-Value Differentiators (ship as enhancements)
11. **Performance & Optimization** -- Profiler, memory, draw calls, mobile optimization
12. **ScriptableObject architecture patterns** -- Events, factories, data separation
13. **Addressables** -- Modern asset loading
14. **Testing** -- Unity Test Framework, TDD patterns
15. **Custom editor tools** -- Editor windows, inspectors

### Defer
- **DOTS / ECS**: Still evolving rapidly; cover concepts but flag as unstable area
- **Multiplayer / Networking**: Highly specialized; most Unity projects are single-player
- **HLSL shader programming**: Niche expert topic; Shader Graph covers most needs
- **VFX Graph**: Specialized visual effects work; Particle System basics suffice for most

## Feature Prioritization Matrix

| Feature Area | User Impact | Complexity to Cover | Priority | Phase |
|-------------|-------------|---------------------|----------|-------|
| Editor & Project Fundamentals | Critical | Low | P0 | 1 |
| C# Scripting Fundamentals | Critical | High | P0 | 1 |
| Physics | High | Medium | P0 | 1 |
| Rendering Fundamentals | High | Medium | P0 | 1 |
| Input System | High | Medium | P0 | 1 |
| Build & Deployment | High | Medium | P0 | 1 |
| UI Systems (Toolkit + uGUI) | High | High | P1 | 2 |
| Animation | High | Medium | P1 | 2 |
| Audio | Medium | Low | P1 | 2 |
| Version Control (Git) | High | Low | P1 | 2 |
| Performance & Optimization | High | High | P2 | 3 |
| ScriptableObject patterns | High | Medium | P2 | 3 |
| Addressables | Medium | High | P2 | 3 |
| Testing Framework | Medium | Medium | P2 | 3 |
| Custom Editor Tools | Medium | High | P2 | 3 |
| Assembly Definitions | Medium | Low | P2 | 3 |
| Shader Graph | Medium | High | P3 | 4 |
| VFX / Particle System | Low | Medium | P3 | 4 |
| NavMesh / AI | Medium | Medium | P3 | 4 |
| Burst / Jobs | Medium | High | P3 | 4 |
| ECS / DOTS | Low | High | P3 | 4 |
| Netcode / Multiplayer | Low | High | P3 | 4 |
| iOS/Android Deployment | Medium | High | P3 | 4 |
| WebGL | Low | Medium | P3 | 4 |

## Content Source Mapping

The primary content source is `unity.com/cn/learn/get-started`, which covers beginner and intermediate topics. The skill should synthesize content from multiple official sources:

| Source | Covers | Use For |
|--------|--------|---------|
| unity.com/cn/learn/get-started | Editor basics, first project, getting started | P0 foundation content |
| learn.unity.com (Unity Essentials Pathway) | GameObjects, prefabs, scripting, physics | P0-P1 core systems |
| docs.unity3d.com/6000.x/Manual | Complete reference for all systems | All phases as authoritative reference |
| unity.com/how-to guides | Best practices, architecture patterns | P2-P3 advanced patterns |
| Unity blog (blog.unity.com) | Performance optimization, Addressables, ECS | P2-P3 differentiator content |

## Sources

- [Unity Learn Platform](https://learn.unity.com)
- [Unity Essentials Pathway](https://learn.unity.com/pathway/unity-essentials)
- [Unity 6.2 Manual](https://docs.unity3d.com/6000.2/Documentation/Manual/UnityManual.html)
- [Unity Get Started](https://unity.com/learn/get-started)
- [Unity Best Practice Guides](https://docs.unity3d.com/6000.0/Documentation/Manual/best-practice-guides.html)
- [Unity CLI Command-line Arguments](https://docs.unity3d.com/6000.3/Documentation/Manual/CommandLineArguments.html)
- [Unity Test Framework 2.0](https://docs.unity3d.com/Packages/com.unity.test-framework@2.0/manual/index.html)
- [Unity Input System Migration](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.11/manual/Migration.html)
- [Unity Addressables Best Practices](https://unity.com/blog/engine-platform/addressables-planning-and-best-practices)
- [Unity Render Pipeline Comparison](https://docs.unity3d.com/6000.2/Documentation/Manual/render-pipelines-feature-comparison.html)
- [Unity ScriptableObjects Architecture](https://unity.com/how-to/architect-game-code-scriptable-objects)
- [Unity Project Organization](https://unity.com/how-to/organizing-your-project)
- [UI Toolkit vs UGUI 2025 Guide](https://medium.com/@studio.angry.shark/unity-ui-toolkit-vs-ugui-2025-developer-guide-8407312c91ed)
- [ECS Development Status March 2025](https://discussions.unity.com/t/ecs-development-status-milestones-march-2025/1615810)
- [Unity 6 New Features](https://docs.unity3d.com/6000.3/Documentation/Manual/WhatsNewUnity6.html)
- [UNet Deprecation FAQ](https://support.unity.com/hc/en-us/articles/360001252086-UNet-Deprecation-FAQ)
