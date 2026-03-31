This version of Unity is unsupported.



# [Mesh](Mesh.html).subMeshCount




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




                [Switch to Manual](../Manual/class-Mesh.html)







                    public int subMeshCount;






### Description



The number of sub-meshes inside the Mesh object.





Each sub-mesh corresponds to a [Material](Material.html) in a [Renderer](Renderer.html), such as [MeshRenderer](MeshRenderer.html) or [SkinnedMeshRenderer](SkinnedMeshRenderer.html). A sub-mesh consists of a list of triangles, which refer to a set of vertices. Vertices can be shared between multiple sub-meshes.

Additional resources: [GetTriangles](Mesh.GetTriangles.html), [SetTriangles](Mesh.SetTriangles.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        Debug.Log("Submeshes: " + mesh.subMeshCount);
    }
}
```





For advanced lower-level sub-mesh and mesh data manipulation functions, see [SubMeshDescriptor](Rendering.SubMeshDescriptor.html), [SetSubMesh](Mesh.SetSubMesh.html), [SetIndexBufferParams](Mesh.SetIndexBufferParams.html), [SetIndexBufferData](Mesh.SetIndexBufferData.html).

Note that changing `subMeshCount` to a smaller value than it was previously resizes the Mesh index buffer to be smaller. The new index buffer size is set to [SubMeshDescriptor.indexStart](Rendering.SubMeshDescriptor-indexStart.html) of the first removed sub-mesh.


            
