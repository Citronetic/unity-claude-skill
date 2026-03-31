This version of Unity is unsupported.



# SkinWeights





enumeration


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



Skin weights.





How many bones affect each vertex. This can be used when accessing the Bone Weight Buffer with [Mesh.GetBoneWeightBuffer](Mesh.GetBoneWeightBuffer.html) to determine what way the data will be ordered.

Additional resources: [QualitySettings.skinWeights](QualitySettings-skinWeights.html), [SkinnedMeshRenderer.quality](SkinnedMeshRenderer-quality.html), [Mesh.GetBoneWeightBuffer](Mesh.GetBoneWeightBuffer.html).





### Properties



| Property | Description |
| --- | --- |
| None | The mesh does not contain any bone weight data. |
| OneBone | One bone affects each vertex. When used to access Mesh.GetBoneWeightBuffer the Bone Weight buffer will contain only indices to the bones, as the weight will be set to 1. |
| TwoBones | Two bones affect each vertex. When used to access Mesh.GetBoneWeightBuffer the Bone Weight buffer will contain two indices and two floats per vertex. |
| FourBones | Four bones affect each vertex. When used to access Mesh.GetBoneWeightBuffer the Bone Weight buffer will contain one BoneWeight per vertex. |
| Unlimited | An unlimited number of bones affect each vertex. |


            
