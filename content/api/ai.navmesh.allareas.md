This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).AllAreas




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












                    public static int AllAreas;






### Description



Area mask constant that includes all NavMesh areas.





Use the mask in query functions, such as [Raycast](AI.NavMesh.Raycast.html), to indicate that all NavMesh area types are accepted.


              


```
// TargetReachable
using UnityEngine;
using UnityEngine.AI;public class TargetReachable : MonoBehaviour
{
    public Transform target;
    private NavMeshHit hit;
    private bool blocked = false;    void Update()
    {
        // Allow pass through all area types when testing if the target position
        // is reachable from the transform location.
        blocked = NavMesh.Raycast(transform.position, target.position, out hit, NavMesh.AllAreas);
        Debug.DrawLine(transform.position, target.position, blocked ? Color.red : Color.green);
        if (blocked)
            Debug.DrawRay(hit.position, Vector3.up, Color.red);
    }
}
```





Additional resources:
[Areas and Costs](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/AreasAndCosts.html) to learn how to use different Area types.


            
