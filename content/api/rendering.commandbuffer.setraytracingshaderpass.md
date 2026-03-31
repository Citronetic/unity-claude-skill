This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetRayTracingShaderPass




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

public void SetRayTracingShaderPass([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string passName);






### Parameters



| Parameter | Description |
| --- | --- |
| rayTracingShader | RayTracingShader to set parameter for. |
| passName | The Shader Pass to use when executing ray tracing shaders. |





### Description



Adds a command to select which Shader Pass to use when executing ray/geometry intersection shaders.





This name is specified in the ShaderLab shaders used by Materials applied to Renderers used in ray tracing. If a shader doesn't have a Shader Pass with the specified name, then no ray/geometry intersection code is executed. This method must be called before calling [CommandBuffer.DispatchRays](Rendering.CommandBuffer.DispatchRays.html).

The Shader Pass code can include optional closest hit or any hit shaders.

For procedural ray-traced geometries, an intersection shader must be authored. The engine code will automatically enable a keywork named `RAY_TRACING_PROCEDURAL_GEOMETRY` if the geometry is proceduraly ray-traced.


              


```
SubShader
{
    Pass
    {
        // CommandBuffer.SetRayTracingShaderPass must use this name in order to execute the ray tracing shaders from this Pass.
        Name "Test"        Tags{ "LightMode" = "RayTracing" }        HLSLPROGRAM        #pragma multi_compile_local RAY_TRACING_PROCEDURAL_GEOMETRY        #pragma raytracing test        struct AttributeData
        {
            float2 barycentrics;
        };        struct RayPayload
        {
            float4 color;
        };#if RAY_TRACING_PROCEDURAL_GEOMETRY
        [shader("intersection")]
        void IntersectionMain()
        {
            AttributeData attr;
            attr.barycentrics = float2(0, 0);
            ReportHit(0, 0, attr);
        }
#endif        [shader("closesthit")]
        void ClosestHitMain(inout RayPayload payload : SV_RayPayload, AttributeData attribs : SV_IntersectionAttributes)
        {
            payload.color = float4(1, 0, 0, 1);
        }        ENDHLSL
    }
}
```


            
