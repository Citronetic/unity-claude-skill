This version of Unity is unsupported.



# [TreeViewState<T0>](IMGUI.Controls.TreeViewState_1.html).expandedIDs




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












                    public List<TIdentifier> expandedIDs;






### Description



This is the list of currently expanded TreeViewItem IDs.





This state is maintained by the TreeView when the user interacts with the TreeView and when using the API. The TreeView assumes the list is sorted. So if setting this directly ensure to to sort the list afterwards: expandedIDs.Sort(); It is recommended to use the [TreeView<T0>.SetExpanded](IMGUI.Controls.TreeView_1.SetExpanded.html) instead which automatically handles this.


            
