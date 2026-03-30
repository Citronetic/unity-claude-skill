This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).nextPosition




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












                    public [Vector3](Vector3.html) nextPosition;






### Description



Gets or sets the simulation position of the navmesh agent.





The position vector is in world space coordinates and units.

The nextPosition is coupled to [Transform.position](Transform-position.html). In the default case the navmesh agent's Transform position will match the internal simulation position at the time the script Update function is called. This coupling can be turned on and off by setting [updatePosition](AI.NavMeshAgent-updatePosition.html).

When [updatePosition](AI.NavMeshAgent-updatePosition.html) is true, the [Transform.position](Transform-position.html) reflects the simulated position, when false the position of the transform and the navmesh agent is not synchronized, and you'll see a difference between the two in general. When [updatePosition](AI.NavMeshAgent-updatePosition.html) is turned back on, the [Transform.position](Transform-position.html) will be immediately move to match nextPosition.

By setting nextPosition you can directly control where the internal agent position should be. The agent will be moved towards the position, but is constrained by the navmesh connectivity and boundaries. As such it will be useful only if the positions are continuously updated and assessed.
Additional resources: [Warp](AI.NavMeshAgent.Warp.html) for teleporting a navmesh agent.


              


```
using UnityEngine;
using UnityEngine.AI;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        // Update the transform position explicitly in the OnAnimatorMove callback
        GetComponent<NavMeshAgent>().updatePosition = false;
    }    void OnAnimatorMove()
    {
        transform.position = GetComponent<NavMeshAgent>().nextPosition;
    }
}
```





Additionally it can be useful to control the agent position directly - especially if the
GO transform is controlled by something else - e.g. animator, physics, scripted or input.


              


```
using UnityEngine;
using UnityEngine.AI;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public bool agentIsControlledByOther;
    void Update()
    {
        var agent = GetComponent<NavMeshAgent>();
        agent.updatePosition = !agentIsControlledByOther;
        if (agentIsControlledByOther)
        {
            GetComponent<NavMeshAgent>().nextPosition = transform.position;
        }
    }
}
```





Additional resources: [Move](AI.NavMeshAgent.Move.html) for moving the agent with a relative position.


            
