This version of Unity is unsupported.



# GameObjectUtility





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



GameObject utility functions.





### Static Methods



| Method | Description |
| --- | --- |
| AreStaticEditorFlagsSet | Returns true if the passed in StaticEditorFlags are set on the GameObject specified. |
| DuplicateGameObject | Duplicates a single GameObject and returns the new GameObject. |
| DuplicateGameObjects | Duplicates an array of GameObjects and returns the array of the new GameObject roots. |
| EnsureUniqueNameForSibling | You can use this method after parenting one GameObject to another to ensure the child GameObject has a unique name compared to its siblings in the hierarchy. |
| GetMonoBehavioursWithMissingScriptCount | Gets the number of MonoBehaviours with a missing script for the given GameObject. |
| GetStaticEditorFlags | Gets the StaticEditorFlags of the GameObject specified. |
| GetUniqueNameForSibling | You can use this method before instantiating a new sibling, or before parenting one GameObject to another, to ensure the new child GameObject has a unique name compared to its siblings in the hierarchy. |
| ModifyMaskIfGameObjectIsHiddenForPrefabModeInContext | Use this method if a custom scene culling mask is needed for renderers that should be shown or hidden in a Scene view when Prefab Mode in Context is active. |
| RemoveMonoBehavioursWithMissingScript | Removes the MonoBehaviours with a missing script from the given GameObject. |
| SetParentAndAlign | Sets the parent and gives the child the same layer and position. |
| SetStaticEditorFlags | Sets the StaticEditorFlags of the specified GameObject. |


            
