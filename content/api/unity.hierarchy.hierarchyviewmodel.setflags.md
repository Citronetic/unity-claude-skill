This version of Unity is unsupported.



# [HierarchyViewModel](Unity.Hierarchy.HierarchyViewModel.html).SetFlags




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

public void SetFlags([Unity.Hierarchy.HierarchyNodeFlags](Unity.Hierarchy.HierarchyNodeFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| flags | The hierarchy node flags. |





### Description



Sets the specified flags on all hierarchy nodes.




---








## Declaration

public void SetFlags(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node,
[Unity.Hierarchy.HierarchyNodeFlags](Unity.Hierarchy.HierarchyNodeFlags.html) flags,
bool recurse);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The hierarchy node. |
| flags | The hierarchy node flags. |
| recurse | Whether or not to set the flags on all children recursively for that hierarchy node. |





### Description



Sets the specified flags on the hierarchy node.




---








## Declaration

public int SetFlags(ReadOnlySpan<HierarchyNode> nodes,
[Unity.Hierarchy.HierarchyNodeFlags](Unity.Hierarchy.HierarchyNodeFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| nodes | The hierarchy nodes. |
| flags | The hierarchy node flags. |





### Returns



**int**
        The number of nodes that had their flags set.





### Description



Sets the specified flags on the hierarchy nodes.





Null or invalid nodes are ignored.




---








## Declaration

public int SetFlags(ReadOnlySpan<int> indices,
[Unity.Hierarchy.HierarchyNodeFlags](Unity.Hierarchy.HierarchyNodeFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| indices | The hierarchy node indices. |
| flags | The hierarchy node flags. |





### Returns



**int**
        The number of nodes that had their flags set.





### Description



Sets the specified flags on the hierarchy node indices.





Invalid node indices are ignored.


            
