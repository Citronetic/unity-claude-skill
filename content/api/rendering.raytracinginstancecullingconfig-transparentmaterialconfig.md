This version of Unity is unsupported.



# [RayTracingInstanceCullingConfig](Rendering.RayTracingInstanceCullingConfig.html).transparentMaterialConfig




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












                    public [Rendering.RayTracingInstanceMaterialConfig](Rendering.RayTracingInstanceMaterialConfig.html) transparentMaterialConfig;






### Description



A configuration for defining when a Material is considered being transparent.





[RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) can specify a [RayTracingSubMeshFlags](Rendering.RayTracingSubMeshFlags.html) value associated with transparent Materials to determine the behavior of Meshes or individual sub-meshes that use these Materials when building an acceleration structure, or when performing ray tracing.

For example, Meshes that use transparent Materials can be ignored when building the acceleration structure by using [RayTracingSubMeshFlags.Disabled](Rendering.RayTracingSubMeshFlags.Disabled.html) in [RayTracingInstanceCullingConfig.subMeshFlagsConfig](Rendering.RayTracingInstanceCullingConfig-subMeshFlagsConfig.html) structure.

Additional resources: [RayTracingInstanceCullingConfig.subMeshFlagsConfig](Rendering.RayTracingInstanceCullingConfig-subMeshFlagsConfig.html).


            
