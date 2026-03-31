This version of Unity is unsupported.



# [RayTracingInstanceCullingFlags](Rendering.RayTracingInstanceCullingFlags.html).EnableSolidAngleCulling




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



Causes [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) to perform solid-angle culling.





The minimum solid angle in degrees is defined in the [RayTracingInstanceCullingConfig.minSolidAngle](Rendering.RayTracingInstanceCullingConfig-minSolidAngle.html) property, and its apex is defined by the cameraPosition value from [RayTracingInstanceCullingConfig.lodParameters](Rendering.RayTracingInstanceCullingConfig-lodParameters.html).

A Renderer in the Scene is accepted to the acceleration structure if its solid angle is larger than [RayTracingInstanceCullingConfig.minSolidAngle](Rendering.RayTracingInstanceCullingConfig-minSolidAngle.html).


            
