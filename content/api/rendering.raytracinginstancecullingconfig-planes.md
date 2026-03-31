This version of Unity is unsupported.



# [RayTracingInstanceCullingConfig](Rendering.RayTracingInstanceCullingConfig.html).planes




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












                    public Plane[] planes;






### Description



An array of planes used for culling ray tracing instances associated with the Renderers in a Scene.





To enable plane culling, use [RayTracingInstanceCullingFlags.EnablePlaneCulling](Rendering.RayTracingInstanceCullingFlags.EnablePlaneCulling.html) flag in [RayTracingInstanceCullingConfig.flags](Rendering.RayTracingInstanceCullingConfig-flags.html).

A Renderer in the Scene is accepted to the acceleration structure if its AABB lies completely or partially on the positive side off all the Planes in the array.

Additional resources: [Plane](Plane.html), [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html).


            
