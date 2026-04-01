# Unity Development Guide — Claude Code Skill

A comprehensive Claude Code skill for Unity 6+ game development. Provides opinionated, version-pinned guidance across 16 reference topics covering the full Unity development workflow.

## Installation

Clone this repo and copy the `unity-development-guide/` folder to your Claude Code skills directory:

```bash
git clone https://github.com/citronetic/unity-claude-skill.git
cp -r unity-claude-skill/unity-development-guide/ ~/.claude/skills/unity-development-guide/
```

Or symlink for auto-updates:

```bash
git clone https://github.com/citronetic/unity-claude-skill.git
ln -s "$(pwd)/unity-claude-skill/unity-development-guide" ~/.claude/skills/unity-development-guide
```

## What's Included

The `unity-development-guide/` folder contains everything you need:

```
unity-development-guide/
  SKILL.md                          # Routing table (90 lines)
  references/
    project-setup.md                # Unity Hub, folders, .gitignore, LFS
    editor-workflows.md             # Scenes, GameObjects, Prefabs, Inspector
    scripting-fundamentals.md       # MonoBehaviour lifecycle, components, events
    scripting-patterns.md           # ScriptableObjects, async/await, coroutines
    physics.md                      # Rigidbody, Colliders, raycasting (2D+3D)
    input-system.md                 # New Input System, PlayerInput, touch
    testing.md                      # EditMode/PlayMode tests, NUnit
    rendering-2d.md                 # Sprites, 2D lighting, tilemaps
    rendering-3d.md                 # Materials, lighting, URP setup
    ui-toolkit.md                   # UI Toolkit + uGUI legacy
    animation.md                    # Animator, state machines, procedural
    audio.md                        # AudioSource, AudioMixer, compression
    build-deploy.md                 # Build settings, IL2CPP, platforms
    cli-tools.md                    # Unity CLI, batch mode
    asset-pipeline.md               # Addressables, import settings
    mobile-platform.md              # Mobile optimization, touch, resolution
```

## Auto-Activation

The skill activates automatically when working with Unity file types:
- `*.cs` `*.unity` `*.prefab` `*.asset` `*.asmdef` `*.shader`

## Key Features

- **Opinionated guidance** — "Use X, not Y. Here's why." Steers toward Unity 6+ best practices
- **DO/DON'T tables** — Explicit deprecated pattern warnings (old Input Manager, Resources.Load, Built-in RP, etc.)
- **Full code examples** — Complete scripts with `using` statements and class context
- **Unity 6+ targeted** — Version-pinned to Unity 6000.x LTS, covers URP, UI Toolkit, New Input System, Addressables
- **Progressive disclosure** — SKILL.md routing table loads only the reference file you need

## How It Was Built

This skill was created by systematically extracting and synthesizing content from official Unity documentation:
- **31,926 pages** extracted from learn.unity.com, docs.unity3d.com Manual, and API Reference
- **26,894 API entries** indexed for verification
- **24 deprecated patterns** documented with modern replacements
- Content curated and condensed into opinionated reference material

## License

MIT
