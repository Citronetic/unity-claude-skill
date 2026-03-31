This version of Unity is unsupported.



# [RayTracingGeometryInstanceConfig](Rendering.RayTracingGeometryInstanceConfig.html).indexCount




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












                    public int indexCount;






### Description



The amount of indices from [indexBuffer](Rendering.RayTracingGeometryInstanceConfig-indexBuffer.html) that defines this ray tracing geometry instance.





Use -1 to instruct Unity to use all the indices from [indexBuffer](Rendering.RayTracingGeometryInstanceConfig-indexBuffer.html) when building the acceleration structure associated with the ray tracing instance. If the value is positive, it must be a multiple of 3 and together with [indexStart](Rendering.RayTracingGeometryInstanceConfig-indexStart.html) it must define a valid range into [indexBuffer](Rendering.RayTracingGeometryInstanceConfig-indexBuffer.html).


            
