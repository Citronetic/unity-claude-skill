This version of Unity is unsupported.



# IApplyRevertPropertyContextMenuItemProvider





interface in
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



Used to identify a [MonoBehaviour](MonoBehaviour.html) that provides a hook into the apply/revert context menu for Prefabs open in Prefab Mode and non Prefabs.





Any prefab instance with overrides displays Apply/Revert context menu items when a user right clicks on a prefab override property
                in the inspector.

                This interface provides an extension hook to that prefab override builtin behaviour for prefabs in edit mode.





### Public Methods



| Method | Description |
| --- | --- |
| GetSourceName | Returns the component specific name to be used in the apply menu item. |
| GetSourceTerm | Returns the name of the source term to be used in the apply/revert menu item. |
| TryGetApplyMethodForFieldName | Extension hook for an optional property apply menu item. |
| TryGetRevertMethodForFieldName | Extension hook for an optional property revert menu item. |


            
