# Project Setup

## Key Concepts

**Unity Hub** is the single entry point for managing Unity Editor installations, creating projects, and switching between them. Always use Unity Hub -- never manage installations manually.

**Project Templates** define the initial render pipeline and package set. For 2D games, use the "2D (URP)" template. For 3D, use "3D (URP)". Never start a new project with the Built-in Render Pipeline unless you have a legacy requirement.

**Folder Structure** follows a standard convention. Unity requires `Assets/` as the root content folder. Use consistent subfolders: `Scripts/`, `Prefabs/`, `Materials/`, `Scenes/`, `Audio/`, `Textures/`, `UI/`. Keep Editor-only scripts in `Editor/` folders (excluded from builds).

**.meta Files** are critical -- Unity uses them to track asset references via GUIDs. Never delete `.meta` files manually. Always move/rename assets through the Unity Editor or ensure `.meta` files move with their assets in version control.

## Patterns & Workflows

### Creating a New Project
1. Open Unity Hub > Projects > New Project
2. Select Unity 6.x editor version
3. Choose template: "2D (URP)" or "3D (URP)"
4. Set project name and location
5. Click Create -- Unity scaffolds the folder structure and imports default packages

### Git Setup for Unity Projects
1. Initialize repo in the project root (parent of `Assets/`)
2. Set serialization to Force Text: Edit > Project Settings > Editor > Asset Serialization > Force Text
3. Enable Visible Meta Files: Edit > Project Settings > Editor > Version Control > Mode > Visible Meta Files
4. Use Unity-specific `.gitignore` (see below)
5. Configure Git LFS for binary assets

### Unity-Specific .gitignore
```
# Unity generated
/[Ll]ibrary/
/[Tt]emp/
/[Oo]bj/
/[Bb]uild/
/[Bb]uilds/
/[Ll]ogs/
/[Uu]ser[Ss]ettings/

# IDE
.vs/
.vscode/
*.csproj
*.sln
*.suo
*.user
*.pidb
*.booproj

# OS
.DS_Store
Thumbs.db

# Unity3D generated meta data
*.pidb.meta
*.pdb.meta
*.mdb.meta
```

### Git LFS Configuration
```
# .gitattributes for Unity LFS
*.png filter=lfs diff=lfs merge=lfs -text
*.jpg filter=lfs diff=lfs merge=lfs -text
*.psd filter=lfs diff=lfs merge=lfs -text
*.tga filter=lfs diff=lfs merge=lfs -text
*.tif filter=lfs diff=lfs merge=lfs -text
*.wav filter=lfs diff=lfs merge=lfs -text
*.mp3 filter=lfs diff=lfs merge=lfs -text
*.ogg filter=lfs diff=lfs merge=lfs -text
*.fbx filter=lfs diff=lfs merge=lfs -text
*.obj filter=lfs diff=lfs merge=lfs -text
*.asset filter=lfs diff=lfs merge=lfs -text
*.cubemap filter=lfs diff=lfs merge=lfs -text
*.unitypackage filter=lfs diff=lfs merge=lfs -text
```

## Code Examples

### EditorBuildSettings -- Add Scenes Programmatically
```csharp
using UnityEditor;
using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections.Generic;
using System.Linq;

public static class BuildSceneHelper
{
    [MenuItem("Tools/Add Current Scene to Build")]
    public static void AddCurrentScene()
    {
        var scene = SceneManager.GetActiveScene();
        var scenes = new List<EditorBuildSettingsScene>(EditorBuildSettings.scenes);
        if (!scenes.Any(s => s.path == scene.path))
        {
            scenes.Add(new EditorBuildSettingsScene(scene.path, true));
            EditorBuildSettings.scenes = scenes.ToArray();
            Debug.Log($"Added {scene.name} to build settings");
        }
    }
}
```

### Project Settings via Script
```csharp
using UnityEditor;

// Set key project settings for consistent team configuration
public static class ProjectConfigurer
{
    [InitializeOnLoadMethod]
    static void ConfigureProject()
    {
        // Force text serialization for version control
        EditorSettings.serializationMode = SerializationMode.ForceText;
        // Visible meta files
        EditorSettings.externalVersionControl = "Visible Meta Files";
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `EditorBuildSettings.scenes` | Get/set scenes included in build |
| `PlayerSettings.productName` | Set application display name |
| `PlayerSettings.bundleVersion` | Set version string |
| `PlayerSettings.companyName` | Set company/org name |
| `EditorSettings.serializationMode` | Control asset serialization format |
| `EditorUserBuildSettings.activeBuildTarget` | Get current build platform |
| `PackageManager.Client.Add()` | Install package by name |
| `PackageManager.Client.List()` | List installed packages |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Start projects with Built-in RP | Use URP template | Built-in pipeline is legacy; URP has better performance and features (Unity 6+) |
| Delete `.meta` files | Move/rename assets through Unity Editor | Broken `.meta` files break all asset references via GUID |
| Use `Library/` in version control | Add `Library/` to `.gitignore` | `Library/` is generated cache; rebuilds on import |
| Mix serialization modes | Set Force Text globally | Binary serialization causes unmergeable diffs |
| Nest projects inside other Unity projects | One project per repository root | Nested projects confuse the asset database |
| Put everything in `Assets/` root | Organize into `Scripts/`, `Prefabs/`, etc. | Flat structure becomes unmanageable quickly |

## Version Notes

- **Unity 6.0+**: URP is the recommended render pipeline for all new projects. Built-in RP is maintenance-only.
- **Unity 6.0+**: Package Manager supports scoped registries for custom packages.
- **Unity 6.0+**: Build Profiles replace the old Build Settings window for per-platform configuration.
- **Unity Hub 3.x**: Supports multiple editor installations side-by-side with one-click switching.
