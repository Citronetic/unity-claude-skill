This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).updatePosition




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












                    public bool updatePosition;






### Description



Gets or sets whether the transform position is synchronized with the simulated agent position. The default value is true.





When true: changing the transform position will affect the simulated position and vice-versa.

When false: the simulated position will not be applied to the transform position and vice-versa.

Setting [updatePosition](AI.NavMeshAgent-updatePosition.html) to false can be used to enable explicit control of the transform position via script.
This allows you to use the agent's simulated position to drive another component, which in turn sets the transform position (eg. animation with root motion or physics).

When enabling the [updatePosition](AI.NavMeshAgent-updatePosition.html) (from previously being disabled), the transform will be moved to the simulated position. This way the agent stays constrained to the navmesh surface.


            
