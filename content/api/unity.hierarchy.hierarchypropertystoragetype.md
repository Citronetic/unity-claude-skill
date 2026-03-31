This version of Unity is unsupported.



# HierarchyPropertyStorageType





enumeration


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



Describes how property values of a specific property are stored in memory.





### Properties



| Property | Description |
| --- | --- |
| Sparse | The property is stored in a sparse array. In a sparse array, memory is allocated for each node regardless if the node has a value for the property or not. |
| Dense | The property is stored in a compact array of values. In a dense array, memory is allocated for a node only if the node has a value for the property. |
| Blob | The property is stored as a binary blob. |
| Default | The property is stored in the default storage type. Dense is the default storage type. |


            
