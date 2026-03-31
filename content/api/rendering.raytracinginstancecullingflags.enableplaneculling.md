This version of Unity is unsupported.



# [RayTracingInstanceCullingFlags](Rendering.RayTracingInstanceCullingFlags.html).EnablePlaneCulling




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



Causes [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) to perform plane culling.





The [Plane](Plane.html) list is defined by [RayTracingInstanceCullingConfig.planes](Rendering.RayTracingInstanceCullingConfig-planes.html).

A Renderer in the Scene is accepted to the acceleration structure if its AABB lies completely or partially on the positive side off all the Planes in the list.


            
