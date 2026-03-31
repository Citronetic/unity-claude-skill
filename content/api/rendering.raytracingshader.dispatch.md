This version of Unity is unsupported.



# [RayTracingShader](Rendering.RayTracingShader.html).Dispatch




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel















## Declaration

public void Dispatch(string rayGenFunctionName,
int width,
int height,
int depth,
[Camera](Camera.html) camera);






### Parameters



| Parameter | Description |
| --- | --- |
| rayGenFunctionName | The name of the ray generation shader. |
| width | The width of the ray generation shader thread grid. |
| height | The height of the ray generation shader thread grid. |
| depth | The depth of the ray generation shader thread grid. |
| camera | Optional parameter used to setup camera-related built-in shader variables. |





### Description



Dispatches this [RayTracingShader](Rendering.RayTracingShader.html).





When a ray generation shader is executed, the GPU launches a 3D grid of threads. In HLSL, the values of width, height and depth can be retrieved using *DispatchRaysDimensions()* function. To retrieve the index of the ray generation shader invocation, *DispatchRaysIndex()* HLSL function can be used.

Width, height and depth must be above zero and width*height*depth <= 2^30.

When an optional Camera is specified as parameter, the built-in shader variables related to the Camera, Screen and Time are set up. Check [Built-in shader variables](../Manual/SL-UnityShaderVariables.html) for a complete list of these variables.

A RayTracingShader only supports the following shader types: ray generation, miss and callable.

You can use the following pragma directives in a raytrace file:



          - `#pragma max_recursion_depth <value>` - how many times you can recursively call `TraceRay` in HLSL. A value of 1 means you can call `TraceRay` from ray generation shaders only. Exceeding the declared recursion depth will cause undefined behavior, including GPU crashes.

          - `#pragma enable_ray_tracing_shader_debug_symbols` - embeds Program Database (PBD) files into shader binaries to make shader debugging available in debugging tools like PIX.

          - `#pragma only_renderers <values>` - compile this shader program only for given graphics APIs. For a list of values, see [Targeting graphics APIs and platforms in HLSL](../Manual/SL-ShaderCompilationAPIs.html).

          - `#pragma exclude_renderers <values>` - do not compile this shader program for given graphics APIs. For a list of values, see [Targeting graphics APIs and platforms in HLSL](../Manual/SL-ShaderCompilationAPIs.html).

          - `#pragma require <values>` - the minimum GPU features with which this shader is compatible. Replace <value> with one of the values: `native16bit`, `int64`, `int64bufferatomics`.

          - `#pragma disable_ray_payload_size_checks` - disables ray payload size compatibility checks between different ray tracing shader types. Use this carefully, because removing the check can cause corrupt ray payload data when mixing incompatible ray tracing shaders using different ray payloads.




              


```
#include "UnityShaderVariables.cginc"#pragma max_recursion_depth 1// Input
RaytracingAccelerationStructure g_SceneAccelStruct;
float g_Zoom; //Mathf.Tan(Mathf.Deg2Rad * Camera.main.fieldOfView * 0.5f)// Output
RWTexture2D<float4> g_Output;struct RayPayload
{
    float4 color;
};[shader("miss")]
void MainMissShader(inout RayPayload payload : SV_RayPayload)
{
    payload.color = float4(0, 0, 0, 1);
}[shader("raygeneration")]
void MainRayGenShader()
{
    uint2 launchIndex = DispatchRaysIndex().xy;
    uint2 launchDim = DispatchRaysDimensions().xy;    float2 frameCoord = float2(launchIndex.x, launchDim.y - launchIndex.y - 1) + float2(0.5, 0.5);    float2 ndcCoords = frameCoord / float2(launchDim.x - 1, launchDim.y - 1);    ndcCoords = ndcCoords * 2 - float2(1, 1);
    ndcCoords = ndcCoords * g_Zoom;    float aspectRatio = (float)launchDim.x / (float)launchDim.y;    float3 viewDirection = normalize(float3(ndcCoords.x * aspectRatio, ndcCoords.y, 1));    // Rotate the ray from view space to world space.
    float3 rayDirection = normalize(mul((float3x3)unity_CameraToWorld, viewDirection));    RayDesc ray;
    ray.Origin    = _WorldSpaceCameraPos;
    ray.Direction = rayDirection;
    ray.TMin      = 0.0f;
    ray.TMax      = 1000.0f;    RayPayload payload;
    payload.color = float4(1, 1, 1, 1);    uint missShaderIndex = 0;
    TraceRay(g_SceneAccelStruct, 0, 0xFF, 0, 1, missShaderIndex, ray, payload);    g_Output[frameCoord] = payload.color;
}
```





In this ray generation shader example, you calculate a ray direction based on the current 2D thread index returned by the `DispatchRaysIndex()` function.
The output is white if there is a ray/triangle intersection. When there is no intersection, the GPU executes MainMissShader and the output is black.
This example uses the `unity_CameraToWorld` built-in shader variable. You must specify a [Camera](Camera.html) as an argument for the `Dispatch` function to set this value correctly.

Additional resources: [SystemInfo.supportsRayTracingShaders](SystemInfo-supportsRayTracingShaders.html), [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).


            
