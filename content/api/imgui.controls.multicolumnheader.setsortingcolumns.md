This version of Unity is unsupported.



# [MultiColumnHeader](IMGUI.Controls.MultiColumnHeader.html).SetSortingColumns




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

public void SetSortingColumns(int[] columnIndices,
bool[] sortAscending);






### Parameters



| Parameter | Description |
| --- | --- |
| columnIndices | Column indices of the sorted columns. |
| sortAscending | Sorting order for the column indices specified. |





### Description



Sets multiple sorting columns and the associated sorting orders.





This function sets multiple sorting columns and the associated sorting orders. The first entry is the primary sorted column. It also triggers the [sortingChanged](IMGUI.Controls.MultiColumnHeader-sortingChanged.html) event if the sorting state changes. You can input two empty arrays to clear the sorting columns so no sorting would happen.

Additional resources: [SetSorting](IMGUI.Controls.MultiColumnHeader.SetSorting.html).


            
