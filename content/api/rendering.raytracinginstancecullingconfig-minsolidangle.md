This version of Unity is unsupported.



# [RayTracingInstanceCullingConfig](Rendering.RayTracingInstanceCullingConfig.html).minSolidAngle




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












                    public float minSolidAngle;






### Description



The minimum solid angle in degrees that Unity uses for culling ray tracing instances associated with the Renderers in a Scene.





If the projected solid angle of a Renderer relative to cameraPosition value from [RayTracingInstanceCullingConfig.lodParameters](Rendering.RayTracingInstanceCullingConfig-lodParameters.html) is smaller than minSolidAngle then the Renderer is not added to the acceleration structure.

To enable solid angle culling, use the [RayTracingInstanceCullingFlags.EnableSolidAngleCulling](Rendering.RayTracingInstanceCullingFlags.EnableSolidAngleCulling.html) flag in [RayTracingInstanceCullingConfig.flags](Rendering.RayTracingInstanceCullingConfig-flags.html).

Additional resources: [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html).


            
