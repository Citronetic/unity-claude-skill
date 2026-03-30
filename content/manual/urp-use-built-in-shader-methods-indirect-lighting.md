This version of Unity is unsupported.

Use lighting in a custom URP shader

Use shadows in a custom URP shader

# Use indirect lighting in a custom URP shader

To use indirect lighting in a custom Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader), follow these steps:

1. Add an `#include` line inside the `HLSLPROGRAM` block in your shader file. Refer to the sections on this page for specific include file paths.

2. Use any of the methods from the following sections.

## Use reflection probes in a custom URP shader

To use **reflection probes**A rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. [More info](../class-ReflectionProbe.html)
See in [Glossary](../Glossary.html#ReflectionProbe) or the **skybox**A special type of Material used to represent skies. Usually six-sided. [More info](../sky-landing.html)
See in [Glossary](../Glossary.html#Skybox), use the following `#include` line:

```cpp
#include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/GlobalIllumination.hlsl"
```

| Method | Syntax | Description |
| --- | --- | --- |
| GlossyEnvironmentReflection | half3 GlossyEnvironmentReflection(half3 reflectVector, float3 positionWS, half perceptualRoughness, half occlusion, float2 normalizedScreenSpaceUV) | Samples reflection probes if the object is within a reflection probe volume. Samples the skybox otherwise. The function supports reflection probe blending.The perceptualRoughness argument selects the mip level of the sampled texture. The higher the value, the more blurred the reflections look.The occlusion argument is the reflection probe attenuation factor.The normalizedScreenSpaceUV argument is the normalized screen space position of the fragment. |

The `GlossyEnvironmentReflection` function has the following simpler overload, which does not support blending:

```cpp
half3 GlossyEnvironmentReflection(half3 reflectVector, half perceptualRoughness, half occlusion)
```

## Sample Adaptive Probe Volumes

To sample Adaptive Probe Volumes (APV), use the following `#include` line:

```cpp
#include "Packages/com.unity.render-pipelines.core/Runtime/Lighting/ProbeVolume/ProbeVolume.hlsl"
```

| Method | Syntax | Description |
| --- | --- | --- |
| EvaluateAdaptiveProbeVolume | void EvaluateAdaptiveProbeVolume(in float3 posWS, in float3 normalWS, in float3 viewDir, in float2 positionSS, in uint renderingLayer, out float3 bakeDiffuseLighting) | Samples lighting from Adaptive Probe Volumes.The positionSS argument is the screen space position of a fragment that is being rendered.The renderingLayer argument is the rendering layer mask. |

## Sample light probes

To sample light probes, use the following `#include` line:

```cpp
#include "Packages/com.unity.render-pipelines.core/ShaderLibrary/AmbientProbe.hlsl"
```

| Method | Syntax | Description |
| --- | --- | --- |
| SampleSH | real3 SampleSH(real3 normalWS) | Sample light probesLight probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. More infoSee in Glossary. |

## Example

The following URP shader code computes diffuse and specular **ambient light**Light that doesn’t come from any specific direction, and contributes equal light in all directions to the Scene. [More info](../lighting-window.html)
See in [Glossary](../Glossary.html#Ambientlight) using the `GlossyEnvironmentReflection` function.

```hlsl
float3 CustomLightingAmbient(float3 BaseColor,
                            float3 NormalWS,
                            float Metallic,
                            float Smoothness,
                            float Reflectance,
                            float AmbientOcclusion,
                            float PositionWS,
                            float2 screenspaceUV,
                            float3 ViewDirWS)
{
    // Diffuse ambient lighting.
    // Sample the sky probe with high roughness and use a normal vector instead of
    // a reflection vector to approximate ambient light
    float3 DiffuseAmbient = GlossyEnvironmentReflection(NormalWS, PositionWS, 1, 1, screenspaceUV);
    // If the surface is metallic, set ambient to zero, otherwise multiply by BaseColor
    DiffuseAmbient *= lerp(BaseColor, float3(0,0,0), Metallic);

    // Specular ambient lighting - reflections
    // Surfaces are more reflective at glancing angles. Compute the fresnel value for reflectance.
    float Fresnel = pow((1 - dot(NormalWS, ViewDirWS)), 5);
    // Reflectance is 100% at the glancing angle
    Reflectance = lerp(Reflectance, 1, Fresnel);
    // If the object is metal, use the base color for reflectance instead.
    float3 ReflectionColor = lerp(float3(Reflectance, Reflectance, Reflectance), BaseColor, Metallic);
    // Compute the reflection vector and use it to sample the sky probe for reflections.
    float3 ReflectionVector = reflect(-ViewDirWS, NormalWS);
    float3 SpecularAmbient = GlossyEnvironmentReflection(ReflectionVector, PositionWS, 1 - Smoothness, 1, screenspaceUV);

    return (DiffuseAmbient + SpecularAmbient) * AmbientOcclusion;
}
```

## Shader graph custom function node example

[Shader Graph Feature Examples](https://docs.unity3d.com/Packages/com.unity.shadergraph@latest/index.html?subfolder=/manual/Shader-Graph-Sample-Feature-Examples.html) contain examples of custom lighting models.

To learn how to use the `GlossyEnvironmentReflection` function in a custom function node:

1. In the example **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene), open the **CustomLightingSimple** shader graph.

2. Navigate to the **SampleReflectionProbes** sub-graph.

3. Inspect the **URPReflectionProbe** node. The node contains the HLSL code that uses the `GlossyEnvironmentReflection` function:

```hlsl
#ifdef SHADERGRAPH_PREVIEW
    reflection = float3(0,0,0);
#else
    reflection = GlossyEnvironmentReflection(reflectVector, positionWS, roughness, 1.0h, screenspaceUV);
#endif
```

## Additional resources

- [Writing custom shaders](writing-custom-shaders-urp.html)

- [Upgrade custom shaders for URP compatibility](urp-shaders/birp-urp-custom-shader-upgrade-guide.html)

- [Reflection probes in URP](lighting/reflection-probes-introduction.html)

- [HLSL in Unity](../writing-shader-writing-shader-programs-hlsl.html)

- [Adaptive Probe Volumes (APV) in URP](probevolumes.html)

- [Light probes](../LightProbes-landing.html)

- [Shader Graph Feature Examples](https://docs.unity3d.com/Packages/com.unity.shadergraph@latest/index.html?subfolder=/manual/Shader-Graph-Sample-Feature-Examples.html)

Use lighting in a custom URP shader

Use shadows in a custom URP shader
