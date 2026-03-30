This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).SetDestination




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

public bool SetDestination([Vector3](Vector3.html) target);






### Parameters



| Parameter | Description |
| --- | --- |
| target | The target point to navigate to. |





### Returns



**bool**
        True if the destination was requested successfully, otherwise false.





### Description



Sets or updates the destination thus triggering the calculation for a new path.





Note that the path may not become available until after a few frames later.
While the path is being computed, [pathPending](AI.NavMeshAgent-pathPending.html) will be true.
If a valid path becomes available then the agent will resume movement.


              


```
using UnityEngine;
using UnityEngine.AI;public class Example : MonoBehaviour
{
    NavMeshAgent myNavMeshAgent;
    void Start()
    {
        myNavMeshAgent = GetComponent<NavMeshAgent>();
    }    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            SetDestinationToMousePosition();
        }
    }    void SetDestinationToMousePosition()
    {
        RaycastHit hit;
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        if (Physics.Raycast(ray, out hit))
        {
            myNavMeshAgent.SetDestination(hit.point);
        }
    }
}
```


            
