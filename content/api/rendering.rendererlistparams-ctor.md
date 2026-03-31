This version of Unity is unsupported.



# RendererListParams Constructor




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

public RendererListParams([Rendering.CullingResults](Rendering.CullingResults.html) cullingResults,
[Rendering.DrawingSettings](Rendering.DrawingSettings.html) drawSettings,
[Rendering.FilteringSettings](Rendering.FilteringSettings.html) filteringSettings);






### Parameters



| Parameter | Description |
| --- | --- |
| cullingResults | The set of visible objects to draw. You typically obtain this from ScriptableRenderContext.Cull. |
| drawSettings | A struct that describes how to draw the objects. |
| filteringSettings | A struct that describes how to filter the set of visible objects, so that Unity only draws a subset. |





### Description



Create a RendererListParams struct.


            
