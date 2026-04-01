# Asset Pipeline

## Key Concepts

**Asset Database**: Unity's internal system for tracking all assets in your project. Assets are identified by GUIDs stored in `.meta` files. When you import a file, Unity processes it through importers, creates cached data in the `Library/` folder, and generates a `.meta` file. Never move/rename assets outside Unity -- it breaks GUID references.

**Assembly Definitions (asmdef)**: Split your code into separate compilation units. Each `.asmdef` defines an assembly with its own references. Benefits: faster incremental compilation (only recompile changed assemblies), explicit dependency management, isolation of Editor code from runtime code. Every test assembly needs an asmdef.

**Addressables System**: The modern replacement for Resources folders. Assets get string addresses. Loading is asynchronous. Supports: content catalogs, remote asset delivery, memory management, platform-specific variants, content updates without app store rebuilds.

**Package Manager**: Manages Unity packages (core and third-party). Packages can come from: Unity Registry, Git URLs, local paths, or scoped registries. Manifest: `Packages/manifest.json`. Lock file: `Packages/packages-lock.json` (commit this for deterministic builds).

**Texture Import Settings**: Crucial for performance. Key settings: Max Size (reduce for mobile), Compression (ASTC for mobile, BC for desktop), Generate Mip Maps (enable for 3D, often disable for 2D/UI), Sprite mode (Single, Multiple for atlasing). Use platform-specific overrides in the texture import inspector.

## Patterns & Workflows

### Assembly Definition Setup
```
Project Structure:
Assets/
  Scripts/
    Runtime/
      MyGame.Runtime.asmdef    <- Runtime code
      Player/
      Enemies/
      UI/
    Editor/
      MyGame.Editor.asmdef     <- Editor-only code (references Runtime)
      CustomInspectors/
      EditorWindows/
  Tests/
    EditMode/
      MyGame.Tests.EditMode.asmdef   <- EditMode tests (references Runtime + TestRunner)
    PlayMode/
      MyGame.Tests.PlayMode.asmdef   <- PlayMode tests (references Runtime + TestRunner)
```

### Assembly Definition Configuration
```json
// MyGame.Runtime.asmdef
{
    "name": "MyGame.Runtime",
    "rootNamespace": "MyGame",
    "references": [],
    "includePlatforms": [],
    "excludePlatforms": [],
    "allowUnsafeCode": false,
    "overrideReferences": false,
    "precompiledReferences": [],
    "autoReferenced": true,
    "defineConstraints": [],
    "versionDefines": []
}

// MyGame.Editor.asmdef
{
    "name": "MyGame.Editor",
    "rootNamespace": "MyGame.Editor",
    "references": ["MyGame.Runtime"],
    "includePlatforms": ["Editor"],
    "excludePlatforms": [],
    "allowUnsafeCode": false
}

// MyGame.Tests.EditMode.asmdef
{
    "name": "MyGame.Tests.EditMode",
    "references": [
        "MyGame.Runtime",
        "UnityEngine.TestRunner",
        "UnityEditor.TestRunner"
    ],
    "includePlatforms": ["Editor"],
    "optionalUnityReferences": ["TestAssemblies"]
}
```

### Addressables Workflow
```csharp
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;

public class AssetLoader : MonoBehaviour
{
    // Load and instantiate a prefab by address
    public async Awaitable<GameObject> LoadAndInstantiate(string address, Transform parent = null)
    {
        var handle = Addressables.InstantiateAsync(address, parent);
        await handle.Task;

        if (handle.Status == AsyncOperationStatus.Succeeded)
        {
            return handle.Result;
        }

        Debug.LogError($"Failed to instantiate: {address}");
        return null;
    }

    // Load a ScriptableObject asset
    public async Awaitable<T> LoadAsset<T>(string address) where T : Object
    {
        var handle = Addressables.LoadAssetAsync<T>(address);
        await handle.Task;

        if (handle.Status == AsyncOperationStatus.Succeeded)
        {
            return handle.Result;
        }

        Debug.LogError($"Failed to load: {address}");
        return null;
    }

    // Load multiple assets by label
    public async Awaitable<System.Collections.Generic.IList<T>> LoadByLabel<T>(string label) where T : Object
    {
        var handle = Addressables.LoadAssetsAsync<T>(label, null);
        await handle.Task;
        return handle.Result;
    }

    // Release instantiated objects
    public void ReleaseInstance(GameObject instance)
    {
        Addressables.ReleaseInstance(instance);
    }
}
```

### Custom Asset Importer
```csharp
using UnityEditor;
using UnityEngine;

// Automatically configure imported textures
public class TexturePostprocessor : AssetPostprocessor
{
    // Called before texture import settings are applied
    void OnPreprocessTexture()
    {
        var importer = (TextureImporter)assetImporter;

        // Auto-configure sprites in specific folders
        if (assetPath.Contains("/Sprites/"))
        {
            importer.textureType = TextureImporterType.Sprite;
            importer.spritePixelsPerUnit = 16; // Pixel art
            importer.filterMode = FilterMode.Point; // No smoothing
            importer.textureCompression = TextureImporterCompression.Uncompressed;
        }

        // Auto-configure UI textures
        if (assetPath.Contains("/UI/"))
        {
            importer.textureType = TextureImporterType.Sprite;
            importer.mipmapEnabled = false; // No mipmaps for UI
        }

        // Mobile overrides
        var androidSettings = importer.GetPlatformTextureSettings("Android");
        androidSettings.overridden = true;
        androidSettings.format = TextureImporterFormat.ASTC_6x6;
        androidSettings.maxTextureSize = 1024;
        importer.SetPlatformTextureSettings(androidSettings);
    }
}
```

### Package Manager Operations via Script
```csharp
using UnityEditor;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
using UnityEngine;

public static class PackageHelper
{
    private static AddRequest addRequest;
    private static ListRequest listRequest;

    [MenuItem("Tools/Install DOTween")]
    public static void InstallPackage()
    {
        addRequest = Client.Add("com.demigiant.dotween");
        EditorApplication.update += AddProgress;
    }

    private static void AddProgress()
    {
        if (!addRequest.IsCompleted) return;

        if (addRequest.Status == StatusCode.Success)
            Debug.Log($"Installed: {addRequest.Result.packageId}");
        else
            Debug.LogError($"Failed: {addRequest.Error.message}");

        EditorApplication.update -= AddProgress;
    }

    [MenuItem("Tools/List Packages")]
    public static void ListPackages()
    {
        listRequest = Client.List();
        EditorApplication.update += ListProgress;
    }

    private static void ListProgress()
    {
        if (!listRequest.IsCompleted) return;

        foreach (var package in listRequest.Result)
        {
            Debug.Log($"{package.name}@{package.version}");
        }

        EditorApplication.update -= ListProgress;
    }
}
```

## Code Examples

### ScriptedImporter for Custom File Types
```csharp
using UnityEditor.AssetImporters;
using UnityEngine;

// Import .leveldata files as ScriptableObject assets
[ScriptedImporter(1, "leveldata")]
public class LevelDataImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        var levelData = ScriptableObject.CreateInstance<LevelConfig>();
        string text = System.IO.File.ReadAllText(ctx.assetPath);
        JsonUtility.FromJsonOverwrite(text, levelData);

        ctx.AddObjectToAsset("main", levelData);
        ctx.SetMainObject(levelData);
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `AssetDatabase.Refresh()` | Reimport changed assets |
| `AssetDatabase.ImportAsset(path)` | Force reimport specific asset |
| `AssetDatabase.FindAssets(filter)` | Search assets by filter string |
| `AssetDatabase.GUIDToAssetPath(guid)` | Convert GUID to file path |
| `AssetDatabase.LoadAssetAtPath<T>(path)` | Load asset in Editor |
| `Addressables.LoadAssetAsync<T>(key)` | Load asset at runtime |
| `Addressables.InstantiateAsync(key)` | Load and instantiate prefab |
| `Addressables.Release(handle)` | Free loaded asset memory |
| `PackageManager.Client.Add(id)` | Install package |
| `PackageManager.Client.Remove(name)` | Uninstall package |
| `TextureImporter` | Configure texture import settings |
| `AssetPostprocessor` | Hook into asset import pipeline |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Use `Resources.Load()` | Use Addressables (`Addressables.LoadAssetAsync`) | Resources loads all at startup; Addressables are async and memory-managed |
| Use `UPM_CACHE_PATH` env var | Use `UPM_CACHE_ROOT` (parent directory) | `UPM_CACHE_PATH` deprecated in Unity 6.0 |
| Put all code in one assembly | Use `.asmdef` files to split assemblies | Monolithic assembly recompiles everything on any change |
| Commit `Library/` folder | Only commit `Assets/`, `Packages/`, `ProjectSettings/` | Library is generated cache; regenerates from source |
| Move assets in file explorer | Move/rename assets through Unity Editor | File explorer doesn't update `.meta` files; breaks GUID references |
| Use PVRTC texture format | Use ASTC or ETC | PVRTC deprecated in Unity 6.1 |
| Skip texture platform overrides | Set per-platform compression and size | Desktop and mobile need different texture settings |

## Version Notes

- **Unity 6.0+**: `UPM_CACHE_PATH` env var replaced by `UPM_CACHE_ROOT`.
- **Unity 6.0+**: Addressables 2.x with improved content update and dependency resolution.
- **Unity 6.0+**: Asset Database v2 is the default with faster imports and better caching.
- **Unity 6.1**: PVRTC texture compression deprecated. Use ASTC or ETC.
- **Unity 6.0+**: ScriptedImporter supports versioning for automatic reimport on importer changes.
