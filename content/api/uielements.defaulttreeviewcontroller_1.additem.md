This version of Unity is unsupported.



# [DefaultTreeViewController<T0>](UIElements.DefaultTreeViewController_1.html).AddItem




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

public void AddItem(TreeViewItemData<T> item,
int parentId,
int childIndex,
bool rebuildTree);






### Parameters



| Parameter | Description |
| --- | --- |
| item | Item to add. |
| parentId | The parent id for the item. |
| childIndex | The child index in the parent's children list. |
| rebuildTree | Whether to refresh the tree data immediately. If false, call BaseVerticalCollectionView.RefreshItems. |





### Description



Adds an item to the tree.


            
