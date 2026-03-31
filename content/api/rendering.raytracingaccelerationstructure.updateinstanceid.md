This version of Unity is unsupported.



# [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).UpdateInstanceID




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

public void UpdateInstanceID([Renderer](Renderer.html) renderer,
uint instanceID);






### Parameters



| Parameter | Description |
| --- | --- |
| renderer | The Renderer associated with the ray tracing instance. |
| instanceID | The new instance ID. |





### Description



Updates the instance ID of a ray tracing instance.




---








## Declaration

public void UpdateInstanceID(int handle,
uint instanceID);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The handle associated with an AABB or Mesh ray tracing instance. |
| instanceID | The new instance ID. |





### Description



Updates the instance ID of a ray tracing instance.





Pass along a new instance ID and the handle [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html) returns in order to update the ray tracing instance ID associated with an axis-aligned bounding box (AABB) [GraphicsBuffer](GraphicsBuffer.html) or a [Mesh](Mesh.html).

Ray tracing instances in the acceleration structure contain an user-defined instance ID. You can access this instance ID in HLSL using `InstanceID()` intrinsic which provides a way to access additional per-instance custom data. Note that this function is available only in closest hit, any hit, and intersection shaders.

By default, if an instance ID is not specified when calling [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html) function, Unity will assign a instance ID lower than the value returned by the [RayTracingAccelerationStructure.GetInstanceCount](Rendering.RayTracingAccelerationStructure.GetInstanceCount.html) function.

Note that building the acceleration structure on the GPU has to be triggered by calling [RayTracingAccelerationStructure.Build](Rendering.RayTracingAccelerationStructure.Build.html) or [CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html).

Additional resources: [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [RayTracingAccelerationStructure.RemoveInstance](Rendering.RayTracingAccelerationStructure.RemoveInstance.html).


            
