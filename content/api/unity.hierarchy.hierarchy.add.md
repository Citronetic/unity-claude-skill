This version of Unity is unsupported.



# [Hierarchy](Unity.Hierarchy.Hierarchy.html).Add




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

public [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) Add(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) parent);






### Parameters



| Parameter | Description |
| --- | --- |
| parent | The parent of the hierarchy node to add. |





### Returns



**HierarchyNode**
        A hierarchy node.





### Description



Adds a new node that has a specified parent node to the hierarchy.




---








## Declaration

public HierarchyNode[] Add(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) parent,
int count);






### Parameters



| Parameter | Description |
| --- | --- |
| parent | The parent of the hierarchy nodes. |
| count | The number of nodes to create. |





### Returns



**HierarchyNode[]**
        An array of hierarchy nodes.





### Description



Adds multiple new nodes that have a specified parent node to the hierarchy.




---








## Declaration

public void Add(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) parent,
Span<HierarchyNode> outNodes);






### Parameters



| Parameter | Description |
| --- | --- |
| parent | The parent of the hierarchy nodes. |
| outNodes | The span of nodes to fill with new nodes. |





### Description



Adds multiple new nodes that have a specified parent node to the hierarchy.


            
