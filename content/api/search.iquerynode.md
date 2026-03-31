This version of Unity is unsupported.



# IQueryNode





interface in
          UnityEditor.Search


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



















### Description



Interface representing a query node.





### Properties



| Property | Description |
| --- | --- |
| children | The node's children. Can be null. |
| identifier | A string representing this node and its children. |
| leaf | True if this node is a leaf. A leaf doesn't have any children. |
| parent | Parent of this node. Null if this node is the root. |
| skipped | True if this node is skipped during evaluation. A node can be skipped if the QueryEngine was configured to skip unsupported nodes instead of generating errors. |
| token | The token used to build this node. |
| type | The node's type. |





### Public Methods



| Method | Description |
| --- | --- |
| QueryHashCode | Returns a hashcode for this node. Multiple nodes can have the same hashcode if they have the same identifier. |


            
