This version of Unity is unsupported.



# [NavMeshObstacle](AI.NavMeshObstacle.html).size




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












                    public [Vector3](Vector3.html) size;






### Description



The size of the obstacle, measured in the object's local space.





The size will be scaled by the transform's scale.


              


```
using UnityEngine;
using UnityEngine.AI;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        NavMeshObstacle obstacle = GetComponent<NavMeshObstacle>();
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        obstacle.shape = NavMeshObstacleShape.Box;
        obstacle.size = mesh.bounds.size;
    }
}
```


            
