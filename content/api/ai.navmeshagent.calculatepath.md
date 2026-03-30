This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).CalculatePath




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

public bool CalculatePath([Vector3](Vector3.html) targetPosition,
[AI.NavMeshPath](AI.NavMeshPath.html) path);






### Parameters



| Parameter | Description |
| --- | --- |
| targetPosition | The final position of the path requested. |
| path | The resulting path. |





### Returns



**bool**
        True if either a complete or partial path is found. False otherwise.





### Description



Calculate a path to a specified point and store the resulting path.





Use this function to avoid gameplay delays by planning a path before it is needed. You can also use this function to check if a target position is reachable before moving the agent. The function takes into account the agent's areaMask, agentTypeID and [area costs](AI.NavMeshAgent.GetAreaCost.html) properties when it searches for a matching path.

This function is synchronous. It performs path finding immediately, which can adversely affect the frame rate when processing very long paths. It is recommended to only perform a few path finds per frame when, for example, evaluating distances to cover points.

Use the returned path to set the path for this agent, or an agent of the same type, with [NavMeshAgent.SetPath](AI.NavMeshAgent.SetPath.html). For SetPath to work, the agent must be close to the starting point and be allowed to move through the [area type](AI.NavMeshAgent-areaMask.html) where the start point is.


              


```
using UnityEngine;
using UnityEngine.AI;[RequireComponent(typeof(NavMeshAgent))]
public class ExampleClass : MonoBehaviour
{
    public Transform target;    void Start()
    {
        if (target == null)
            return;        var agent = GetComponent<NavMeshAgent>();
        var path = new NavMeshPath();
        agent.CalculatePath(target.position, path);
        switch (path.status)
        {
            case NavMeshPathStatus.PathComplete:
                Debug.Log($"{agent.name} will be able to reach {target.name}.");
                break;
            case NavMeshPathStatus.PathPartial:
                Debug.LogWarning($"{agent.name} will only be able to move partway to {target.name}.");
                break;
            default:
                Debug.LogError($"There is no valid path for {agent.name} to reach {target.name}.");
                break;
        }
    }
}
```


            
