This version of Unity is unsupported.



# [TreeView<T0>](IMGUI.Controls.TreeView_1.html).SelectionClick




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

protected void SelectionClick(TreeViewItem<TIdentifier> item,
bool keepMultiSelection);






### Parameters



| Parameter | Description |
| --- | --- |
| item | TreeViewItem clicked. |
| keepMultiSelection | If true then keeps the multiselection when clicking on a item already part of the selection. If false then clears the selection before selecting the item clicked. For left button clicks this is usually false. For context clicks it is usually true so a context opereration can operate on the multiselection. |





### Description



Use this method in [RowGUI](IMGUI.Controls.TreeView_1.RowGUI.html) to peform the logic of a mouse click.





This method handles multi-selection when using modifier keys together with the mouse click. It is called automatically if the event is not used by the [RowGUI](IMGUI.Controls.TreeView_1.RowGUI.html) method.


            
