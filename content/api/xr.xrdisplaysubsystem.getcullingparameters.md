This version of Unity is unsupported.



# [XRDisplaySubsystem](XR.XRDisplaySubsystem.html).GetCullingParameters




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

public void GetCullingParameters([Camera](Camera.html) camera,
int cullingPassIndex,
out [Rendering.ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html) scriptableCullingParameters);






### Parameters



| Parameter | Description |
| --- | --- |
| camera | Camera for the basis of the culling view and frustum. |
| cullingPassIndex | Index of the culling pass obtained from XRRenderPass.cullingPassIndex. |
| scriptableCullingParameters | Scriptable culling parameters to populate. |





### Description



Gets culling parameters for a specific culling pass index.





You can obtain a culling pass index from [XRRenderPass.cullingPassIndex](XR.XRDisplaySubsystem.XRRenderPass-cullingPassIndex.html).


            
