This version of Unity is unsupported.



# [RayTracingAccelerationStructure.Settings](Rendering.RayTracingAccelerationStructure.Settings.html).layerMask




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












                    public int layerMask;






### Description



A 32-bit mask that specifies which layers a ray tracing instance must be on in order to be added to the [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





Unity interprets the mask as binary. So a mask value of -1 allows you to add objects from all layers to the structure, a value of 1 only allows objects on layer 0, and a value of 2 only allows objects on layer 1, for example.


            
