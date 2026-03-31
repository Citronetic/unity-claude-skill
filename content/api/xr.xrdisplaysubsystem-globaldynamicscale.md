This version of Unity is unsupported.



# [XRDisplaySubsystem](XR.XRDisplaySubsystem.html).globalDynamicScale




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












                    public float globalDynamicScale;






### Description



The current scale factor applied to dynamically scalable eye textures when XR dynamic resolution is active.





The scale factor is determined by the device and can change from frame to frame. If hardware dynamic resolution is turned off or not supported by the device, the scale factor is 1.0.

Normally, dynamic resolution is handled automatically by the render pipeline. If you are implementing a custom pipeline or custom render pass, then your implementation must handle dynamic scaling of eye textures appropriately.


            
