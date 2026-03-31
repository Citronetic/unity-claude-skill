This version of Unity is unsupported.



# [Hierarchy](Unity.Hierarchy.Hierarchy.html).GetDepth




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

public int GetDepth(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The hierarchy node. |





### Returns



**int**
        The depth of the hierarchy node. A value of -1 indicates the root node. A value of 0 indicates direct child nodes of the root node. A value of 1 indicates child nodes of the root node's direct children, and then their children have a value of 2 and so on.





### Description



Determines the depth of a node.


            
