This version of Unity is unsupported.



# NavMeshBuildSource





struct in
          UnityEngine.AI



/



Implemented in:[UnityEngine.AIModule](UnityEngine.AIModule.html)


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



















### Description



The input to the NavMesh builder is a list of NavMesh build sources.





Their shape can be one of the following: mesh, terrain, box, sphere, or capsule. Each of them is described by a NavMeshBuildSource struct.

You can specify a build source by filling a NavMeshBuildSource struct and adding that to the list of sources that are passed to the bake function. Alternatively, you can use the collect API to quickly create NavMesh build sources from available render meshes or physics colliders. See [NavMeshBuilder.CollectSources](AI.NavMeshBuilder.CollectSources.html).

If you use this function at runtime, any meshes with read/write access disabled will not be processed or included in the final NavMesh. See [Mesh.isReadable](Mesh-isReadable.html).


              


```
using UnityEngine;
using UnityEngine.AI;public class Example : MonoBehaviour
{
    // Make a build source for a box in local space
    public NavMeshBuildSource BoxSource10x10()
    {
        var src = new NavMeshBuildSource();
        src.transform = transform.localToWorldMatrix;
        src.shape = NavMeshBuildSourceShape.Box;
        src.size = new Vector3(10.0f, 0.1f, 10.0f);
        return src;
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| area | Describes the area type of the NavMesh surface for this object. |
| component | Points to the owning component - if available, otherwise null. |
| generateLinks | Enables the links generation for this object. |
| shape | The type of the shape this source describes. Additional resources: NavMeshBuildSourceShape. |
| size | Describes the dimensions of the shape. |
| sourceObject | Describes the object referenced for Mesh and Terrain types of input sources. |
| transform | Describes the local to world transformation matrix of the build source. That is, position and orientation and scale of the shape. |


            
