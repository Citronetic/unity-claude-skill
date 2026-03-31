This version of Unity is unsupported.



# [Mesh](Mesh.html).CombineMeshes




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










## Declaration

public void CombineMeshes(CombineInstance[] combine,
bool mergeSubMeshes = true,
bool useMatrices = true,
bool hasLightmapData = false);






### Parameters



| Parameter | Description |
| --- | --- |
| combine | Descriptions of the Meshes to combine. |
| mergeSubMeshes | Defines whether Meshes should be combined into a single sub-mesh. |
| useMatrices | Defines whether the transforms supplied in the CombineInstance array should be used or ignored. |
| hasLightmapData | Defines whether to transform the input Mesh lightmap UV data using the lightmap scale offset data in CombineInstance structs. |





### Description



Combines several Meshes into this Mesh.





Combining meshes can improve performance by reducing the number of renderers needed to render a scene.

If `mergeSubMeshes` is set to true, all [CombineInstance](CombineInstance.html) instances are combined into a single sub-mesh. If set to false, each instance is placed in its own sub-mesh in the resulting mesh. Set this to true when all instances share the same material and topology for optimal performance.

When `useMatrices` is set to true, the vertices in each [CombineInstance](CombineInstance.html) are transformed with the instance’s [CombineInstance.transform](CombineInstance-transform.html) matrix. Otherwise, the transform matrices are ignored and the vertices are combined without modification.
This parameter allows you to combine meshes into a common space. To ensure meshes align correctly in the combined mesh, temporarily reset the position and rotation of the combined Mesh's destination MeshFilter to zero before combining, and restore them afterward.

Set `hasLightmapData` to true to transform the input Mesh lightmap UV data using the lightmap scale offset data in [CombineInstance](CombineInstance.html) structs. The Meshes must share the same lightmap texture.

Note that meshes must be readable from the CPU to be combined. If a mesh is not CPU-readable, Unity logs a warning in the console and ignores the instance.


              


```
using UnityEngine;// This script combines the meshes from children into a single new Mesh.
// The combined mesh is assigned to the MeshFilter of this GameObject.
// The original meshes are not destroyed, but their GameObjects are deactivated.[RequireComponent(typeof(MeshFilter), typeof(MeshRenderer))]
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





Additional resources: [Mesh.isReadable](Mesh-isReadable.html), [MeshTopology](MeshTopology.html).


            
