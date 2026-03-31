This version of Unity is unsupported.



# [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).UpdateInstanceMask




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

public void UpdateInstanceMask([Renderer](Renderer.html) renderer,
uint mask);






### Parameters



| Parameter | Description |
| --- | --- |
| renderer | The Renderer associated with the ray tracing instance. |
| mask | The new mask. |





### Description



Updates the instance mask of a ray tracing instance.




---








## Declaration

public void UpdateInstanceMask(int handle,
uint mask);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The handle associated with an AABB or Mesh ray tracing instance. |
| mask | The new mask. |





### Description



Updates the instance mask of a ray tracing instance.





Pass along a new mask and the handle [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html) returns in order to update ray tracing mask associated with an axis-aligned bounding box (AABB) [GraphicsBuffer](GraphicsBuffer.html) or a [Mesh](Mesh.html).

Ray tracing instances in the acceleration structure contain an 8-bit user defined instance mask. The `TraceRay()` HLSL function has an 8-bit input parameter, `InstanceInclusionMask` which gets ANDed with the instance mask from any ray tracing instance that is a candidate for intersection during acceleration structure traversal on the GPU. If the result of the AND operation is zero, the GPU ignores the intersection.

Note that building the acceleration structure on the GPU has to be triggered by calling [RayTracingAccelerationStructure.Build](Rendering.RayTracingAccelerationStructure.Build.html) or [CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html).

Additional resources: [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [RayTracingAccelerationStructure.RemoveInstance](Rendering.RayTracingAccelerationStructure.RemoveInstance.html).


            
