This version of Unity is unsupported.



# ToolManager





class in
          UnityEditor.EditorTools


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



This class manipulates editor tools in the Scene view.





### Static Properties



| Property | Description |
| --- | --- |
| activeContextType | Gets the type of EditorToolContext that is currently active. The default value is GameObjectToolContext. |
| activeToolType | Gets the type of the EditorTool that is currently active. |





### Static Methods



| Method | Description |
| --- | --- |
| IsActiveContext | Test if an EditorToolContext is currently the active tool context. |
| IsActiveTool | Test if an EditorTool is currently the active tool. |
| RefreshAvailableTools | Call RefreshAvailableTools to rebuild the contents of the Scene View Tools Overlay. |
| RestorePreviousPersistentTool | Sets the last-used global EditorTool as the active tool. |
| RestorePreviousTool | Sets the last-used EditorTool as the active tool. |
| SetActiveContext | Sets the active EditorToolContext. |
| SetActiveTool | Sets the active EditorTool. |





### Events



| Event | Description |
| --- | --- |
| activeContextChanged | Defines an event handler for when the active EditorToolContext changes. |
| activeContextChanging | Defines an event handler for when the active EditorToolContext will change. |
| activeToolChanged | Defines an event handler for when the active tool changes. |
| activeToolChanging | Defines an event handler for when the active tool changes. |


            
