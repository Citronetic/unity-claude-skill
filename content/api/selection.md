This version of Unity is unsupported.



# Selection





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



Access to the selection in the editor.





### Static Properties



| Property | Description |
| --- | --- |
| activeContext | Returns the current context object, as was set via SetActiveObjectWithContext. |
| activeGameObject | Returns the active game object. (The one shown in the inspector). |
| activeInstanceID | Returns the instanceID of the actual object selection. Includes Prefabs, non-modifiable objects. |
| activeObject | Returns the actual object selection. Includes Prefabs, non-modifiable objects. |
| activeTransform | Returns the active transform. (The one shown in the inspector). |
| assetGUIDs | Returns the guids of the selected assets. |
| count | Returns the number of objects in the Selection. |
| gameObjects | Returns the actual game object selection. Includes Prefabs, non-modifiable objects. |
| instanceIDs | The actual unfiltered selection from the Scene returned as instance ids instead of objects. |
| objects | The actual unfiltered selection from the Scene. |
| selectionChanged | Delegate callback triggered when currently active/selected item has changed. |
| transforms | Returns the top level selection, excluding Prefabs. |





### Static Methods



| Method | Description |
| --- | --- |
| Contains | Returns whether an object is contained in the current selection. |
| GetFiltered | Returns the current selection filtered by type and mode. |
| GetTransforms | Allows for fine grained control of the selection type using the SelectionMode bitmask. |
| SetActiveObjectWithContext | Selects an object with a context. |


            
