This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).SamplePathPosition




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

public bool SamplePathPosition(int areaMask,
float maxDistance,
out [AI.NavMeshHit](AI.NavMeshHit.html) hit);






### Parameters



| Parameter | Description |
| --- | --- |
| areaMask | A bitfield mask specifying which NavMesh areas can be passed when tracing the path. |
| maxDistance | Terminate scanning the path at this distance. |
| hit | Holds the properties of the resulting location. |





### Returns



**bool**
        True if terminated before reaching the position at maxDistance, false otherwise.





### Description



Sample a position along the current path.





This function looks ahead a specified distance along the current path. Details of the mesh
 at that position are then returned in a [NavMeshHit](AI.NavMeshHit.html) object. This could be used, for example,
 to check the type of surface that lies ahead before the character gets there - a character could
 raise his gun above his head if he is about to wade through water, say.


              


```
using UnityEngine;
using UnityEngine.AI;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Transform target;
    private NavMeshAgent agent;
    private int waterMask;
    void Start()
    {
        agent = GetComponent<NavMeshAgent>();
        waterMask = 1 << NavMesh.GetAreaFromName("Water");
        agent.SetDestination(target.position);
    }    void Update()
    {
        NavMeshHit hit;        // Check all areas one length unit ahead.
        if (!agent.SamplePathPosition(NavMesh.AllAreas, 1.0F, out hit))
            if ((hit.mask & waterMask) != 0)
            {
                // Water detected along the path...
            }
    }
}
```


            
