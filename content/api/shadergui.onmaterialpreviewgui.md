This version of Unity is unsupported.



# [ShaderGUI](ShaderGUI.html).OnMaterialPreviewGUI




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

public void OnMaterialPreviewGUI([MaterialEditor](MaterialEditor.html) materialEditor,
[Rect](Rect.html) r,
[GUIStyle](GUIStyle.html) background);






### Parameters



| Parameter | Description |
| --- | --- |
| materialEditor | The MaterialEditor that are calling this method (the 'owner'). |
| r | Preview rect. |
| background | Style for the background. |





### Description



Override for extending the rendering of the Preview area or completly replace the preview (by not calling base.OnMaterialPreviewGUI).


            
