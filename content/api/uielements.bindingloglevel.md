This version of Unity is unsupported.



# BindingLogLevel





enumeration


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



Options to change the log level for warnings that occur during the update of data bindings.





This option can be changed using [Binding.SetGlobalLogLevel](UIElements.Binding.SetGlobalLogLevel.html) or [Binding.SetPanelLogLevel](UIElements.Binding.SetPanelLogLevel.html).
 Changing the global level won't change the log level of a panel if it already has an override.





### Properties



| Property | Description |
| --- | --- |
| None | Never log warnings. |
| Once | Log warnings only once when the result of the binding changes. |
| All | Log warnings to the console when a binding is updated. |


            
