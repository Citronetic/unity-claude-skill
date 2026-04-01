# Mobile Platform

## Key Concepts

**Target Frame Rate**: Mobile defaults to 30fps. Set `Application.targetFrameRate = 60` explicitly for 60fps. Consider 30fps for battery-intensive games. Use `QualitySettings.vSyncCount = 0` to let targetFrameRate take effect (vSync overrides it).

**Screen and Resolution**: Mobile screens vary wildly. Use `Screen.safeArea` to avoid notches and rounded corners. Test with Device Simulator (Window > Analysis > Device Simulator). Set `Screen.sleepTimeout = SleepTimeout.NeverSleep` to prevent screen dimming.

**Memory Management**: Mobile devices have limited RAM (2-6GB, shared with OS). Monitor with `Profiler.GetTotalReservedMemoryLong()`. Reduce texture sizes, use compressed formats (ASTC), limit active objects, use object pooling. iOS kills apps that exceed memory limits without warning.

**Thermal Throttling**: Sustained heavy GPU/CPU usage causes devices to throttle. Use Adaptive Performance package to detect thermal state and adjust quality dynamically. Reduce shader complexity, lower resolution, disable post-processing when the device is hot.

**Platform-Specific Build**: Android uses Gradle, outputs APK/AAB. iOS outputs Xcode project, requires macOS for build. Set minimum API levels (Android 24+, iOS 15+). Use IL2CPP backend for both platforms. ARM64 is required for both app stores.

## Patterns & Workflows

### Mobile Initialization
```csharp
using UnityEngine;

public class MobileSetup : MonoBehaviour
{
    [SerializeField] private int targetFPS = 60;

    private void Awake()
    {
        // Disable vSync to let targetFrameRate work
        QualitySettings.vSyncCount = 0;
        Application.targetFrameRate = targetFPS;

        // Prevent screen from sleeping
        Screen.sleepTimeout = SleepTimeout.NeverSleep;

        // Set orientation
        Screen.orientation = ScreenOrientation.AutoRotation;
        Screen.autorotateToPortrait = false;
        Screen.autorotateToPortraitUpsideDown = false;
        Screen.autorotateToLandscapeLeft = true;
        Screen.autorotateToLandscapeRight = true;
    }
}
```

### Safe Area Handling (Notches)
```csharp
using UnityEngine;

// Attach to a RectTransform that should respect safe area (usually the root UI panel)
[RequireComponent(typeof(RectTransform))]
public class SafeAreaHandler : MonoBehaviour
{
    private RectTransform rectTransform;
    private Rect lastSafeArea;

    private void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        ApplySafeArea();
    }

    private void Update()
    {
        // Recheck in case orientation changes
        if (Screen.safeArea != lastSafeArea)
        {
            ApplySafeArea();
        }
    }

    private void ApplySafeArea()
    {
        var safeArea = Screen.safeArea;
        lastSafeArea = safeArea;

        // Convert safe area from screen coords to anchor coords (0-1)
        var anchorMin = safeArea.position;
        var anchorMax = safeArea.position + safeArea.size;
        anchorMin.x /= Screen.width;
        anchorMin.y /= Screen.height;
        anchorMax.x /= Screen.width;
        anchorMax.y /= Screen.height;

        rectTransform.anchorMin = anchorMin;
        rectTransform.anchorMax = anchorMax;
    }
}
```

### Performance Budget Manager
```csharp
using UnityEngine;
using UnityEngine.Rendering.Universal;

public class PerformanceManager : MonoBehaviour
{
    [SerializeField] private UniversalRenderPipelineAsset urpAsset;
    [SerializeField] private float fpsThreshold = 25f;
    [SerializeField] private float checkInterval = 2f;

    private float timer;
    private int frameCount;
    private float fpsAccumulator;

    private enum QualityTier { High, Medium, Low }
    private QualityTier currentTier = QualityTier.High;

    private void Update()
    {
        frameCount++;
        fpsAccumulator += 1f / Time.unscaledDeltaTime;
        timer += Time.unscaledDeltaTime;

        if (timer >= checkInterval)
        {
            float avgFPS = fpsAccumulator / frameCount;
            AdjustQuality(avgFPS);
            timer = 0f;
            frameCount = 0;
            fpsAccumulator = 0f;
        }
    }

    private void AdjustQuality(float fps)
    {
        if (fps < fpsThreshold && currentTier != QualityTier.Low)
        {
            // Downgrade
            switch (currentTier)
            {
                case QualityTier.High:
                    ApplyMediumQuality();
                    currentTier = QualityTier.Medium;
                    break;
                case QualityTier.Medium:
                    ApplyLowQuality();
                    currentTier = QualityTier.Low;
                    break;
            }
        }
    }

    private void ApplyMediumQuality()
    {
        urpAsset.renderScale = 0.85f;
        urpAsset.shadowDistance = 30f;
        QualitySettings.shadows = ShadowQuality.HardOnly;
        Debug.Log("Quality: Medium");
    }

    private void ApplyLowQuality()
    {
        urpAsset.renderScale = 0.7f;
        urpAsset.shadowDistance = 15f;
        QualitySettings.shadows = ShadowQuality.Disable;
        Debug.Log("Quality: Low");
    }
}
```

### Android-Specific Configuration
```csharp
using UnityEngine;
#if UNITY_ANDROID
using UnityEngine.Android;
#endif

public class AndroidSetup : MonoBehaviour
{
    private void Start()
    {
#if UNITY_ANDROID
        // Request runtime permissions (Android 6+)
        if (!Permission.HasUserAuthorizedPermission(Permission.Camera))
        {
            Permission.RequestUserPermission(Permission.Camera);
        }

        // Check for back button (treated as Escape key)
        // Handle in Update()
#endif
    }

    private void Update()
    {
#if UNITY_ANDROID
        // Android back button = Escape
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            OnBackButton();
        }
#endif
    }

    private void OnBackButton()
    {
        // Navigate back or show quit dialog
    }
}
```

### Memory Monitoring
```csharp
using UnityEngine;
using UnityEngine.Profiling;

public class MemoryMonitor : MonoBehaviour
{
    [SerializeField] private float warningThresholdMB = 500f;
    [SerializeField] private float checkInterval = 5f;

    private float timer;

    private void Update()
    {
        timer += Time.deltaTime;
        if (timer < checkInterval) return;
        timer = 0f;

        long totalReserved = Profiler.GetTotalReservedMemoryLong();
        long totalAllocated = Profiler.GetTotalAllocatedMemoryLong();
        float reservedMB = totalReserved / (1024f * 1024f);
        float allocatedMB = totalAllocated / (1024f * 1024f);

        if (reservedMB > warningThresholdMB)
        {
            Debug.LogWarning($"[Memory] Reserved: {reservedMB:F0}MB, Allocated: {allocatedMB:F0}MB -- Consider reducing assets");
            // Trigger cleanup: unload unused assets
            Resources.UnloadUnusedAssets();
            System.GC.Collect();
        }
    }
}
```

<!-- For mobile touch input with EnhancedTouch, swipe detection, and gesture handling, see input-system.md -->

## Code Examples

### Google Play Publishing Setup
```csharp
using UnityEditor;

public static class AndroidBuildConfig
{
    [MenuItem("Tools/Configure Android Build")]
    public static void ConfigureForGooglePlay()
    {
        // Required for Google Play
        PlayerSettings.Android.useCustomKeystore = true;
        // Keystore path and password set via Editor UI or env vars
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;
        PlayerSettings.SetScriptingBackend(BuildTargetGroup.Android, ScriptingImplementation.IL2CPP);

        // App Bundle (AAB) for Google Play (not APK)
        EditorUserBuildSettings.buildAppBundle = true;

        // Target API level
        PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel24;
        PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevelAuto;
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `Application.targetFrameRate` | Set target FPS |
| `Screen.safeArea` | Get safe area rect (avoids notches) |
| `Screen.sleepTimeout` | Control screen dimming |
| `Screen.orientation` | Force/allow specific orientations |
| `SystemInfo.systemMemorySize` | Total device RAM in MB |
| `SystemInfo.graphicsMemorySize` | GPU VRAM in MB |
| `Profiler.GetTotalAllocatedMemoryLong()` | Current memory usage |
| `Resources.UnloadUnusedAssets()` | Free unused asset memory |
| `QualitySettings.vSyncCount` | vSync setting (0=off for mobile) |
| `UniversalRenderPipelineAsset.renderScale` | Resolution scale (0.5-1.0) |
| `Permission.HasUserAuthorizedPermission()` | Check Android permission |
| `Permission.RequestUserPermission()` | Request Android permission |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Use default 30fps without setting explicitly | Set `Application.targetFrameRate = 60` | Default varies by platform; be explicit |
| Ignore `Screen.safeArea` | Adjust UI to safe area on all mobile builds | Notches and rounded corners clip content |
| Use PVRTC texture compression | Use ASTC (or ETC as fallback) | PVRTC deprecated in Unity 6.1; ASTC is better quality and supported everywhere |
| Allocate in Update on mobile | Pre-allocate, pool objects, avoid LINQ in hot paths | GC pauses are more noticeable on mobile (lower CPU) |
| Ship without profiling on device | Profile on actual target devices | Editor performance does not reflect mobile performance |
| Use `Renderer.material` (creates copies) | Use `MaterialPropertyBlock` | Material copies waste mobile memory |
| Ignore thermal state | Use Adaptive Performance or manual FPS monitoring | Throttled devices drop to unusable framerates |

## Version Notes

- **Unity 6.0+**: Adaptive Performance package supports Samsung, Apple devices for thermal/performance monitoring.
- **Unity 6.0+**: Device Simulator in Editor tests safe areas, screen cutouts, and various device resolutions.
- **Unity 6.1**: PVRTC texture format deprecated. Use ASTC or ETC for mobile.
- **Unity 6.0+**: ARM64 required for both Google Play and Apple App Store. 32-bit no longer accepted.
- **Unity 6.0+**: Android App Bundle (AAB) is required for Google Play distribution.
