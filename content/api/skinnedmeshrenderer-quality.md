This version of Unity is unsupported.



# [SkinnedMeshRenderer](SkinnedMeshRenderer.html).quality




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




                [Switch to Manual](../Manual/class-SkinnedMeshRenderer.html)







                    public [SkinQuality](SkinQuality.html) quality;






### Description



The maximum number of bones per vertex that are taken into account during skinning.





The value can be either One Bone, Two Bones, Four Bones or Auto. Note that higher bone counts may have a performance cost, especially above 4 bones per vertex.

This setting does not change the underlying mesh data; it only affects the number of bone weights that Unity uses when performing skinning. This means that a mesh can have bone weight data that is unused due to this setting. You can change this value at runtime.

You can set this value for all meshes in the project using [QualitySettings.skinWeights](QualitySettings-skinWeights.html). You can set the maximum number of bone weights that mesh data stores per vertex using [ModelImporter.maxBonesPerVertex](ModelImporter-maxBonesPerVertex.html).

Additional resources: [ModelImporter.maxBonesPerVertex](ModelImporter-maxBonesPerVertex.html), [ModelImporter.minBoneWeight](ModelImporter-minBoneWeight.html), [ModelImporter.skinWeights](ModelImporter-skinWeights.html), [QualitySettings.skinWeights](QualitySettings-skinWeights.html), [BoneWeight](BoneWeight.html), [BoneWeight1](BoneWeight1.html).


            
