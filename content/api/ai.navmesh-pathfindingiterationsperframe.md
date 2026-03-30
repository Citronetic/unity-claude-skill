This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).pathfindingIterationsPerFrame




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












                    public static int pathfindingIterationsPerFrame;






### Description



The maximum number of nodes processed for each frame during the asynchronous pathfinding process.





During the pathfinding process, the pathfinder expands only a certain number of nodes (NavMesh polygons) for each frame. This allows for smoother gameplay when processing long paths or when processing a large number of requests concurrently. However, the path request might take many frames to process.

The iteration count only affects asynchronous pathfinding. This method of pathfinding is used when the NavMesh Agent destination is set with [NavMeshAgent.SetDestination](AI.NavMeshAgent.SetDestination.html) or [NavMeshAgent.destination](AI.NavMeshAgent-destination.html).

Increasing this value causes faster path processing but it might also cause frame rate issues. The default value is 100. An ideal value is between 50 and 500.


            
