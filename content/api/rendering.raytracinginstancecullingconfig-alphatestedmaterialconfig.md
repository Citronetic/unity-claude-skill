This version of Unity is unsupported.



# [RayTracingInstanceCullingConfig](Rendering.RayTracingInstanceCullingConfig.html).alphaTestedMaterialConfig




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












                    public [Rendering.RayTracingInstanceMaterialConfig](Rendering.RayTracingInstanceMaterialConfig.html) alphaTestedMaterialConfig;






### Description



A configuration for defining when a Material is considered being alpha tested.





[RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) can specify a [RayTracingSubMeshFlags](Rendering.RayTracingSubMeshFlags.html) value associated with alpha tested Materials to determine the behavior of Meshes or individual sub-meshes that use these Materials when building an acceleration structure, or when performing ray tracing.

For example, Meshes that use alpha tested Materials can simply use [RayTracingSubMeshFlags.Enabled](Rendering.RayTracingSubMeshFlags.Enabled.html) flag in [RayTracingInstanceCullingConfig.subMeshFlagsConfig](Rendering.RayTracingInstanceCullingConfig-subMeshFlagsConfig.html) structure for alpha tested Materials which will allow the GPU to invoke an user-defined *any hit shader* when a ray intersects the geometry. The *any hit shader* can perform an alpha test and decide whether there was a valid ray-geometry intersection or not.

Additional resources: [RayTracingInstanceCullingConfig.subMeshFlagsConfig](Rendering.RayTracingInstanceCullingConfig-subMeshFlagsConfig.html).


            
