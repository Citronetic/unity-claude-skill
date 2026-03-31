This version of Unity is unsupported.


                  **Method group is Obsolete**





# [TreeView](IMGUI.Controls.TreeView.html).GetRows




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













                        **Obsolete**
                        TreeView is now deprecated. You can likely now use TreeView<int> instead and not think more about it. But if you were using that identifier to store InstanceID data, you should instead opt to upgrade your TreeViews to use TreeView<InstanceID> to get the proper typing.




## Declaration

public IList<TreeViewItem> GetRows();






### Returns



**IList<TreeViewItem>**
        Rows.





### Description



This is the list of TreeViewItems that have been built in [BuildRows](UIElements.TreeView.BuildRows.html).


            
