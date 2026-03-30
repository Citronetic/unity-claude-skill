This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).SetAreaCost




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

public static void SetAreaCost(int areaIndex,
float cost);






### Parameters



| Parameter | Description |
| --- | --- |
| areaIndex | Index of the area to set. |
| cost | New cost. |





### Description



Sets the cost for finding path over geometry of the area type on all agents.





This will replace any custom area costs on all agents, and set the default cost for new agents that are created after calling the function. The cost must be larger than 1.0.

Use [GetAreaFromName](AI.NavMesh.GetAreaFromName.html) to find the area index based on the name of the NavMesh area type.


              


```
// ToggleWaterCost
using UnityEngine;
using UnityEngine.AI;public class ToggleWaterCost : MonoBehaviour
{
    void Update()
    {
        if (Input.anyKeyDown)
        {
            // Make the water area 10x more costly to traverse.
            NavMesh.SetAreaCost(NavMesh.GetAreaFromName("water"), 10.0f);
        }
    }
}
```





Additional resources: [Areas and Costs](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/AreasAndCosts.html) to learn how to use different Area types.


            
