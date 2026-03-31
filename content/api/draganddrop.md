This version of Unity is unsupported.



# DragAndDrop





class in
          UnityEditor


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



Editor drag & drop operations.





### Static Properties



| Property | Description |
| --- | --- |
| activeControlID | Get or set ID of currently active drag and drop control. |
| objectReferences | References to objects being dragged. |
| paths | The file names being dragged. |
| visualMode | The visual indication of the drag. |





### Static Methods



| Method | Description |
| --- | --- |
| AcceptDrag | Accept a drag operation. |
| AddDropHandler | Allow override of the default behavior for the corresponding window. Multiple handlers can be registered on the same window. If a handler returns DragAndDropVisualMode.None the system will check the next handler. Any other results (DragAndDropVisualMode.Rejected or others DragAndDropVisualMode) means this handler has processed the drop event and no other handler will be called. The last handler is the default Unity handler. |
| GetGenericData | Get data associated with current drag and drop operation. |
| HasHandler | Check if the handler is already registered for the destination window ID. |
| PrepareStartDrag | Clears drag & drop data. |
| RemoveDropHandler | Unregister a specific Drop Handler from a Window Drop Target. |
| SetGenericData | Set data associated with current drag and drop operation. |
| StartDrag | Start a drag operation. |





### Delegates



| Delegate | Description |
| --- | --- |
| HierarchyDropHandler | Handler for the Hierarchy. |
| InspectorDropHandler | Handler for the Inspector. |
| ProjectBrowserDropHandler | Handler for the Project. |
| SceneDropHandler | Handler for the Scene. |


            
