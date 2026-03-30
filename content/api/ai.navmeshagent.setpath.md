This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).SetPath




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

public bool SetPath([AI.NavMeshPath](AI.NavMeshPath.html) path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | New path to follow. |





### Returns



**bool**
        True if the path is succesfully assigned.





### Description



Assign a new path to this agent.





If the path is succesfully assigned the agent will resume movement toward the new target.
If the path cannot be assigned the path will be cleared (see [ResetPath](AI.NavMeshAgent.ResetPath.html)).


            
