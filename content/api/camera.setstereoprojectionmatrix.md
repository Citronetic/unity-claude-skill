This version of Unity is unsupported.



# [Camera](Camera.html).SetStereoProjectionMatrix




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




                [Switch to Manual](../Manual/class-Camera.html)










## Declaration

public void SetStereoProjectionMatrix([Camera.StereoscopicEye](Camera.StereoscopicEye.html) eye,
[Matrix4x4](Matrix4x4.html) matrix);






### Parameters



| Parameter | Description |
| --- | --- |
| eye | Specifies the stereoscopic eye whose projection matrix needs to be set. |
| matrix | The matrix to be set. |





### Description



Sets a custom projection matrix for a specific stereoscopic eye.





In general, you should use the projection matrices provided by the [XRDisplaySubsystem](XR.XRDisplaySubsystem.html)  for accurate stereoscopic rendering. However, when needed for specific scenarios, you can override the projection matrices to achieve specific effects. For example, you would need to set custom projection and view matrices to implement binoculars in VR.

Call [Camera.ResetStereoProjectionMatrices](Camera.ResetStereoProjectionMatrices.html) to revert the camera back to using the projection matrices provided by the [XRDisplaySubsystem](XR.XRDisplaySubsystem.html) .


            
