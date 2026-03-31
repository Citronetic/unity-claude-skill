This version of Unity is unsupported.



# [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).RemoveInstance




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

public void RemoveInstance([Renderer](Renderer.html) targetRenderer);






### Parameters



| Parameter | Description |
| --- | --- |
| targetRenderer | The Renderer associated with the ray tracing instance. |





### Description



Removes a ray tracing instance associated with a Renderer from this RayTracingAccelerationStructure.




---








## Declaration

public void RemoveInstance(int handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The handle associated with an AABB or Mesh ray tracing instance. |





### Description



Removes a ray tracing instance associated with an axis-aligned bounding box (AABBs) [GraphicsBuffer](GraphicsBuffer.html) or a [Mesh](Mesh.html) instance from this RayTracingAccelerationStructure.





Note that to build the acceleration structure on the GPU, you must call [RayTracingAccelerationStructure.Build](Rendering.RayTracingAccelerationStructure.Build.html) or [CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html).

Additional resources: [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [RayTracingAccelerationStructure.ClearInstances](Rendering.RayTracingAccelerationStructure.ClearInstances.html).


            
