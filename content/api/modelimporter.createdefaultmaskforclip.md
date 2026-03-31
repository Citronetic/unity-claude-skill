This version of Unity is unsupported.



# [ModelImporter](ModelImporter.html).CreateDefaultMaskForClip




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















## Declaration

public void CreateDefaultMaskForClip([ModelImporterClipAnimation](ModelImporterClipAnimation.html) clip);






### Parameters



| Parameter | Description |
| --- | --- |
| clip | Clip to which the mask will be applied. |





### Description



Creates a mask that matches the model hierarchy, and applies it to the provided [ModelImporterClipAnimation](ModelImporterClipAnimation.html).





When writing an [AssetPostprocessor](AssetPostprocessor.html), use this method with your created clips to apply a mask that matches the transform hierarchy in the [ModelImporter](ModelImporter.html).


            
