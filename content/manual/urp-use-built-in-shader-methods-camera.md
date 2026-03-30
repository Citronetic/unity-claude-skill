This version of Unity is unsupported.

Transform positions in a custom URP shader

Use lighting in a custom URP shader

# Use the camera in a custom URP shader

To use the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera) in a custom Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader), follow these steps:

1. Add `#include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"` inside the `HLSLPROGRAM` in your shader file. The `Core.hlsl` file imports the `ShaderVariablesFunction.hlsl` file.

2. Use one of the following methods from the `ShaderVariablesFunction.hlsl` file.

| Method | Syntax | Description |
| --- | --- | --- |
| GetCameraPositionWS | float3 GetCameraPositionWS() | Returns the world space position of the camera. |
| GetScaledScreenParams | float4 GetScaledScreenParams() | Returns the width and height of the screen in pixelsThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary. |
| GetViewForwardDir | float3 GetViewForwardDir() | Returns the forward direction of the view in world space. |
| IsPerspectiveProjection | bool IsPerspectiveProjection() | Returns true if the camera projection is set to perspective. |
| LinearDepthToEyeDepth | half LinearDepthToEyeDepth(half linearDepth) | Converts a linear depth bufferA memory store that holds the z-value depth of each pixel in an image, where the z-value is the depth for each rendered pixel from the projection plane. More infoSee in Glossary value to view depth. Refer to Cameras and depth textures for more information. |
| TransformScreenUV | void TransformScreenUV(inout float2 screenSpaceUV) | Flips the y coordinate of the screen space position, if Unity uses an upside-down coordinate space. You can also input both a uv, and the screen height as a float, so the method outputs the position scaled to the screen size in pixels. |

## Example

The following URP shader draws object surfaces with colors that represent the direction from the surface to the camera.

```hlsl
Shader "Custom/DirectionToCamera"
{
    SubShader
    {
        Tags { "RenderType" = "Opaque" "RenderPipeline" = "UniversalPipeline" }

        Pass
        {
            HLSLPROGRAM

            #pragma vertex vert
            #pragma fragment frag

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                float2 uv: TEXCOORD0;
            };

            struct Varyings
            {
                float4 positionCS  : SV_POSITION;
                float2 uv: TEXCOORD0;
                float3 viewDirection : TEXCOORD2;
            };

            Varyings vert(Attributes IN)
            {
                Varyings OUT;

                // Get the positions of the vertex in different coordinate spaces
                VertexPositionInputs positions = GetVertexPositionInputs(IN.positionOS);
                OUT.positionCS = positions.positionCS;

                // Get the direction from the vertex to the camera, in world space
                OUT.viewDirection = GetCameraPositionWS() - positions.positionWS.xyz;

                return OUT;
            }

            half4 frag(Varyings IN) : SV_Target
            {
                // Set the fragment color to the direction vector
                return float4(IN.viewDirection, 1);
            }
            ENDHLSL
        }
    }
}
```

## Additional resources

- [Cameras in URP](cameras/camera-differences-in-urp.html)

- [Writing custom shaders](writing-custom-shaders-urp.html)

- [Upgrade custom shaders for URP compatibility](urp-shaders/birp-urp-custom-shader-upgrade-guide.html)

- [HLSL in Unity](https://docs.unity3d.com/Manual/SL-ShaderPrograms.html)

Transform positions in a custom URP shader

Use lighting in a custom URP shader
