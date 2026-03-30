This version of Unity is unsupported.



# [TreeView.RowGUIArgs](IMGUI.Controls.TreeView.RowGUIArgs.html).GetColumn




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

public int GetColumn(int visibleColumnIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| visibleColumnIndex | This index is the index into the current visible columns. |





### Returns



**int**
        Column index into the columns array in [MultiColumnHeaderState](IMGUI.Controls.MultiColumnHeaderState.html).





### Description



If using a MultiColumnHeader for the TreeView this method can be used to convert an index from the visible columns list to a index into the actual columns in the [MultiColumnHeaderState](IMGUI.Controls.MultiColumnHeaderState.html).





Note that columns can be hidden by using the context menu of the MultiColumnHeader.

Additional resources: [TreeView.RowGUIArgs.GetCellRect](IMGUI.Controls.TreeView.RowGUIArgs.GetCellRect.html).


            
