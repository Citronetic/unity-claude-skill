This version of Unity is unsupported.



# [BaseTreeViewController](UIElements.BaseTreeViewController.html).TryRemoveItem




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

public bool TryRemoveItem(int id,
bool rebuildTree);






### Parameters



| Parameter | Description |
| --- | --- |
| id | The item id. |
| rebuildTree | Whether to refresh the tree data. Set to false when doing multiple operations and call BaseVerticalCollectionView.RefreshItems. |





### Returns



**bool**
        Whether the item was successfully found and removed.





### Description



Removes an item by id.


            
