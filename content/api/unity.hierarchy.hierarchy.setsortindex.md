This version of Unity is unsupported.



# [Hierarchy](Unity.Hierarchy.Hierarchy.html).SetSortIndex




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

public void SetSortIndex(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node,
int sortIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The hierarchy node. |
| sortIndex | The sort index. |





### Description



Sets the sort index of a hierarchy node.





After setting sort indexes, you must call SortChildren on the parent node to sort the child nodes.


            
