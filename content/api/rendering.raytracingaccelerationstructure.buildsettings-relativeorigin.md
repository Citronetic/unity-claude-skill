This version of Unity is unsupported.



# [RayTracingAccelerationStructure.BuildSettings](Rendering.RayTracingAccelerationStructure.BuildSettings.html).relativeOrigin




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












                    public [Vector3](Vector3.html) relativeOrigin;






### Description



The relative origin of ray tracing instances.





This value is subtracted from the original instance position to get the final instance position. If you do camera-relative ray tracing, you can use `relativeOrigin` to get more accurate ray-geometry intersection results.


            
