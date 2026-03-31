This version of Unity is unsupported.



# [XRDisplaySubsystem](XR.XRDisplaySubsystem.html).GetMirrorViewBlitDesc




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













                        **Obsolete**
                        GetMirrorViewBlitDesc(RenderTexture, out XRMirrorViewBlitDesc) is deprecated. Use GetMirrorViewBlitDesc(RenderTexture, out XRMirrorViewBlitDesc, int) instead.




## Declaration

public bool GetMirrorViewBlitDesc([RenderTexture](RenderTexture.html) mirrorRt,
out [XR.XRDisplaySubsystem.XRMirrorViewBlitDesc](XR.XRDisplaySubsystem.XRMirrorViewBlitDesc.html) outDesc);






## Declaration

public bool GetMirrorViewBlitDesc([RenderTexture](RenderTexture.html) mirrorRt,
out [XR.XRDisplaySubsystem.XRMirrorViewBlitDesc](XR.XRDisplaySubsystem.XRMirrorViewBlitDesc.html) outDesc,
int mode);






### Parameters



| Parameter | Description |
| --- | --- |
| mirrorRt | A render texture representing mirror view's render target. |
| outDesc | Information that describes desired mirror view blit operation. |
| mode | The XRMirrorViewBlitMode XR display should perform. |





### Returns



**bool**
        Return true if information is retrieved successfully, false otherwise.





### Description



Get a mirror view blit operation descriptor from the current display subsystem.


            
