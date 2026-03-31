This version of Unity is unsupported.



# [ToolAttribute](EditorTools.ToolAttribute.html).targetType




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












                    public Type targetType;






### Description



Set to the type that this [EditorTool](EditorTools.EditorTool.html) or [EditorToolContext](EditorTools.EditorToolContext.html) can edit. Set to null if the tool is not specific to a [Component](Component.html) and should be available at any time.





A Global tool or tool context is always available in the toolbar menu. A [Component](Component.html) tool is only available when the current selection contains a matching target type.


            
