This version of Unity is unsupported.



# [HierarchyCommandList](Unity.Hierarchy.HierarchyCommandList.html).Reserve




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

public bool Reserve(int count);






### Parameters



| Parameter | Description |
| --- | --- |
| count | The number of nodes to reserve memory for. |





### Returns



**bool**

          `true` if the command was appended to the list, `false` otherwise.





### Description



Reserves memory for nodes to use. Use this to avoid memory allocation hits when you add batches of nodes.


            
