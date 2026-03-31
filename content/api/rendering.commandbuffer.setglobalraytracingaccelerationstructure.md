This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetGlobalRayTracingAccelerationStructure




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

public void SetGlobalRayTracingAccelerationStructure(string name,
[Rendering.RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html) accelerationStructure);






## Declaration

public void SetGlobalRayTracingAccelerationStructure(int nameID,
[Rendering.RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html) accelerationStructure);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the acceleration structure in shader code. |
| nameID | The name ID of the acceleration structure in shader code. Use Shader.PropertyToID to get this value. |
| accelerationStructure | The acceleration structure to set. |





### Description



Adds a command to bind the [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html) object to all shader stages.





This command binds a [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html) object to all shader stages. You can use the structure for inline ray tracing (ray queries) or as an argument in `TraceRay` calls in ray tracing shaders. The [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html) object must be built using the [BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html) method before calling this command.

Ray queries can be used to perform acceleration structure traversal and geometry intersection tests. To access this functionality, the HLSL code must be compiled using the `#pragma require inlineraytracing` directive or by using the built-in shader keyword `UNITY_DEVICE_SUPPORTS_INLINE_RAY_TRACING` (for example, #pragma multi_compile _ UNITY_DEVICE_SUPPORTS_INLINE_RAY_TRACING).

Additional resources: [Shader.SetGlobalRayTracingAccelerationStructure](Shader.SetGlobalRayTracingAccelerationStructure.html), [SystemInfo.supportsRayTracingShaders](SystemInfo-supportsRayTracingShaders.html), [SystemInfo.supportsInlineRayTracing](SystemInfo-supportsInlineRayTracing.html).


            
