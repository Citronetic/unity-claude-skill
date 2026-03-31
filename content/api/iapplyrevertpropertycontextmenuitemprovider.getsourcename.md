This version of Unity is unsupported.



# [IApplyRevertPropertyContextMenuItemProvider](IApplyRevertPropertyContextMenuItemProvider.html).GetSourceName




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

public string GetSourceName([Component](Component.html) comp);






### Parameters



| Parameter | Description |
| --- | --- |
| comp | The component of interest. |





### Returns



**string**
        A string containing the name.





### Description



Returns the component specific name to be used in the apply menu item.





The component specific name is shown in the apply menu item texts to describe the object specific name of the target of the operation:
                    the apply item text is defined as "Apply override to '{SourceName}' {SourceTerm}".


            
