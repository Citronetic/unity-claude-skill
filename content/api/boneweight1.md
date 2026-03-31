This version of Unity is unsupported.



# BoneWeight1





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



Describes a bone weight that affects a vertex in a mesh.





This struct can be used with the [Mesh.GetAllBoneWeights](Mesh.GetAllBoneWeights.html), [Mesh.SetBoneWeights](Mesh.SetBoneWeights.html) and [Mesh.GetBonesPerVertex](Mesh.GetBonesPerVertex.html) APIs to describe up to 255 bone weights per vertex.

Note that the older [BoneWeight](BoneWeight.html) struct, and the associated [Mesh.boneWeights](Mesh-boneWeights.html) and [Mesh.GetBoneWeights](Mesh.GetBoneWeights.html) APIs, describe exactly 4 bone weights per vertex. It is preferable to use [BoneWeight1](BoneWeight1.html) and its associated APIs; they offer more flexibility, and might result in small performance benefits as Unity does not have to perform unnecessary conversion operations.

Additional resources: [Mesh.SetBoneWeights](Mesh.SetBoneWeights.html), [Mesh.GetAllBoneWeights](Mesh.GetAllBoneWeights.html), [Mesh.GetBonesPerVertex](Mesh.GetBonesPerVertex.html), [Mesh.boneWeights](Mesh-boneWeights.html), [Mesh.GetBoneWeights](Mesh.GetBoneWeights.html), [ModelImporter.maxBonesPerVertex](ModelImporter-maxBonesPerVertex.html), [QualitySettings.skinWeights](QualitySettings-skinWeights.html), [SkinnedMeshRenderer.quality](SkinnedMeshRenderer-quality.html).





### Properties



| Property | Description |
| --- | --- |
| boneIndex | Index of bone. |
| weight | Skinning weight for bone. |


            
