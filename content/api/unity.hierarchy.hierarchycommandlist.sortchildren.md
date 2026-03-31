This version of Unity is unsupported.



# [HierarchyCommandList](Unity.Hierarchy.HierarchyCommandList.html).SortChildren




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

public bool SortChildren(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node,
bool recurse);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The hierarchy node with child nodes to sort by their index. |
| recurse | Whether to sort the child nodes recursively. |





### Returns



**bool**

          `true` if the command was appended to the list, `false` otherwise.





### Description



Sorts the child nodes of a hierarchy node by their sort index.


            
