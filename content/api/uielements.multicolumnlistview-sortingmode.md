This version of Unity is unsupported.



# [MultiColumnListView](UIElements.MultiColumnListView.html).sortingMode




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












                    public [UIElements.ColumnSortingMode](UIElements.ColumnSortingMode.html) sortingMode;






### Description



Indicates how to sort columns. To enable sorting, set it to [ColumnSortingMode.Default](UIElements.ColumnSortingMode.Default.html) or [ColumnSortingMode.Custom](UIElements.ColumnSortingMode.Custom.html).
 The `Default` mode uses the sorting algorithm provided by [MultiColumnController](UIElements.MultiColumnController.html), acting on indices. You can also implement your
 own sorting with the `Custom` mode, by responding to the columnSortingChanged event.





**Note**: If there is at least one sorted column, reordering is temporarily disabled.


            
