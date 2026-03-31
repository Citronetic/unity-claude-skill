This version of Unity is unsupported.



# [IApplyRevertPropertyContextMenuItemProvider](IApplyRevertPropertyContextMenuItemProvider.html).TryGetApplyMethodForFieldName




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

public bool TryGetApplyMethodForFieldName([SerializedProperty](SerializedProperty.html) property,
out Action<SerializedProperty> applyMethod);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The property that the user is interacting with. |
| applyMethod | Assign the custom action to be called if the user selects the apply menu command. |





### Returns



**bool**
        True, if the apply menu should be shown for the property.





### Description



Extension hook for an optional property apply menu item.





Called as the context menu is being built to retrieve the method to be called (if any) when the user selects the 'apply' menu item. The boolean return value defines if an apply menu item is to be shown.


            
