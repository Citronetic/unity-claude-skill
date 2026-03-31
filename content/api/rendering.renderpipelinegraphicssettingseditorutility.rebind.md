This version of Unity is unsupported.



# [RenderPipelineGraphicsSettingsEditorUtility](Rendering.RenderPipelineGraphicsSettingsEditorUtility.html).Rebind




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

public static void Rebind([Rendering.IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) settings,
Type renderPipelineType);






### Parameters



| Parameter | Description |
| --- | --- |
| settings | A IRenderPipelineGraphicsSettings that should be the new value to bind. |
| settings | A Type that is used to specify which RenderPipeline we are updating. |





### Description



Update a IRenderPipelineGraphicsSettings. This will update the ProjectSettings > Graphics data if opened without reconstructing the window (rebinding the data).


            
