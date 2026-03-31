This version of Unity is unsupported.



# [BaseVerticalCollectionView](UIElements.BaseVerticalCollectionView.html).selectedIndices




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












                    public IEnumerable<int> selectedIndices;






### Description



Returns the indices of selected items in the data source. Always returns an enumerable, even if no item  is selected, or a
 single item is selected.





In a tree, if a child item is collapsed, its index is not included in the selection. To get selected items regardless of whether they are collapsed or not, use selectedIds instead.


            
