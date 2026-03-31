This version of Unity is unsupported.



# RenderPipelineGraphicsSettingsEditorUtility





class in
          UnityEditor.Rendering


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



















### Description



Helper class that contains a utility function on [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) for Editor.





### Static Methods



| Method | Description |
| --- | --- |
| ForEachFieldOfType | Iterate on each fields of the IRenderPipelineGraphicsSettings of type T and perform the given callback on them. |
| Rebind | Update a IRenderPipelineGraphicsSettings. This will update the ProjectSettings > Graphics data if opened without reconstructing the window (rebinding the data). |
| RecreateRenderPipelineMatchingSettings | Force the current render pipeline to be reconstructed if the given settings is used by it. |
| RemoveRenderPipelineGraphicsSettingsWithMissingScript | Call this method to remove null settings from all RenderPipelineGlobalSettings that assigned in the GraphicsSettings. |


            
