This version of Unity is unsupported.



# [Mesh](Mesh.html).GetAllBoneWeights




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

public NativeArray<BoneWeight1> GetAllBoneWeights();






### Returns



**NativeArray<BoneWeight1>**
        Returns all non-zero bone weights for the Mesh, in vertex index order.





### Description



Gets the bone weights for the Mesh.





Use [Mesh.GetBonesPerVertex](Mesh.GetBonesPerVertex.html) to get the number of non-zero weights for each vertex, and then use that to iterate over this data.

For each vertex, the [BoneWeight1](BoneWeight1.html) structs are sorted by [BoneWeight1.weight](BoneWeight1-weight.html), in descending order.

Additional resources: [Mesh.SetBoneWeights](Mesh.SetBoneWeights.html), [Mesh.GetBonesPerVertex](Mesh.GetBonesPerVertex.html), [Mesh.boneWeights](Mesh-boneWeights.html), [Mesh.GetBoneWeights](Mesh.GetBoneWeights.html) [ModelImporter.maxBonesPerVertex](ModelImporter-maxBonesPerVertex.html), [QualitySettings.skinWeights](QualitySettings-skinWeights.html), [SkinnedMeshRenderer.quality](SkinnedMeshRenderer-quality.html).


              


```
using UnityEngine;public class TestSkinnedMesh : MonoBehaviour {
    void Start()
    {
        // Get a reference to the mesh
        var skinnedMeshRenderer = GetComponent<SkinnedMeshRenderer>();
        var mesh = skinnedMeshRenderer.sharedMesh;        // Get the number of bone weights per vertex
        var bonesPerVertex = mesh.GetBonesPerVertex();
        if (bonesPerVertex.Length == 0)
        {
             return;
        }        // Get all the bone weights, in vertex index order
        var boneWeights = mesh.GetAllBoneWeights();        // Keep track of where we are in the array of BoneWeights, as we iterate over the vertices
        var boneWeightIndex = 0;        // Iterate over the vertices
        for (var vertIndex = 0; vertIndex < mesh.vertexCount; vertIndex++)
        {
            var totalWeight = 0f;
            var numberOfBonesForThisVertex = bonesPerVertex[vertIndex];
            Debug.Log("This vertex has " + numberOfBonesForThisVertex + " bone influences");            // For each vertex, iterate over its BoneWeights
            for (var i = 0; i < numberOfBonesForThisVertex; i++)
            {
                var currentBoneWeight = boneWeights[boneWeightIndex];
                totalWeight += currentBoneWeight.weight;
                if (i > 0)
                {
                    Debug.Assert(boneWeights[boneWeightIndex - 1].weight >= currentBoneWeight.weight);
                }
                boneWeightIndex++;
            }
            Debug.Assert(Mathf.Approximately(1f, totalWeight));
        }
    }
}
```


            
