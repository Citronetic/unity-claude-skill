This version of Unity is unsupported.



# [MultiColumnHeader](IMGUI.Controls.MultiColumnHeader.html).SetSorting




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

public void SetSorting(int columnIndex,
bool sortAscending);






### Parameters



| Parameter | Description |
| --- | --- |
| columnIndex | Column to sort. |
| sortAscending | Sorting order for the column specified. |





### Description



Sets the primary sorting column and its sorting order.





This function sets the primary sorting column and its sorting order. It also triggers the [sortingChanged](IMGUI.Controls.MultiColumnHeader-sortingChanged.html) event if the sorting state changes. You can set the columnIndex to -1 to clear the sort.

Additional resources: [SetSortingColumns](IMGUI.Controls.MultiColumnHeader.SetSortingColumns.html), [sortedColumnIndex](IMGUI.Controls.MultiColumnHeader-sortedColumnIndex.html) and [IsSortedAscending](IMGUI.Controls.MultiColumnHeader.IsSortedAscending.html).g.


            
