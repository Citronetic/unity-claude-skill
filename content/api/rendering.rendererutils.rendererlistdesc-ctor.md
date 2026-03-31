This version of Unity is unsupported.



# RendererListDesc Constructor




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

public RendererListDesc([Rendering.ShaderTagId](Rendering.ShaderTagId.html) passName,
[Rendering.CullingResults](Rendering.CullingResults.html) cullingResult,
[Camera](Camera.html) camera);






## Declaration

public RendererListDesc(ShaderTagId[] passNames,
[Rendering.CullingResults](Rendering.CullingResults.html) cullingResult,
[Camera](Camera.html) camera);






### Parameters



| Parameter | Description |
| --- | --- |
| passName | The pass name to use for the RendererList. |
| cullingResult | The culling result used to create the RendererList. |
| camera | The camera Unity uses to determine the current view and sorting properties. |
| passNames | The list of passes to use for the RendererList. |





### Description



Initializes and returns an instance of RendererListDesc.


            
