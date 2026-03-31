This version of Unity is unsupported.



# [ModelImporter](ModelImporter.html).skinWeights




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












                    public [ModelImporterSkinWeights](ModelImporterSkinWeights.html) skinWeights;






### Description



Skin weights import options.





To import more than 4 bone weights per vertex, set this property to [ModelImporterSkinWeights.Custom](ModelImporterSkinWeights.Custom.html) and set [ModelImporter.maxBonesPerVertex](ModelImporter-maxBonesPerVertex.html) to the required number. You may also limit the number of bones to less than 4, or set a threshold for the weights via [ModelImporter.minBoneWeight](ModelImporter-minBoneWeight.html).

Note that [QualitySettings.skinWeights](QualitySettings-skinWeights.html) and [SkinnedMeshRenderer.quality](SkinnedMeshRenderer-quality.html) can limit the number of bone weights that Unity uses for skinning. Ensure that these values are set to Auto, if you want to use more than 4 bone weights per vertex.

Additional resources: [ModelImporter.maxBonesPerVertex](ModelImporter-maxBonesPerVertex.html), [ModelImporter.minBoneWeight](ModelImporter-minBoneWeight.html),[QualitySettings.skinWeights](QualitySettings-skinWeights.html), [SkinnedMeshRenderer.quality](SkinnedMeshRenderer-quality.html).


            
