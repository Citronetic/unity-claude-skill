This version of Unity is unsupported.



# [TreeView.RowGUIArgs](IMGUI.Controls.TreeView.RowGUIArgs.html).GetCellRect




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

public [Rect](Rect.html) GetCellRect(int visibleColumnIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| visibleColumnIndex | Index into the list of visible columns of the multi column header. |





### Returns



**Rect**
        Cell rect defined by the intersection between the row rect and the rect of the visible column.





### Description



If using a MultiColumnHeader for the TreeView this method can be used to get the cell rects of a row using the visible columns of the MultiColumnHeader.





Note the returned cell rect is affected by the [TreeView.cellMargin](IMGUI.Controls.TreeView-cellMargin.html) value.

Additional resources: [MultiColumnHeader](IMGUI.Controls.MultiColumnHeader.html), [TreeView.RowGUI](IMGUI.Controls.TreeView.RowGUI.html), [TreeView.RowGUIArgs.GetNumVisibleColumns](IMGUI.Controls.TreeView.RowGUIArgs.GetNumVisibleColumns.html), [TreeView.RowGUIArgs.GetColumn](IMGUI.Controls.TreeView.RowGUIArgs.GetColumn.html).


            
