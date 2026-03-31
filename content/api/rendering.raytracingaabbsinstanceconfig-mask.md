This version of Unity is unsupported.



# [RayTracingAABBsInstanceConfig](Rendering.RayTracingAABBsInstanceConfig.html).mask




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












                    public uint mask;






### Description



The ray tracing instance mask.





During acceleration structure traversal, the GPU accepts or rejects geometry based on the instance mask and InstanceInclusionMask specified when you call the `TraceRay` HLSL function, or when you execute ray queries while calling the `TraceRayInline` HLSL function.


            
