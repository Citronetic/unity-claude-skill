This version of Unity is unsupported.

Use indirect lighting in a custom URP shader

ShaderLab Pass tags in URP reference

# Use shadows in a custom URP shader

To use shadows in a custom Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader), follow these steps:

1. Add `#include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"` inside the `HLSLPROGRAM` in your shader file. The `Core.hlsl` file imports the `Shadows.hlsl` and `RealtimeLights.hlsl` files.

2. Use any of the methods from the following sections.

## Get a position in shadow space

Use these methods to convert positions to shadow map positions.

| Method | Syntax | Description |
| --- | --- | --- |
| GetShadowCoord | float4 GetShadowCoord(VertexPositionInputs vertexInputs) | Converts a vertex position into shadow space. Refer to Transform positions in a custom URP shader for information on the VertexPositionInputs struct. |
| TransformWorldToShadowCoord | float4 TransformWorldToShadowCoord(float3 positionInWorldSpace) | Converts a position in world space to shadow space. |

## Calculate shadows

The following methods calculate shadows using shadow maps. To use these methods, follow these steps first:

1. Make sure there are objects in your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene) that have a `ShadowCaster` shader pass, for example objects that use the `Universal Render Pipeline/Lit` shader.

2. Add `#pragma multi_compile _ _MAIN_LIGHT_SHADOWS _MAIN_LIGHT_SHADOWS_CASCADE _MAIN_LIGHT_SHADOWS_SCREEN` to your shader, so it can access the shadow map for the main light.

3. Add `#pragma multi_compile _ _ADDITIONAL_LIGHT_SHADOWS` to your shader, so it can access the shadow maps for additional lights.

| Method | Syntax | Description |
| --- | --- | --- |
| GetMainLight | Light GetMainLight(float4 shadowCoordinates) | Returns the main light in the scene, with a shadowAttenuation value based on whether the position at the shadow coordinates is in shadow. |
| ComputeCascadeIndex | half ComputeCascadeIndex(float3 positionInWorldSpace) | Returns the index of the shadow cascade at the position in world space. Refer to Shadow cascades for more information. |
| MainLightRealtimeShadow | half MainLightRealtimeShadow(float4 shadowCoordinates) | Returns the shadow value from the main shadow map at the coordinates. Refer to Shadow mapping for more information. |
| AdditionalLightRealtimeShadow | half AdditionalLightRealtimeShadow(int lightIndex, float3 positionInWorldSpace) | Returns the shadow value from the additional light shadow map at the position in world space. |
| GetMainLightShadowFade | half GetMainLightShadowFade(float3 positionInWorldSpace) | Returns the amount to fade the shadow from the main light, based on the distance between the position and the cameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary. |
| GetAdditionalLightShadowFade | half GetAdditionalLightShadowFade(float3 positionInWorldSpace) | Returns the amount to fade the shadow from additional lights, based on the distance between the position and the camera. |
| ApplyShadowBias | float3 ApplyShadowBias(float3 positionInWorldSpace, float3 normalWS, float3 lightDirection) | Adds shadow bias to the position in world space. Refer to Shadow troubleshooting for more information. |

## Example

This code example is a simplified example of drawing shadows onto a surface. It might not work correctly with more than one [shadow cascade](../shadow-cascades.html).

To generate shadows, make sure there are objects in your scene that have a `ShadowCaster` shader pass, for example objects that use the `Universal Render Pipeline/Lit` shader.

```hlsl
Shader "Custom/SimpleShadows"
{
    SubShader
    {

        Tags { "RenderType" = "AlphaTest" "RenderPipeline" = "UniversalPipeline" }

        Pass
        {
            HLSLPROGRAM

            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile _ _MAIN_LIGHT_SHADOWS _MAIN_LIGHT_SHADOWS_CASCADE _MAIN_LIGHT_SHADOWS_SCREEN

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            struct Attributes
            {
                float4 positionOS  : POSITION;
            };

            struct Varyings
            {
                float4 positionCS  : SV_POSITION;
                float4 shadowCoords : TEXCOORD3;
            };

            Varyings vert(Attributes IN)
            {
                Varyings OUT;

                OUT.positionCS = TransformObjectToHClip(IN.positionOS.xyz);

                // Get the VertexPositionInputs for the vertex position
                VertexPositionInputs positions = GetVertexPositionInputs(IN.positionOS.xyz);

                // Convert the vertex position to a position on the shadow map
                float4 shadowCoordinates = GetShadowCoord(positions);

                // Pass the shadow coordinates to the fragment shader
                OUT.shadowCoords = shadowCoordinates;

                return OUT;
            }

            half4 frag(Varyings IN) : SV_Target
            {
                // Get the value from the shadow map at the shadow coordinates
                half shadowAmount = MainLightRealtimeShadow(IN.shadowCoords);

                // Set the fragment color to the shadow value
                return shadowAmount;
            }

            ENDHLSL
        }
    }
}
```

## Additional resources

- [Shadows](https://docs.unity3d.com/Manual/Shadows.html)A UI component that adds a simple outline effect to graphic components such as Text or Image. It must be on the same GameObject as the graphic component. [More info](../https://docs.unity3d.com/Packages/com.unity.ugui@latest/index.html?subfolder=/manual/script-Shadow.html)
See in [Glossary](../Glossary.html#Shadow)

- [Shadows in URP](Shadows-in-URP.html)

- [Writing custom shaders](writing-custom-shaders-urp.html)

- [Upgrade custom shaders for URP compatibility](urp-shaders/birp-urp-custom-shader-upgrade-guide.html)

- [HLSL in Unity](https://docs.unity3d.com/Manual/SL-ShaderPrograms.html)

Use indirect lighting in a custom URP shader

ShaderLab Pass tags in URP reference
