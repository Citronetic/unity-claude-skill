This version of Unity is unsupported.



# [Camera](Camera.html).GetStereoProjectionMatrix




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

public [Matrix4x4](Matrix4x4.html) GetStereoProjectionMatrix([Camera.StereoscopicEye](Camera.StereoscopicEye.html) eye);






### Parameters



| Parameter | Description |
| --- | --- |
| eye | Specifies the stereoscopic eye whose projection matrix needs to be returned. |





### Returns



**Matrix4x4**
        The projection matrix of the specified stereoscopic eye.





### Description



Gets the projection matrix of a specific left or right stereoscopic eye.





By default, the [XRDisplaySubsystem](XR.XRDisplaySubsystem.html) sets the projection to the matrix provided by the XR provider plug-in. You can change the projection matrix for an eye with [Camera.SetStereoProjectionMatrix](Camera.SetStereoProjectionMatrix.html) and revert both eyes back to the default projection with [Camera.ResetStereoProjectionMatrices](Camera.ResetStereoProjectionMatrices.html).

In Play mode, the projection matrix for an eye can be reported as the identity matrix for the first few frames until the [XRDisplaySubsystem](XR.XRDisplaySubsystem.html) is ready to render.

Additional resources: [XRDisplaySubsystem.XRRenderParameter.projection](XR.XRDisplaySubsystem.XRRenderParameter-projection.html).


            
