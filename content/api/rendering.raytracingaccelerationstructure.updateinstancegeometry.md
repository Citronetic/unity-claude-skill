This version of Unity is unsupported.



# [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).UpdateInstanceGeometry




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

public void UpdateInstanceGeometry([Renderer](Renderer.html) renderer);






### Parameters



| Parameter | Description |
| --- | --- |
| renderer | The Renderer associated with the ray tracing instance. |





### Description



Marks the geometry of the ray tracing instance as dirty.




---








## Declaration

public void UpdateInstanceGeometry(int handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The handle associated with the ray tracing instance. |





### Description



Only ray tracing instances that use [RayTracingMode.DynamicGeometryManualUpdate](Experimental.Rendering.RayTracingMode.DynamicGeometryManualUpdate.html) can use this function to update their geometry. The function doesn't have any effects on ray tracing instances using procedural geometries (AABBs).





To trigger an acceleration structure build on the GPU, call [RayTracingAccelerationStructure.Build](Rendering.RayTracingAccelerationStructure.Build.html) or [CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html). After invoking one of these functions, the geometry is not considered dirty anymore.

Additional resources: [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [RayTracingAccelerationStructure.AddInstances](Rendering.RayTracingAccelerationStructure.AddInstances.html).


            
