This version of Unity is unsupported.



# [BaseListView](UIElements.BaseListView.html).overridingAddButtonBehavior




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












                    public Action<BaseListView,Button> overridingAddButtonBehavior;






### Description



This callback allows the user to implement a [DropdownMenu](UIElements.DropdownMenu.html) when the Add Button is clicked.





This callback will only be called if showAddRemoveFooter is set to `true`.
 Setting this callback to anything other than `null` will override the basic add behavior.
 This callback will override the onAdd callback.


            
