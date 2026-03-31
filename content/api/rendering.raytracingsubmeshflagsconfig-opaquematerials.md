This version of Unity is unsupported.



# [RayTracingSubMeshFlagsConfig](Rendering.RayTracingSubMeshFlagsConfig.html).opaqueMaterials




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












                    public [Rendering.RayTracingSubMeshFlags](Rendering.RayTracingSubMeshFlags.html) opaqueMaterials;






### Description



The corresponding [RayTracingSubMeshFlags](Rendering.RayTracingSubMeshFlags.html) value for opaque Materials.





To maximize ray tracing performance on the GPU, [RayTracingSubMeshFlags.Enabled](Rendering.RayTracingSubMeshFlags.Enabled.html) combined with [RayTracingSubMeshFlags.ClosestHitOnly](Rendering.RayTracingSubMeshFlags.ClosestHitOnly.html) is recommended. This flags combination will ensure that  *any hit shaders* are not invoked during acceleration structure traversal when rays hit opaque geometries.

Additional resources: [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html).


            
