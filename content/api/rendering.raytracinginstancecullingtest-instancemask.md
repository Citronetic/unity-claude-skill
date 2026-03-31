This version of Unity is unsupported.



# [RayTracingInstanceCullingTest](Rendering.RayTracingInstanceCullingTest.html).instanceMask




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












                    public uint instanceMask;






### Description



An instance mask which affects ray-instance masking during ray tracing on the GPU.





Typically, each ray tracing effect can use a dedicated [RayTracingInstanceCullingTest](Rendering.RayTracingInstanceCullingTest.html) configuration and different instanceMask value.

If the test passes, the instanceMask value will be ORed into a final 8-bit ray tracing instance mask. When casting rays on the GPU using *TraceRay* HLSL function, the *instanceInclusionMask* argument of *TraceRay* is ANDed with the final 8-bit instance mask to include or reject ray tracing instances during acceleration structure traversal.


            
