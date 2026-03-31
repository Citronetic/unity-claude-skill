This version of Unity is unsupported.


                  **Method group is Obsolete**





# [TreeView](IMGUI.Controls.TreeView.html).SelectionClick




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

protected void SelectionClick(TreeViewItem item,
bool keepMultiSelection);






### Parameters



| Parameter | Description |
| --- | --- |
| item | TreeViewItem clicked. |
| keepMultiSelection | If true then keeps the multiselection when clicking on a item already part of the selection. If false then clears the selection before selecting the item clicked. For left button clicks this is usually false. For context clicks it is usually true so a context opereration can operate on the multiselection. |





### Description



Use this method in [RowGUI](UIElements.TreeView.RowGUI.html) to peform the logic of a mouse click.





This method handles multi-selection when using modifier keys together with the mouse click. It is called automatically if the event is not used by the [RowGUI](UIElements.TreeView.RowGUI.html) method.


            
