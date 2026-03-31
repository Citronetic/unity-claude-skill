This version of Unity is unsupported.



# [VisualEffect](VFX.VisualEffect.html).GetSkinnedMeshRenderer




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

public [SkinnedMeshRenderer](SkinnedMeshRenderer.html) GetSkinnedMeshRenderer(string name);






## Declaration

public [SkinnedMeshRenderer](SkinnedMeshRenderer.html) GetSkinnedMeshRenderer(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The ID of the property. This is the same ID that Shader.PropertyToID returns. |
| nameID | The name of the property. |





### Returns



**SkinnedMeshRenderer**
        The value for the Skinned Mesh Renderer you specify. Returns `null` if [VisualEffect.HasSkinnedMeshRenderer](VFX.VisualEffect.HasSkinnedMeshRenderer.html) returns `false`.





### Description



Gets the value of a named Skinned Mesh Renderer property.


            
