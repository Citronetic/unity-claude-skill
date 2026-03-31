This version of Unity is unsupported.



# [Hierarchy](Unity.Hierarchy.Hierarchy.html).GetNodeTypeHandlerBase




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

public T GetNodeTypeHandlerBase();






### Returns



**T**
        The hierarchy node type handler instance for that type if already created, `null` otherwise.





### Description



Gets a hierarchy node type handler instance from this hierarchy.




---








## Declaration

public [Unity.Hierarchy.HierarchyNodeTypeHandlerBase](Unity.Hierarchy.HierarchyNodeTypeHandlerBase.html) GetNodeTypeHandlerBase(ref [Unity.Hierarchy.HierarchyNode](Unity.Hierarchy.HierarchyNode.html) node);






### Returns



**HierarchyNodeTypeHandlerBase**
        If the node has a type, the hierarchy node type handler base instance, `null` otherwise.





### Description



Gets the node type handler instance for the specified node from this hierarchy.




---








## Declaration

public [Unity.Hierarchy.HierarchyNodeTypeHandlerBase](Unity.Hierarchy.HierarchyNodeTypeHandlerBase.html) GetNodeTypeHandlerBase(string nodeTypeName);






### Parameters



| Parameter | Description |
| --- | --- |
| nodeTypeName | The node type name. |





### Returns



**HierarchyNodeTypeHandlerBase**
        If the node type name matches a registered node type handler, the hierarchy node type handler base instance, `null` otherwise.





### Description



Gets the node type handler instance for the specified node type name from this hierarchy.


            
