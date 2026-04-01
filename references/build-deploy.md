# Build and Deploy

## Key Concepts

**Build Profiles (Unity 6+)**: Replace the legacy Build Settings window. Create platform-specific build profiles with overridden scenes, scripting defines, and player settings. Access: File > Build Profiles. Each profile can have its own scene list and settings without switching platforms globally.

**Player Settings**: Per-platform configuration for the built application. Key settings: Product Name, Company Name, Bundle Identifier (com.company.app), Version, Icon, Splash Screen, Scripting Backend (IL2CPP vs Mono), API Compatibility Level, Target Architecture.

**Scripting Backend -- IL2CPP vs Mono**: IL2CPP converts C# to C++ for native compilation. Use IL2CPP for all production builds -- better performance, smaller binary, required for iOS and consoles. Mono is faster to build for iteration during development. IL2CPP requires code stripping awareness (reflection and generics may need preservation).

**Platform Switching**: Each platform has specific requirements. Android needs Android SDK/NDK (managed via Unity Hub). iOS requires macOS with Xcode. WebGL has no filesystem, limited threading, specific audio constraints. Switch active platform via Build Profiles.

**Addressables**: Modern asset loading system replacing `Resources.Load()`. Assets are marked with addresses (strings) and loaded asynchronously. Supports remote content delivery, memory management, and platform-specific asset variants. Package: `com.unity.addressables`.

## Patterns & Workflows

### Build Script (CI/CD Integration)
```csharp
using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEngine;

public static class BuildScript
{
    [MenuItem("Build/Build Android")]
    public static void BuildAndroid()
    {
        var options = new BuildPlayerOptions
        {
            scenes = GetBuildScenes(),
            locationPathName = "Builds/Android/game.apk",
            target = BuildTarget.Android,
            options = BuildOptions.None
        };

        var report = BuildPipeline.BuildPlayer(options);
        LogBuildReport(report);
    }

    [MenuItem("Build/Build iOS")]
    public static void BuildIOS()
    {
        var options = new BuildPlayerOptions
        {
            scenes = GetBuildScenes(),
            locationPathName = "Builds/iOS",
            target = BuildTarget.iOS,
            options = BuildOptions.None
        };

        var report = BuildPipeline.BuildPlayer(options);
        LogBuildReport(report);
    }

    [MenuItem("Build/Build WebGL")]
    public static void BuildWebGL()
    {
        var options = new BuildPlayerOptions
        {
            scenes = GetBuildScenes(),
            locationPathName = "Builds/WebGL",
            target = BuildTarget.WebGL,
            options = BuildOptions.None
        };

        var report = BuildPipeline.BuildPlayer(options);
        LogBuildReport(report);
    }

    private static string[] GetBuildScenes()
    {
        var scenes = EditorBuildSettings.scenes;
        var paths = new string[scenes.Length];
        for (int i = 0; i < scenes.Length; i++)
        {
            paths[i] = scenes[i].path;
        }
        return paths;
    }

    private static void LogBuildReport(BuildReport report)
    {
        if (report.summary.result == BuildResult.Succeeded)
        {
            Debug.Log($"Build succeeded: {report.summary.totalSize / (1024 * 1024)}MB in {report.summary.totalTime}");
        }
        else
        {
            Debug.LogError($"Build failed: {report.summary.result}");
            foreach (var step in report.steps)
            {
                foreach (var message in step.messages)
                {
                    if (message.type == LogType.Error)
                        Debug.LogError(message.content);
                }
            }
        }
    }
}
```

### Platform-Specific Code with Scripting Defines
```csharp
using UnityEngine;

public class PlatformManager : MonoBehaviour
{
    private void Start()
    {
#if UNITY_ANDROID
        Screen.sleepTimeout = SleepTimeout.NeverSleep;
        Application.targetFrameRate = 60;
#elif UNITY_IOS
        Screen.sleepTimeout = SleepTimeout.NeverSleep;
        Application.targetFrameRate = 60;
#elif UNITY_WEBGL
        // WebGL: no filesystem, no threads
        Debug.Log("Running in WebGL");
#elif UNITY_EDITOR
        // Editor-only debug helpers
        Debug.Log("Running in Editor");
#endif
    }

    public static bool IsMobile =>
        Application.platform == RuntimePlatform.Android ||
        Application.platform == RuntimePlatform.IPhonePlayer;
}
```

### Player Settings Configuration
```csharp
using UnityEditor;

public static class PlayerSettingsConfig
{
    [MenuItem("Tools/Configure Player Settings")]
    public static void Configure()
    {
        // Common settings
        PlayerSettings.companyName = "MyStudio";
        PlayerSettings.productName = "MyGame";
        PlayerSettings.bundleVersion = "1.0.0";

        // Android
        PlayerSettings.SetApplicationIdentifier(BuildTargetGroup.Android, "com.mystudio.mygame");
        PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel24;
        PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevelAuto;

        // iOS
        PlayerSettings.SetApplicationIdentifier(BuildTargetGroup.iOS, "com.mystudio.mygame");
        PlayerSettings.iOS.targetOSVersionString = "15.0";

        // Scripting backend -- IL2CPP for production
        PlayerSettings.SetScriptingBackend(BuildTargetGroup.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.SetScriptingBackend(BuildTargetGroup.iOS, ScriptingImplementation.IL2CPP);

        // Architecture
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;
    }
}
```

### Addressables Loading
```csharp
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;

public class AddressableLoader : MonoBehaviour
{
    // Load a single asset by address
    public async void LoadPrefab(string address)
    {
        var handle = Addressables.LoadAssetAsync<GameObject>(address);
        await handle.Task;

        if (handle.Status == AsyncOperationStatus.Succeeded)
        {
            Instantiate(handle.Result);
        }
        else
        {
            Debug.LogError($"Failed to load {address}");
        }
    }

    // Load a scene additively
    public async void LoadScene(string sceneAddress)
    {
        var handle = Addressables.LoadSceneAsync(sceneAddress,
            UnityEngine.SceneManagement.LoadSceneMode.Additive);
        await handle.Task;
    }

    // Release loaded assets to free memory
    public void ReleaseAsset(AsyncOperationHandle handle)
    {
        Addressables.Release(handle);
    }
}
```

### IL2CPP Link Preservation
```xml
<!-- link.xml in Assets/ root -- prevents IL2CPP from stripping needed types -->
<linker>
    <!-- Preserve entire assembly -->
    <assembly fullname="Assembly-CSharp" preserve="all"/>

    <!-- Preserve specific type (needed for reflection) -->
    <assembly fullname="UnityEngine">
        <type fullname="UnityEngine.JsonUtility" preserve="all"/>
    </assembly>

    <!-- Preserve types used by JSON serialization -->
    <assembly fullname="Newtonsoft.Json" preserve="all"/>
</linker>
```

## Code Examples

### Command-Line Build (CI)
```bash
# Build from command line (CI/CD)
Unity -batchmode -quit -projectPath /path/to/project \
  -executeMethod BuildScript.BuildAndroid \
  -logFile build.log

# Build with custom defines
Unity -batchmode -quit -projectPath /path/to/project \
  -executeMethod BuildScript.BuildAndroid \
  -define "RELEASE;ANALYTICS" \
  -logFile build.log
```

### Build Size Report
```csharp
using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEngine;

public static class BuildAnalyzer
{
    public static void AnalyzeLastBuild(BuildReport report)
    {
        Debug.Log("=== Build Report ===");
        Debug.Log($"Result: {report.summary.result}");
        Debug.Log($"Total size: {report.summary.totalSize / (1024 * 1024):F1} MB");
        Debug.Log($"Build time: {report.summary.totalTime}");

        // List largest files in the build
        foreach (var file in report.GetFiles())
        {
            if (file.size > 1024 * 1024) // > 1MB
            {
                Debug.Log($"  {file.path}: {file.size / (1024 * 1024):F1} MB ({file.role})");
            }
        }
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `BuildPipeline.BuildPlayer(options)` | Execute a build |
| `BuildPlayerOptions` | Configure build: scenes, target, path, options |
| `BuildReport.summary` | Build result, size, time |
| `EditorBuildSettings.scenes` | Scene list for builds |
| `PlayerSettings.SetScriptingBackend()` | Set IL2CPP or Mono |
| `PlayerSettings.SetApplicationIdentifier()` | Set bundle ID per platform |
| `EditorUserBuildSettings.SwitchActiveBuildTarget()` | Switch platform |
| `Addressables.LoadAssetAsync<T>()` | Load asset by address |
| `Addressables.LoadSceneAsync()` | Load scene by address |
| `Addressables.Release(handle)` | Free loaded asset |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Use `Resources.Load()` | Use Addressables (`Addressables.LoadAssetAsync`) | Resources folder loads everything at startup; Addressables are async and managed |
| Ship with Mono backend | Use IL2CPP for production | IL2CPP: better performance, smaller binary, required for iOS/consoles |
| Forget `link.xml` with IL2CPP | Create `link.xml` to preserve reflected types | IL2CPP code stripping removes "unused" code that reflection needs |
| Build without testing on target | Always test builds on actual devices | Editor behavior differs from builds (threading, filesystem, input) |
| Hardcode platform checks with strings | Use `#if UNITY_ANDROID` preprocessor directives | Compile-time platform checks eliminate dead code from builds |
| Skip Build Report analysis | Check `BuildReport` for size and errors | Large unexpected assets inflate build size; reports reveal them |

## Version Notes

- **Unity 6.0+**: Build Profiles replace Build Settings. Per-profile scene lists and scripting defines.
- **Unity 6.0+**: Incremental build pipeline reduces rebuild times significantly.
- **Unity 6.0+**: Multi-process build support for faster parallel compilation.
- **Unity 6.0+**: `UPM_CACHE_PATH` env var replaced by `UPM_CACHE_ROOT` (parent directory).
- **Unity 6.0+**: Addressables 2.x with improved dependency management and content update workflow.
