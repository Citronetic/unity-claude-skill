This version of Unity is unsupported.



# [Hierarchy](Unity.Hierarchy.Hierarchy.html).GetChildren




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

public HierarchyNode[] GetChildren(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The hierarchy node. |





### Returns



**HierarchyNode[]**
        An array of hierarchy nodes.





### Description



Gets the child nodes of a hierarchy node.




---








## Declaration

public int GetChildren(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node,
Span<HierarchyNode> outChildren);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The hierarchy node. |
| outChildren | The span of nodes to fill with child nodes. |





### Returns



**int**
        The number of hierarchy node written in the  span.





### Description



Gets the child nodes of a hierarchy node.


            
