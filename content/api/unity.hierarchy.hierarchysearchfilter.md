This version of Unity is unsupported.



# HierarchySearchFilter





struct in
          Unity.Hierarchy



/



Implemented in:[UnityEngine.HierarchyCoreModule](UnityEngine.HierarchyCoreModule.html)


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



Encapsulates all data needed to filter a hierarchy.





### Static Properties



| Property | Description |
| --- | --- |
| Invalid | The default invalid HierarchySearchFilter. This assumes the Hierarchy has a query, but is invalid, so no nodes are shown. |





### Properties



| Property | Description |
| --- | --- |
| IsValid | Whether the filter is valid and has a name. |
| Name | The name of the filter. |
| NumValue | Filter numerical value. |
| Op | The filter search operator. |
| Value | The textual value of the filter. |





### Static Methods



| Method | Description |
| --- | --- |
| ToOp | Converts a textual value to its operator value if possible. |
| ToString | Converts an operator to its textual value. |


            
