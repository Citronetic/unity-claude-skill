This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).GetAreaCost




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

public static float GetAreaCost(int areaIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| areaIndex | Index of the area to get. |





### Description



Gets the cost for path finding over geometry of the area type.





The value applies to all agents unless you the value has been customized per agent by calling [NavMeshAgent.SetAreaCost](AI.NavMeshAgent.SetAreaCost.html).

Use [GetAreaFromName](AI.NavMesh.GetAreaFromName.html) to find the area index based on the name of the [NavMesh](AI.NavMesh.html) area type.

Additional resources: [Areas and Costs](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/AreasAndCosts.html) to learn how to use different Area types.


            
