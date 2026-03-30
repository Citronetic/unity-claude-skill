This version of Unity is unsupported.

Use the camera in a custom URP shader

Use indirect lighting in a custom URP shader

# Use lighting in a custom URP shader

To use lighting in a custom Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader), follow these steps:

1. Add `#include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"` inside the `HLSLPROGRAM` in your shader file.

2. Use any of the methods from the following sections.

## Get light data

The `Lighting.hlsl` file imports the `RealtimeLights.hlsl` file, which contains the following methods.

| Method | Syntax | Description |
| --- | --- | --- |
| GetMainLight | Light GetMainLight() | Returns the main light in the sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary. |
| GetAdditionalLight | Light GetAdditionalLight(uint lightIndex, float3 positionInWorldSpace) | Returns the lightIndex additional light that affects positionWS. For example, if lightIndex is 0, this method returns the first additional light. |
| GetAdditionalLightsCount | int GetAdditionalLightsCount() | Returns the number of additional lights. Note: this function always returns 0 in the Forward+ rendering pathThe technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. More infoSee in Glossary. For more information, refer to Iterate over additional lights in the Forward+ rendering path. |

Refer to [Use shadows in a custom URP shader](use-built-in-shader-methods-shadows.html) for information on versions of these methods you can use to calculate shadows.

### Calculate lighting for a surface normal

| Method | Syntax | Description |
| --- | --- | --- |
| LightingLambert | half3 LightingLambert(half3 lightColor, half3 lightDirection, half3 surfaceNormal) | Returns the diffuse lighting for the surface normal, calculated using the Lambert model. |
| LightingSpecular | half3 LightingSpecular(half3 lightColor, half3 lightDirection, half3 surfaceNormal, half3 viewDirection, half4 specularAmount, half smoothnessAmount) | Returns the specular lighting for the surface normal, using simple shading. |

## Calculate ambient occlusion

The `Lighting.hlsl` file imports the `AmbientOcclusion.hlsl` file, which contains the following methods.

| Method | Syntax | Description |
| --- | --- | --- |
| SampleAmbientOcclusion | half SampleAmbientOcclusion(float2 normalizedScreenSpaceUV) | Returns the ambient occlusion value at the position in screen space, where 0 means occluded and 1 means unoccluded. |
| GetScreenSpaceAmbientOcclusion | AmbientOcclusionFactor GetScreenSpaceAmbientOcclusion(float2 normalizedScreenSpaceUV) | Returns the indirect and direct ambient occlusion values at the position in screen space, where 0 means occluded and 1 means unoccluded. |

Refer to [Ambient occlusion](post-processing-ssao.html)A method to approximate how much ambient light (light not coming from a specific direction) can hit a point on a surface.
See in [Glossary](../Glossary.html#Ambientocclusion) for more information.

## Structs

### AmbientOcclusionFactor

Use the `GetScreenSpaceAmbientOcclusion` method to return this struct.

| Field | Description |
| --- | --- |
| half indirectAmbientOcclusion | The amount the object is in shadow from ambient occlusion caused by objects blocking indirect light. |
| half directAmbientOcclusion | The amount the object is in shadow from ambient occlusion caused by objects blocking direct light. |

### Light

Use the `GetMainLight` and `GetAdditionalLight` methods to return this struct.

| Field | Description |
| --- | --- |
| half3 direction | The direction of the light. |
| half3 color | The color of the light. |
| float distanceAttenuation | The strength of the light, based on its distance from the object. |
| half shadowAttenuation | The strength of the light, based on whether the object is in shadow. |
| uint layerMask | The layer maskA value defining which layers to include or exclude from an operation, such as rendering, collision or your own code. More infoSee in Glossary of the light. |

## Example

The following URP shader draws object surfaces with the amount of light they receive from the main directional light.

```hlsl
Shader "Custom/LambertLighting"
{
    SubShader
    {
        Tags { "RenderType" = "Opaque" "RenderPipeline" = "UniversalPipeline" }

        Pass
        {
            HLSLPROGRAM

            #pragma vertex vert
            #pragma fragment frag

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                float2 uv: TEXCOORD0;
            };

            struct Varyings
            {
                float4 positionCS  : SV_POSITION;
                float2 uv: TEXCOORD0;
                half3 lightAmount : TEXCOORD2;
            };

            Varyings vert(Attributes IN)
            {
                Varyings OUT;

                OUT.positionCS = TransformObjectToHClip(IN.positionOS.xyz);

                // Get the VertexNormalInputs of the vertex, which contains the normal in world space
                VertexNormalInputs positions = GetVertexNormalInputs(IN.positionOS);

                // Get the properties of the main light
                Light light = GetMainLight();

                // Calculate the amount of light the vertex receives
                OUT.lightAmount = LightingLambert(light.color, light.direction, positions.normalWS.xyz);

                return OUT;
            }

            half4 frag(Varyings IN) : SV_Target
            {
                // Set the fragment color to the interpolated amount of light
                return float4(IN.lightAmount, 1);
            }
            ENDHLSL
        }
    }
}
```

## Additional resources

- [Writing custom shaders](writing-custom-shaders-urp.html)

- [Upgrade custom shaders for URP compatibility](urp-shaders/birp-urp-custom-shader-upgrade-guide.html)

- [HLSL in Unity](../writing-shader-writing-shader-programs-hlsl.html)

- [Use additional lights in the Forward+ rendering path](use-built-in-shader-methods-additional-lights-fplus.html)

Use the camera in a custom URP shader

Use indirect lighting in a custom URP shader
