This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).GetAreaCost




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

public float GetAreaCost(int areaIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| areaIndex | Area Index. |





### Returns



**float**
        Current cost for specified area index.





### Description



Gets the cost for path calculation when crossing area of a particular type.





The cost of a path is the amount of "difficulty" involved in calculating it - the shortest path may not be the best if it passes over difficult ground, such as mud, snow, etc. Different types of areas are denoted by navmesh areas in Unity. The cost of a particular area is given in cost units per distance unit. Note that the cost of a path applies to the pathfinding only and does not automatically affect the movement speed of the agent when following the path. Indeed, the path's cost may denote other factors such as danger (safe but long path through a minefield) or visibility (long path that keeps a character in the shadows).


            
