This version of Unity is unsupported.



# [TreeView<T0>](IMGUI.Controls.TreeView_1.html).GetRenameRect




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

protected [Rect](Rect.html) GetRenameRect([Rect](Rect.html) rowRect,
int row,
TreeViewItem<TIdentifier> item);






### Parameters



| Parameter | Description |
| --- | --- |
| rowRect | Row rect for the item currently being renamed. |
| row | Row index for the item currently being renamed. |
| item | TreeViewItem that are currently being renamed. |





### Returns



**Rect**
        The rect where the rename overlay should appear.





### Description



Override this method if custom GUI handling are used in [RowGUI](IMGUI.Controls.TreeView_1.RowGUI.html). This method for controls where the rename overlay appears.





By default the rename overlay matches the placement of the item's displayName text being rendered.


            
