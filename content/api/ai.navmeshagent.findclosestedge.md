This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).FindClosestEdge




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

public bool FindClosestEdge(out [AI.NavMeshHit](AI.NavMeshHit.html) hit);






### Parameters



| Parameter | Description |
| --- | --- |
| hit | Holds the properties of the resulting location. |





### Returns



**bool**
        True if a nearest edge is found.





### Description



Locate the closest NavMesh edge.





The returned [NavMeshHit](AI.NavMeshHit.html) object contains the position
and details of the nearest point on the nearest edge of the
Navmesh. Since an edge typically corresponds to a wall or
other large object, this could be used to make a character
take cover as close to the wall as possible.


              


```
using UnityEngine;
using UnityEngine.AI;
using System.Collections;public class ExampleClass : MonoBehaviour {
    private NavMeshAgent agent;
    void Start() {
        agent = GetComponent<NavMeshAgent>();
    }    void Update() {
        if (Input.GetMouseButtonDown(0))
            TakeCover();
    }    void TakeCover() {
        NavMeshHit hit;
        if (agent.FindClosestEdge(out hit))
            agent.SetDestination(hit.position);
    }
}
```


            
