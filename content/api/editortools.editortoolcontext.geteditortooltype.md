This version of Unity is unsupported.



# [EditorToolContext](EditorTools.EditorToolContext.html).GetEditorToolType




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

protected Type GetEditorToolType([Tool](Tool.html) tool);






### Parameters



| Parameter | Description |
| --- | --- |
| tool | The Tool that needs to be resolved to an EditorTool type. |





### Returns



**Type**
        An [EditorTool](EditorTools.EditorTool.html) type for the requested [Tool](Tool.html).





### Description



Defines the [EditorTool](EditorTools.EditorTool.html) type for a given [Tool](Tool.html).





This function resolves the correct [EditorTool](EditorTools.EditorTool.html) type for the active context. Unity only invokes it for manipulation tools, such as [Tool.Move](Tool.Move.html), [Tool.Rotate](Tool.Rotate.html), [Tool.Scale](Tool.Scale.html), [Tool.Rect](Tool.Rect.html), and [Tool.Transform](Tool.Transform.html).


            
