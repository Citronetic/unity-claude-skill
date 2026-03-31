This version of Unity is unsupported.



# [IApplyRevertPropertyContextMenuItemProvider](IApplyRevertPropertyContextMenuItemProvider.html).TryGetRevertMethodForFieldName




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

public bool TryGetRevertMethodForFieldName([SerializedProperty](SerializedProperty.html) property,
out Action<SerializedProperty> revertMethod);






### Parameters



| Parameter | Description |
| --- | --- |
| revertMethod | Assign the custom action to be called if the user selects the revert menu command. |
| property | The property that the user is interacting with. |





### Returns



**bool**
        True, if the revert menu should be shown for the property.





### Description



Extension hook for an optional property revert menu item.





Called as the context menu is being built to retrieve the method to be called (if any) when the user select the 'revert' menu item. The boolean return value defines if a revert menu item is to be shown.


            
