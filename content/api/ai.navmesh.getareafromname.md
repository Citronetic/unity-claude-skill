This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).GetAreaFromName




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

public static int GetAreaFromName(string areaName);






### Parameters



| Parameter | Description |
| --- | --- |
| areaName | Name of the area to look up. |





### Returns



**int**
        Index if the specified area name exists, or -1 if no area type has the specified name.





### Description



Returns the area index for a named NavMesh area type.


              


```
// NearestPointOnWater
using UnityEngine;
using UnityEngine.AI;public class NearestPointOnWater : MonoBehaviour
{
    void Update()
    {
        // Find the nearest point on water.
        int waterMask = 1 << NavMesh.GetAreaFromName("water");
        NavMeshHit hit;
        if (NavMesh.SamplePosition(transform.position, out hit, 2.0f, waterMask))
        {
            Debug.DrawRay(hit.position, Vector3.up, Color.blue);
        }
    }
}
```





Additional resources: [Areas and Costs](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/AreasAndCosts.html) to learn how to use different Area types.


            
