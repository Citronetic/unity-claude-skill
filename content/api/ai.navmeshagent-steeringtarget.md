This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).steeringTarget




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












                    public [Vector3](Vector3.html) steeringTarget;






### Description



Get the current steering target along the path. (Read Only)





This is typically the next corner along the path or the end point of the path.

Unless the agent is moving on an OffMeshLink, there is a straight path between the agent and the steeringTarget.

When approaching an OffMeshLink for traversal - the value is the position where the agent will enter the link.
While agent is traversing an OffMeshLink the value is the position where the agent will leave the link.


            
