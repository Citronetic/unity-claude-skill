This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [RayTracingMode](Experimental.Rendering.RayTracingMode.html).DynamicGeometry




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



Use this mode when the associated geometry or transformation can change.





If you add a ray tracing instance that uses this mode to a [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html), Unity updates the associated geometry acceleration structure (BLAS) every time [RayTracingAccelerationStructure.Build](Rendering.RayTracingAccelerationStructure.Build.html) or [CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html) is invoked.

Additional resources: [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html).


            
