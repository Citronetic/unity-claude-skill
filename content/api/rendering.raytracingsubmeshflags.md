This version of Unity is unsupported.



# RayTracingSubMeshFlags





enumeration


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



















### Description



Flags that determine how rays intersect the geometry for each submesh relative to Material type during ray tracing.





When [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html) is called, a Renderer can be passed as argument. The Renderer's Mesh can have one or more sub-meshes. Use these flags to determine the behavior of individual sub-meshes when building an acceleration structure or when performing ray tracing.

Additional resources: [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html), [MeshFilter.sharedMesh](MeshFilter-sharedMesh.html), [Mesh.subMeshCount](Mesh-subMeshCount.html).





### Properties



| Property | Description |
| --- | --- |
| Disabled | Unity skips the sub-mesh when building a RayTracingAccelerationStructure. As a result, rays cast using  TraceRay HLSL function will never intersect the sub-mesh. |
| Enabled | The sub-mesh is provided as input to a RayTracingAccelerationStructure build operation. |
| ClosestHitOnly | Unity considers this geometry opaque. This geometry responds to ray intersections as if it does not have an any hit shader. |
| UniqueAnyHitCalls | Enable this flag to guarantee that the GPU only invokes the any hit shader once for each ray-triangle pair. |


            
