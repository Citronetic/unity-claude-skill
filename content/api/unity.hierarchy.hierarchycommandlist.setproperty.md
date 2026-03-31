This version of Unity is unsupported.



# [HierarchyCommandList](Unity.Hierarchy.HierarchyCommandList.html).SetProperty




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

public bool SetProperty(ref HierarchyPropertyUnmanaged<T> property,
ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node,
T value);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The property name. |
| node | The hierarchy node. |
| value | The property value. |





### Returns



**bool**

          `true` if the command was appended to the list, `false` otherwise.





### Description



Sets a value for a property of a hierarchy node.




---








## Declaration

public bool SetProperty(ref [Unity.Hierarchy.HierarchyPropertyString](Unity.Hierarchy.HierarchyPropertyString.html) property,
ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node,
string value);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The property name. |
| node | The hierarchy node. |
| value | The property value. |





### Returns



**bool**

          `true` if the command was appended to the list, `false` otherwise.





### Description



Sets a value for a property of a hierarchy node


            
