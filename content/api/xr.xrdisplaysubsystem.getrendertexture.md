This version of Unity is unsupported.



# [XRDisplaySubsystem](XR.XRDisplaySubsystem.html).GetRenderTexture




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















## Declaration

public [RenderTexture](RenderTexture.html) GetRenderTexture(uint unityXrRenderTextureId);






### Parameters



| Parameter | Description |
| --- | --- |
| unityXrRenderTextureId | The ID number identifying the render texture. |





### Returns



**RenderTexture**
        The managed UnityEngine.RenderTexture instance associated with the UnityXRRenderTextureID.





### Description



Given the UnityXRRenderTextureID returned by IUnityXRDisplayInterface::CreateTexture, return the managed UnityEngine.RenderTexture instance.


            
