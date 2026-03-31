# Rendering 3D -- Synthesis Notes

> Source: 2469 pages from manual(637), learn-tutorial(71), api-reference(1758), package-docs(3)
> Generated: 2026-03-31
> Status: CURATED

## Key Concepts

**Universal Render Pipeline (URP)**: The recommended render pipeline for Unity 6. Use URP for all new projects. It replaces the Built-in Render Pipeline with better performance (SRP Batcher), more features (Render Graph), and cross-platform optimization. Create a URP Asset: Assets > Create > Rendering > URP Asset.

**Materials and Shaders**: Materials define surface appearance. URP uses the Lit shader for PBR (physically-based rendering) and Unlit for no-lighting materials. Key properties: Base Map (albedo), Metallic/Smoothness, Normal Map, Emission. Use Shader Graph for custom shaders without code.

**Lighting**: URP supports Directional, Point, Spot, and Area lights. Use one Directional light for the sun. Bake static lighting with the Progressive GPU Lightmapper for performance. Use Light Probes for dynamic objects in baked scenes. Reflection Probes capture environment reflections.

**Cameras**: URP Camera component replaces the old Camera. Camera Stack: Base Camera renders the scene, Overlay Cameras render on top (e.g., UI, minimap). Set Render Type to "Overlay" for stacked cameras. Post-processing is per-camera via Volume system.

**Post-Processing**: URP Volumes contain post-processing effects. Global Volume affects the entire scene. Local Volume affects objects within its bounds. Effects: Bloom, Color Grading, Depth of Field, Motion Blur, Tonemapping. Add Volume component + Volume Profile asset.

## Patterns & Workflows

### URP Project Setup
1. Create project from "3D (URP)" template (or install URP package: `com.unity.render-pipelines.universal`)
2. Create URP Asset: Assets > Create > Rendering > URP Asset (with Universal Renderer)
3. Assign: Edit > Project Settings > Graphics > Scriptable Render Pipeline Settings > your URP Asset
4. Configure URP Asset: SRP Batcher ON, HDR ON, Depth/Opaque texture as needed
5. Assign Universal Renderer to the URP Asset's Renderer List

### Material Setup
```csharp
using UnityEngine;

public class MaterialHelper : MonoBehaviour
{
    [SerializeField] private Renderer targetRenderer;

    // Change material properties at runtime using MaterialPropertyBlock (no material copies)
    private MaterialPropertyBlock mpb;

    private void Awake()
    {
        mpb = new MaterialPropertyBlock();
    }

    public void SetColor(Color color)
    {
        targetRenderer.GetPropertyBlock(mpb);
        mpb.SetColor("_BaseColor", color); // URP Lit shader uses _BaseColor
        targetRenderer.SetPropertyBlock(mpb);
    }

    public void SetEmission(Color emissionColor, float intensity)
    {
        targetRenderer.GetPropertyBlock(mpb);
        mpb.SetColor("_EmissionColor", emissionColor * intensity);
        targetRenderer.SetPropertyBlock(mpb);
    }

    // If you need a unique material instance (breaks batching)
    public void CreateUniqueMaterial()
    {
        // .material creates a copy; .sharedMaterial references the asset
        var mat = targetRenderer.material; // creates instance
        mat.SetFloat("_Smoothness", 0.8f);
    }
}
```

### Post-Processing with Volumes
```csharp
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

public class PostProcessController : MonoBehaviour
{
    [SerializeField] private Volume globalVolume;

    private Bloom bloom;
    private Vignette vignette;
    private ColorAdjustments colorAdjustments;

    private void Awake()
    {
        // Get overrides from the volume profile
        globalVolume.profile.TryGet(out bloom);
        globalVolume.profile.TryGet(out vignette);
        globalVolume.profile.TryGet(out colorAdjustments);
    }

    // Call when player takes damage
    public void DamageEffect()
    {
        if (vignette != null)
        {
            vignette.intensity.Override(0.5f);
            vignette.color.Override(Color.red);
        }
    }

    // Adjust bloom at runtime
    public void SetBloom(float intensity, float threshold)
    {
        if (bloom != null)
        {
            bloom.intensity.Override(intensity);
            bloom.threshold.Override(threshold);
        }
    }

    // Restore defaults
    public void ResetEffects()
    {
        vignette?.intensity.Override(0f);
    }
}
```

### Camera Stack Setup
```csharp
using UnityEngine;
using UnityEngine.Rendering.Universal;

public class CameraStackManager : MonoBehaviour
{
    [SerializeField] private Camera baseCamera;
    [SerializeField] private Camera uiCamera;
    [SerializeField] private Camera minimapCamera;

    private void Awake()
    {
        // Get URP camera data
        var baseCamData = baseCamera.GetUniversalAdditionalCameraData();

        // Add overlay cameras to the base camera's stack
        baseCamData.cameraStack.Add(uiCamera);
        baseCamData.cameraStack.Add(minimapCamera);

        // Ensure overlays have correct render type
        uiCamera.GetUniversalAdditionalCameraData().renderType = CameraRenderType.Overlay;
        minimapCamera.GetUniversalAdditionalCameraData().renderType = CameraRenderType.Overlay;
    }
}
```

### Shader Graph -- Runtime Property Control
```csharp
using UnityEngine;

// Control Shader Graph exposed properties at runtime
public class ShaderController : MonoBehaviour
{
    [SerializeField] private Renderer targetRenderer;

    private Material mat;
    private static readonly int DissolveAmountID = Shader.PropertyToID("_DissolveAmount");
    private static readonly int EdgeColorID = Shader.PropertyToID("_EdgeColor");

    private void Awake()
    {
        // Create material instance for per-object control
        mat = targetRenderer.material;
    }

    // Dissolve effect: animate _DissolveAmount from 0 to 1
    public async void Dissolve(float duration)
    {
        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            mat.SetFloat(DissolveAmountID, elapsed / duration);
            await Awaitable.NextFrameAsync();
        }
        Destroy(gameObject);
    }

    private void OnDestroy()
    {
        // Clean up runtime material instance
        if (mat != null) Destroy(mat);
    }
}
```

### Lighting Setup
```csharp
using UnityEngine;
using UnityEngine.Rendering;

public class DayNightCycle : MonoBehaviour
{
    [SerializeField] private Light directionalLight;
    [SerializeField] private Gradient skyColor;
    [SerializeField] private Gradient lightColor;
    [SerializeField] private AnimationCurve lightIntensity;
    [SerializeField] private float cycleDuration = 120f; // seconds

    private float timeOfDay = 0.5f; // 0=midnight, 0.5=noon, 1=midnight

    private void Update()
    {
        timeOfDay += Time.deltaTime / cycleDuration;
        if (timeOfDay > 1f) timeOfDay -= 1f;

        // Rotate sun
        directionalLight.transform.rotation = Quaternion.Euler((timeOfDay * 360f) - 90f, 170f, 0f);

        // Update colors
        directionalLight.color = lightColor.Evaluate(timeOfDay);
        directionalLight.intensity = lightIntensity.Evaluate(timeOfDay);
        RenderSettings.ambientSkyColor = skyColor.Evaluate(timeOfDay);
    }
}
```

## Code Examples

### Bake Lighting via Script
```csharp
using UnityEditor;
using UnityEngine;

public static class LightingHelper
{
    [MenuItem("Tools/Bake Lighting")]
    public static void BakeLighting()
    {
        // Unity 6+: Auto Generate removed; must call explicitly
        Lightmapping.BakeAsync();
        Debug.Log("Lightmapping bake started");
    }

    [MenuItem("Tools/Clear Baked Data")]
    public static void ClearBakedData()
    {
        Lightmapping.Clear();
        Lightmapping.ClearLightingDataAsset();
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `Volume.profile.TryGet<T>(out T)` | Get post-processing override from volume |
| `VolumeParameter.Override(value)` | Set post-processing parameter at runtime |
| `Camera.GetUniversalAdditionalCameraData()` | Access URP camera settings |
| `MaterialPropertyBlock` | Per-instance material properties (no copies) |
| `Shader.PropertyToID("_Name")` | Cache shader property ID for performance |
| `Renderer.SetPropertyBlock(mpb)` | Apply property block to renderer |
| `Light.intensity` | Light brightness |
| `Light.color` | Light color |
| `Lightmapping.BakeAsync()` | Start async lightmap bake (Unity 6+) |
| `RenderSettings.ambientSkyColor` | Scene ambient sky color |
| `RenderSettings.fog` | Enable/disable fog |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Use Built-in Render Pipeline for new projects | Use URP | Built-in RP is legacy; URP has SRP Batcher, Render Graph, better mobile perf |
| Use `SetupRenderPasses` (URP) | Use `RecordRenderGraph` | `SetupRenderPasses` deprecated in Unity 6.2 |
| Use `GraphicsFormat.DepthAuto` | Use `GraphicsFormat.None` for depth-only | `DepthAuto/ShadowAuto/VideoAuto` removed in Unity 6.0 |
| Use Enlighten Baked GI | Use Progressive Lightmapper (GPU or CPU) | Enlighten removed in Unity 6.0 |
| Use Auto Generate lighting | Call `Lightmapping.Bake()` explicitly | Auto Generate removed in Unity 6.0 |
| Use `_FORWARD_PLUS` shader keyword | Use `_CLUSTER_LIGHT_LOOP` | Keyword renamed in Unity 6.1 |
| Modify `renderer.material` for shared changes | Use `renderer.sharedMaterial` or `MaterialPropertyBlock` | `.material` creates per-instance copy; MPB avoids allocation |
| Use `renderer.material` without cleanup | Destroy runtime materials in `OnDestroy` | Leaked material instances are memory leaks |

## Version Notes

- **Unity 6.0**: `GraphicsFormat.DepthAuto`, `ShadowAuto`, `VideoAuto` produce compile errors. Use `GraphicsFormat.None`.
- **Unity 6.0**: Enlighten Baked GI removed. Use Progressive Lightmapper.
- **Unity 6.0**: Auto Generate lighting removed. Must call `Lightmapping.Bake()` or `BakeAsync()`.
- **Unity 6.0**: `CustomEditorForRenderPipelineAttribute` replaced by `CustomEditor` + `SupportedOnRenderPipelineAttribute`.
- **Unity 6.1**: `_FORWARD_PLUS` shader keyword renamed to `_CLUSTER_LIGHT_LOOP`.
- **Unity 6.2**: `SetupRenderPasses` deprecated in URP. Use `RecordRenderGraph`.
- **Unity 6.2**: `VisualElement.transform` deprecated; use `style.translate/rotate/scale`.
