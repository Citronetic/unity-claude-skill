This version of Unity is unsupported.



# [RayTracingGeometryInstanceConfig](Rendering.RayTracingGeometryInstanceConfig.html).subMeshFlags




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












                    public [Rendering.RayTracingSubMeshFlags](Rendering.RayTracingSubMeshFlags.html) subMeshFlags;






### Description



Flags that determine the ray-geometry intersection behavior relative to material type during ray tracing.





The material type can influence the value of this flag. For example if Unity considers the material opaque, you can specify the [RayTracingSubMeshFlags.Enabled](Rendering.RayTracingSubMeshFlags.Enabled.html) and [RayTracingSubMeshFlags.ClosestHitOnly](Rendering.RayTracingSubMeshFlags.ClosestHitOnly.html) flags together for maximum ray tracing performance.


            
