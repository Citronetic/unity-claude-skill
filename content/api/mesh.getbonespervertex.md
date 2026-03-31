This version of Unity is unsupported.



# [Mesh](Mesh.html).GetBonesPerVertex




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

public NativeArray<byte> GetBonesPerVertex();






### Returns



**NativeArray<byte>**
        Returns the number of non-zero bone weights for each vertex.





### Description



The number of non-zero bone weights for each vertex.





The size of the returned array is either [Mesh.vertexCount](Mesh-vertexCount.html) or zero. The array is sorted in vertex index order.

Use in combination with [Mesh.GetAllBoneWeights](Mesh.GetAllBoneWeights.html) to get bone weights for the vertices in the Mesh.

You don't need to dispose the returned native array. However the native array points to memory that might be deallocated or reallocated, so you should either call `GetBonesPerVertex` every frame to get the correct data, or check the native array is still valid each frame.

Additional resources: [Mesh.GetAllBoneWeights](Mesh.GetAllBoneWeights.html), [Mesh.SetBoneWeights](Mesh.SetBoneWeights.html), [ModelImporter.maxBonesPerVertex](ModelImporter-maxBonesPerVertex.html), [QualitySettings.skinWeights](QualitySettings-skinWeights.html), [SkinnedMeshRenderer.quality](SkinnedMeshRenderer-quality.html).


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


            
