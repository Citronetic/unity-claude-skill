This version of Unity is unsupported.



# CombineInstance





struct in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



A struct that describes a single mesh to be merged with other instances into a combined mesh.





Use this `CombineInstance` struct with the [Mesh.CombineMeshes](Mesh.CombineMeshes.html) method to merge multiple meshes into a single combined mesh. You must create a `CombineInstance` for each mesh you want to combine. If a mesh contains multiple sub-meshes, you must create a separate `CombineInstance` for each sub-mesh.


              


```
using UnityEngine;// This script combines the meshes from children into a single new Mesh.
// The combined mesh is assigned to the MeshFilter of this GameObject.
// The original meshes are not destroyed, but their GameObjects are disabled.[RequireComponent(typeof(MeshFilter), typeof(MeshRenderer))]
public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        MeshFilter[] meshFilters = GetComponentsInChildren<MeshFilter>();
        CombineInstance[] instances = new CombineInstance[meshFilters.Length];        for (int i = 0; i < meshFilters.Length; i++)
        {
            var meshFilter = meshFilters[i];

            instances[i] = new CombineInstance
            {
                mesh = meshFilter.sharedMesh,
                transform = meshFilter.transform.localToWorldMatrix,
            };            meshFilter.gameObject.SetActive(false);
        }        Mesh combinedMesh = new Mesh();
        combinedMesh.CombineMeshes(instances);
        gameObject.GetComponent<MeshFilter>().sharedMesh = combinedMesh;
        gameObject.SetActive(true);
    }
}
```





Additional resources: [Mesh.CombineMeshes](Mesh.CombineMeshes.html), [Mesh.subMeshCount](Mesh-subMeshCount.html).





### Properties



| Property | Description |
| --- | --- |
| lightmapScaleOffset | The baked lightmap UV scale and offset applied to the Mesh. |
| mesh | The Mesh to be combined with the other meshes. |
| realtimeLightmapScaleOffset | The real-time lightmap UV scale and offset applied to the Mesh. |
| subMeshIndex | The index of the sub-mesh to be combined with the other meshes. |
| transform | A matrix used to transform vertices before combining meshes. |


            
