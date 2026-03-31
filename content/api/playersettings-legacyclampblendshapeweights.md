This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).legacyClampBlendShapeWeights




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static bool legacyClampBlendShapeWeights;






### Description



Defines whether the BlendShape weight range in SkinnedMeshRenderers is clamped.





If set to true, the range of BlendShape weights in SkinnedMeshRenderers will be clamped, otherwise BlendShape weights can take any value.

The weight of a BlendShape represents how much the Mesh has been blended (or morphed) from its original shape to a target BlendShape (another Mesh containing the same topology, but with different vertex positions than the original). The BlendShape weight range includes values between the minimum and the maximum weights defined in the model.


            
