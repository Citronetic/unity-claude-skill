This version of Unity is unsupported.



# [Hierarchy](Unity.Hierarchy.Hierarchy.html).SetParent




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

public bool SetParent(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node,
ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) parent);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The hierarchy node. |
| parent | The hierarchy node to set as a parent. |





### Returns



**bool**

          `true` if the parent was set, `false` otherwise.





### Description



Sets the parent of a hierarchy node.





This operation fails if either the node or its potential parent have a handler that prohibits this parent-child relationship.


            
