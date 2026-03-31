This version of Unity is unsupported.



# [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).UpdateInstancePropertyBlock




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

public void UpdateInstancePropertyBlock(int handle,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The handle associated with a AABB or Mesh ray tracing instance. |
| properties | The additional material properties to apply onto the Material used by the ray tracing instance. |





### Description



Updates per ray tracing instance Material properties.





A ray tracing instance associated with an axis-aligned bounding box (AABBs) [GraphicsBuffer](GraphicsBuffer.html) or a [Mesh](Mesh.html) can use a [Material](Material.html) shared with other similar ray tracing instances.

Additional per ray tracing instance Material properties can be specified using the [MaterialPropertyBlock](MaterialPropertyBlock.html) argument. The properties are copied into the ray tracing instance when this function is called.

Additional resources: [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [RayTracingAccelerationStructure.RemoveInstance](Rendering.RayTracingAccelerationStructure.RemoveInstance.html).


            
