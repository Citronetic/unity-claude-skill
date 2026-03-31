This version of Unity is unsupported.



# [RayTracingInstanceCullingConfig](Rendering.RayTracingInstanceCullingConfig.html).lodParameters




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












                    public [Rendering.LODParameters](Rendering.LODParameters.html) lodParameters;






### Description



Parameters used for LOD culling.





LOD culling is enabled by using [RayTracingInstanceCullingFlags.EnableLODCulling](Rendering.RayTracingInstanceCullingFlags.EnableLODCulling.html) flag in [RayTracingInstanceCullingConfig.flags](Rendering.RayTracingInstanceCullingConfig-flags.html). If the flag is not used then all the Renderers in the [LODGroup](LODGroup.html) will be processes and eventually added to the acceleration structure.

Additional resources: [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html), [QualitySettings.lodBias](QualitySettings-lodBias.html).


            
