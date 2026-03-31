This version of Unity is unsupported.



# [RayTracingInstanceCullingConfig](Rendering.RayTracingInstanceCullingConfig.html).instanceTests




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












                    public RayTracingInstanceCullingTest[] instanceTests;






### Description



An array of [RayTracingInstanceCullingTest](Rendering.RayTracingInstanceCullingTest.html) objects used add Renderers to the acceleration structure based on their layer, [ShadowCastingMode](Rendering.ShadowCastingMode.html) and Material type.





Typically, each ray tracing effect can use a dedicated [RayTracingInstanceCullingTest](Rendering.RayTracingInstanceCullingTest.html) configuration. If the array is empty then [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) doesn't have any effect.

For each test that passes, its instanceMask value will be ORed into a final 8-bit ray tracing instance mask. When casting rays on the GPU using *TraceRay* HLSL function, the *instanceInclusionMask* argument of *TraceRay* is ANDed with the final 8-bit instance mask to include or reject ray tracing instances during acceleration structure traversal. This way, an acceleration structure can be used by multiple ray tracing effects, each effect potentially affecting different Materials types or layers.

Additional resources: [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).


            
