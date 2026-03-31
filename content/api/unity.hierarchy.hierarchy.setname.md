This version of Unity is unsupported.



# [Hierarchy](Unity.Hierarchy.Hierarchy.html).SetName




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

public bool SetName(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The hierarchy node. |
| name | The name of the node. |





### Returns



**bool**

          `true` if the name was set, `false` otherwise.





### Description



Sets the name of a hierarchy node.





This operation fails if the node has a handler that does not allow name changes.


            
