This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).Raycast




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

public bool Raycast([Vector3](Vector3.html) targetPosition,
out [AI.NavMeshHit](AI.NavMeshHit.html) hit);






### Parameters



| Parameter | Description |
| --- | --- |
| targetPosition | The desired end position of movement. |
| hit | Properties of the obstacle detected by the ray (if any). |





### Returns



**bool**
        True if there is an obstacle between the agent and the target position, otherwise false.





### Description



Trace a straight path towards a target postion in the NavMesh without moving the agent.





This function follows the path of a "ray" between the agent's
position and the specified target position. If an obstruction is
encountered along the line then a true value is returned and
the position and other details of the obstructing object are stored
in the `hit` parameter. This can be used to check if there is a clear
shot or line of sight between a character and a target object.
This function is preferable to the similar [Physics.Raycast](Physics.Raycast.html)
because the line tracing is performed in a simpler way using the navmesh
 and has a lower processing overhead.


              


```
using UnityEngine;
using UnityEngine.AI;public class ExampleClass : MonoBehaviour
{
    public Transform target;
    private NavMeshAgent agent;    void Start()
    {
        agent = GetComponent<NavMeshAgent>();
    }    void Update()
    {
        NavMeshHit hit;
        if (!agent.Raycast(target.position, out hit))
        {
            // Target is "visible" from our position.
        }
    }
}
```


            
