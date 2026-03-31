This version of Unity is unsupported.



# BoneWeight





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



Describes 4 skinning bone weights that affect a vertex in a mesh.





Elements in this struct must be in descending order of weight value. The sum of all weight values must be 1. If a vertex is affected by fewer than 4 bones, each of the remaining weight values must be 0.

Note that this struct, and the associated [Mesh.boneWeights](Mesh-boneWeights.html) and [Mesh.GetBoneWeights](Mesh.GetBoneWeights.html) APIs, describe exactly 4 bone weights per vertex. The newer [BoneWeight1](BoneWeight1.html) struct describes a single bone weight, and it can be used with the associated [Mesh.GetAllBoneWeights](Mesh.GetAllBoneWeights.html), [Mesh.SetBoneWeights](Mesh.SetBoneWeights.html) and [Mesh.GetBonesPerVertex](Mesh.GetBonesPerVertex.html) APIs to describe up to 255 bone weights per vertex. It is preferable to use [BoneWeight1](BoneWeight1.html) and its associated APIs; they offer more flexibility, and might result in small performance benefits as Unity does not have to perform unnessary conversion operations.

Additional resources: [Mesh.boneWeights](Mesh-boneWeights.html), [Mesh.GetBoneWeights](Mesh.GetBoneWeights.html), [Mesh.GetAllBoneWeights](Mesh.GetAllBoneWeights.html), [Mesh.SetBoneWeights](Mesh.SetBoneWeights.html), [Mesh.GetBonesPerVertex](Mesh.GetBonesPerVertex.html), [ModelImporter.maxBonesPerVertex](ModelImporter-maxBonesPerVertex.html), [QualitySettings.skinWeights](QualitySettings-skinWeights.html), [SkinnedMeshRenderer.quality](SkinnedMeshRenderer-quality.html).





### Properties



| Property | Description |
| --- | --- |
| boneIndex0 | Index of first bone. |
| boneIndex1 | Index of second bone. |
| boneIndex2 | Index of third bone. |
| boneIndex3 | Index of fourth bone. |
| weight0 | Skinning weight for first bone. |
| weight1 | Skinning weight for second bone. |
| weight2 | Skinning weight for third bone. |
| weight3 | Skinning weight for fourth bone. |


            
