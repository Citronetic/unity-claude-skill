This version of Unity is unsupported.



# [TextureGenerationSettings](AssetImporters.TextureGenerationSettings.html).enablePostProcessor




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












                    public bool enablePostProcessor;






### Description



When set to true, the [AssetPostprocessor](AssetPostprocessor.html) hooks will be called during texture generation. The following will hold for any AssetPostprocessors triggered through [TextureGenerator.GenerateTexture](AssetImporters.TextureGenerator.GenerateTexture.html)
                - When the postprocessor is invoked [AssetPostprocessor.assetPath](AssetPostprocessor-assetPath.html) will be set to the assetPath value in this structure.
                - The value of [AssetPostprocessor.context](AssetPostprocessor-context.html) will be set to null.
                - Only OnPostprocessTexture, OnPostprocessCubemap, ... is called. The OnPreprocessTexture functions are not called.


            
