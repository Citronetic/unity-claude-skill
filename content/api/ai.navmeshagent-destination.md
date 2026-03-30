This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).destination




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












                    public [Vector3](Vector3.html) destination;






### Description



Gets or attempts to set the destination of the agent in world-space units.





Getting:

Returns the destination set for this agent.

• If a destination is set but the path is not yet processed the position returned will be valid navmesh position that's closest to the previously set position.

• If the agent has no path or requested path - returns the agents position on the navmesh.

• If the agent is not mapped to the navmesh (e.g. Scene has no navmesh) - returns a position at infinity.

Setting:

Requests the agent to move to the valid navmesh position that's closest to the requested destination.

• The path result may not become available until after a few frames. Use [pathPending](AI.NavMeshAgent-pathPending.html) to query for outstanding results.

• If it's not possible to find a valid nearby navmesh position (e.g. Scene has no navmesh) no path is requested. Use [SetDestination](AI.NavMeshAgent.SetDestination.html) and check return value if you need to handle this case explicitly.


              


```
using UnityEngine;
using UnityEngine.AI;[RequireComponent(typeof(NavMeshAgent))]
public class FollowTarget : MonoBehaviour
{
    public Transform target;
    Vector3 destination;
    NavMeshAgent agent;    void Start()
    {
        // Cache agent component and destination
        agent = GetComponent<NavMeshAgent>();
        destination = agent.destination;
    }    void Update()
    {
        // Update destination if the target moves one unit
        if (Vector3.Distance(destination, target.position) > 1.0f)
        {
            destination = target.position;
            agent.destination = destination;
        }
    }
}
```


            
