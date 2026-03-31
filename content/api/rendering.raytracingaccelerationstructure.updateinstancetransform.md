This version of Unity is unsupported.



# [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).UpdateInstanceTransform




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

public void UpdateInstanceTransform([Renderer](Renderer.html) renderer);






### Parameters



| Parameter | Description |
| --- | --- |
| renderer | The Renderer associated with a ray tracing instance. |





### Description



Updates the transformation of a ray tracing instance.





For a ray tracing instance associated with a Renderer component, Unity retrieves the transformation from the Transform component.




---








## Declaration

public void UpdateInstanceTransform(int handle,
[Matrix4x4](Matrix4x4.html) matrix);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The handle associated with a AABB or Mesh ray tracing instance. |
| matrix | The new transformation matrix of the ray tracing instance. |





### Description



Updates the transformation of a ray tracing instance.





Pass along a new transformation matrix and the handle [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html) returns in order to transform a ray tracing instance associated with a axis-aligned bounding box (AABB) [GraphicsBuffer](GraphicsBuffer.html) or a [Mesh](Mesh.html).

Access the transformation matrix in shader code using `WorldToObject()` or `ObjectToWorld()` HLSL functions.

To trigger an acceleration structure build on the GPU, call [RayTracingAccelerationStructure.Build](Rendering.RayTracingAccelerationStructure.Build.html) or [CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html).

Additional resources: [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [RayTracingAccelerationStructure.RemoveInstance](Rendering.RayTracingAccelerationStructure.RemoveInstance.html).


            
