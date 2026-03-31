This version of Unity is unsupported.



# [BaseTreeViewController](UIElements.BaseTreeViewController.html).ExpandItemByIndex




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

public void ExpandItemByIndex(int index,
bool expandAllChildren,
bool refresh);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The item index. |
| expandAllChildren | Whether the whole hierarchy under that item will be expanded. |
| refresh | Whether to refresh items or not. Set to false when doing multiple operations on the tree, to only do one RefreshItems once all operations are done. |





### Description



Expands the item with the specified index, making his children visible. Allows to expand the whole hierarchy under that item.


            
