This version of Unity is unsupported.



# [MultiColumnHeader](IMGUI.Controls.MultiColumnHeader.html).GetVisibleColumnIndex




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

public int GetVisibleColumnIndex(int columnIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| columnIndex | Column index. |





### Returns



**int**
        Visible column index.





### Description



Convert from column index to visible column index.





Columns can be hidden so to get the visible column index from a column index use this method. The 'column index' refers to the index into the [MultiColumnHeaderState.columns](IMGUI.Controls.MultiColumnHeaderState-columns.html) array. The 'visible column index' refers to the currently visible columns shown in the MultiColumnHeader [MultiColumnHeaderState.visibleColumns](IMGUI.Controls.MultiColumnHeaderState-visibleColumns.html).


            
