This version of Unity is unsupported.



# [HierarchyCommandList](Unity.Hierarchy.HierarchyCommandList.html).ExecuteIncrementalTimed




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

public bool ExecuteIncrementalTimed(double milliseconds);






### Parameters



| Parameter | Description |
| --- | --- |
| milliseconds | The time limit in milliseconds. |





### Returns



**bool**

          `true` if additional invocations are needed to complete the execution, `false` otherwise.





### Description



Executes commands from the hierarchy command list until a time limit is reached.


            
