This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).IsLinkOccupied




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

public static bool IsLinkOccupied([AI.NavMeshLinkInstance](AI.NavMeshLinkInstance.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The link instance whose state to query. |





### Returns



**bool**
        True if an agent is currently traversing the link, otherwise false.





### Description



Determines whether or not a NavMesh agent is currently using this link.





Use this method to determine if your NavMesh agent can move onto the specified NavMesh link instance. Only one NavMesh agent can traverse a NavMesh link instance at any one time, so your agent can't move onto a NavMesh link instance that is already occupied. A NavMesh link instance is occupied when any NavMesh agent moves onto the link as part of the path the agent has calculated to the [destination](AI.NavMeshAgent-destination.html). When the agent moves off of the link, either automatically or through a call to [NavMeshAgent.CompleteOffMeshLink](AI.NavMeshAgent.CompleteOffMeshLink.html), the link instance is no longer occupied.

This method is available as of 2023.2.

Additional resources: [NavMeshAgent.isOnOffMeshLink](AI.NavMeshAgent-isOnOffMeshLink.html).


            
