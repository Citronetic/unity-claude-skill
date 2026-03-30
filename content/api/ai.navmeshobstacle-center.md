This version of Unity is unsupported.



# [NavMeshObstacle](AI.NavMeshObstacle.html).center




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












                    public [Vector3](Vector3.html) center;






### Description



The center of the obstacle, measured in the object's local space.





**Note:** When a [NavMeshObstacle](AI.NavMeshObstacle.html) is created the [center](AI.NavMeshObstacle-center.html) is set to zero.


              


```
// Default center is (0, 0, 0)
using UnityEngine;
using UnityEngine.AI;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        NavMeshObstacle navMeshObstacle = gameObject.AddComponent<NavMeshObstacle>();
        Debug.Log(navMeshObstacle.center);
    }
}
```


            
