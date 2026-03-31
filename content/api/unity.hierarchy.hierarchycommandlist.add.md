This version of Unity is unsupported.



# [HierarchyCommandList](Unity.Hierarchy.HierarchyCommandList.html).Add




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

public bool Add(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) parent,
out [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node);






### Parameters



| Parameter | Description |
| --- | --- |
| parent | The parent of the new node. |
| node | The new node if the command succeeds. |





### Returns



**bool**

          `true` if the command was appended to the list, `false` otherwise.





### Description



Adds a new node that has a specified parent node to the hierarchy.




---








## Declaration

public bool Add(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) parent,
int count,
out HierarchyNode[] nodes);






### Parameters



| Parameter | Description |
| --- | --- |
| parent | The parent of the new nodes. |
| count | The number of nodes to create. |
| nodes | The new nodes if the command succeeds. |





### Returns



**bool**

          `true` if the command was appended to the list, `false` otherwise.





### Description



Adds multiple new nodes that have a specified parent node to the hierarchy.




---








## Declaration

public bool Add(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) parent,
Span<HierarchyNode> outNodes);






### Parameters



| Parameter | Description |
| --- | --- |
| parent | The parent of the new nodes. |
| outNodes | The span of nodes filled with new nodes if the command succeeds. |





### Returns



**bool**

          `true` if the command was appended to the list, `false` otherwise.





### Description



Adds multiple new nodes that have a specified parent node to the hierarchy.


            
