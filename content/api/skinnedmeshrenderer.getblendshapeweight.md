This version of Unity is unsupported.



# [SkinnedMeshRenderer](SkinnedMeshRenderer.html).GetBlendShapeWeight




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










## Declaration

public float GetBlendShapeWeight(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The index of the BlendShape whose weight you want to retrieve. Index must be smaller than the Mesh.blendShapeCount of the Mesh attached to this Renderer. |





### Returns



**float**
        The weight of the BlendShape.





### Description



Returns the weight of a BlendShape for this Renderer.





The weight of a BlendShape represents how much the Mesh has been blended (or morphed) from its original shape to a target BlendShape (another Mesh containing the same topology, but with different vertex positions than the original). The BlendShape weight range includes values between the minimum and the maximum weights defined in the model.

Additional resources: [SetBlendShapeWeight](SkinnedMeshRenderer.SetBlendShapeWeight.html).


            
