This version of Unity is unsupported.



# RayTracingInstanceCullingFlags





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



Flags used by [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html).





### Properties



| Property | Description |
| --- | --- |
| None | No flags are specified in RayTracingAccelerationStructure.CullInstances. |
| EnableSphereCulling | Causes RayTracingAccelerationStructure.CullInstances to perform sphere culling. |
| EnablePlaneCulling | Causes RayTracingAccelerationStructure.CullInstances to perform plane culling. |
| EnableLODCulling | Causes RayTracingAccelerationStructure.CullInstances to perform LOD culling. |
| ComputeMaterialsCRC | Causes RayTracingAccelerationStructure.CullInstances to compute the CRC hash values of all unique Materials used by ray tracing instances that were added to the acceleration structure. |
| IgnoreReflectionProbes | Causes RayTracingAccelerationStructure.CullInstances to ignore Renderers that have a ReflectionProbe as a sibling Component. |
| EnableSolidAngleCulling | Causes RayTracingAccelerationStructure.CullInstances to perform solid-angle culling. |
| EnableMeshLOD | Causes RayTracingAccelerationStructure.CullInstances to perform Mesh LOD selection. |


            
