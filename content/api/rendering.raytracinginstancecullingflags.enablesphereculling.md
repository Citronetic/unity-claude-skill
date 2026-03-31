This version of Unity is unsupported.



# [RayTracingInstanceCullingFlags](Rendering.RayTracingInstanceCullingFlags.html).EnableSphereCulling




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



Causes [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) to perform sphere culling.





The sphere is defined by [RayTracingInstanceCullingConfig.sphereCenter](Rendering.RayTracingInstanceCullingConfig-sphereCenter.html) and [RayTracingInstanceCullingConfig.sphereRadius](Rendering.RayTracingInstanceCullingConfig-sphereRadius.html) values.

A Renderer in the Scene is accepted to the acceleration structure if its AABB lies completely or partially inside the sphere.


            
