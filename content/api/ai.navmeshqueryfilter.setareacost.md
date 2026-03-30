This version of Unity is unsupported.



# [NavMeshQueryFilter](AI.NavMeshQueryFilter.html).SetAreaCost




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

public void SetAreaCost(int areaIndex,
float cost);






### Parameters



| Parameter | Description |
| --- | --- |
| areaIndex | The area index to set the cost for. |
| cost | The cost for the supplied area index. |





### Description



Sets the pathfinding cost multiplier for this filter for a given area type.





Calling SetAreaCost the first time on a NavMeshQueryFilter object causes an internal allocation of the maximum 32 cost modifiers.


            
