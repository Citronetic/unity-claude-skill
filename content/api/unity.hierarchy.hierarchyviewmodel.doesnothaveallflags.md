This version of Unity is unsupported.



# [HierarchyViewModel](Unity.Hierarchy.HierarchyViewModel.html).DoesNotHaveAllFlags




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

public bool DoesNotHaveAllFlags([Unity.Hierarchy.HierarchyNodeFlags](Unity.Hierarchy.HierarchyNodeFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| flags | The hierarchy node flags. |





### Returns



**bool**

          `true` if none of the node have all of the flags set, `false` otherwise.





### Description



Gets whether or not all of the specified flags are not set on any hierarchy node.




---








## Declaration

public bool DoesNotHaveAllFlags(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node,
[Unity.Hierarchy.HierarchyNodeFlags](Unity.Hierarchy.HierarchyNodeFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The hierarchy node. |
| flags | The hierarchy node flags. |





### Returns



**bool**

          `true` if all of the flags are not set, `false` otherwise.





### Description



Gets whether or not all of the specified flags are not set on the hierarchy node.


            
