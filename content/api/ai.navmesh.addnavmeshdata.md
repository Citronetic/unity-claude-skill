This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).AddNavMeshData




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

public static [AI.NavMeshDataInstance](AI.NavMeshDataInstance.html) AddNavMeshData([AI.NavMeshData](AI.NavMeshData.html) navMeshData);






### Parameters



| Parameter | Description |
| --- | --- |
| navMeshData | Contains the data for the navmesh. |





### Returns



**NavMeshDataInstance**
        Representing the added navmesh.





### Description



Adds the specified NavMeshData to the game.





This makes the NavMesh data available for agents and NavMesh queries. Returns an instance for later removing the NavMesh data from the runtime.

The instance returned will be valid unless the NavMesh data could not be added - e.g. due to running out of memory or navmesh data being loaded from a corrupted file.

Additional resources: [NavMeshDataInstance](AI.NavMeshDataInstance.html), [RemoveNavMeshData](AI.NavMesh.RemoveNavMeshData.html).




---








## Declaration

public static [AI.NavMeshDataInstance](AI.NavMeshDataInstance.html) AddNavMeshData([AI.NavMeshData](AI.NavMeshData.html) navMeshData,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation);






### Parameters



| Parameter | Description |
| --- | --- |
| navMeshData | Contains the data for the navmesh. |
| position | Translate the navmesh to this position. |
| rotation | Rotate the navmesh to this orientation. |





### Returns



**NavMeshDataInstance**
        Representing the added navmesh.





### Description



Adds the specified NavMeshData to the game.





This function is similar to [AddNavMeshData](AI.NavMesh.AddNavMeshData.html) above, but the position and rotation specified is applied in addition to the position and rotation where the NavMesh data was baked.


              


```
using UnityEngine;
using UnityEngine.AI;class Example : MonoBehaviour
{
    public NavMeshData data;
    NavMeshDataInstance[] instances = new NavMeshDataInstance[2];    public void OnEnable()
    {
        // Add an instance of navmesh data
        instances[0] = NavMesh.AddNavMeshData(data);        // Add another instance of the same navmesh data - displaced and rotated
        instances[1] = NavMesh.AddNavMeshData(data, new Vector3(0, 5, 0), Quaternion.AngleAxis(90, Vector3.up));
    }    public void OnDisable()
    {
        instances[0].Remove();
        instances[1].Remove();
    }
}
```


            
