This version of Unity is unsupported.



# [TextureImporter](TextureImporter.html).DoesSourceTextureHaveAlpha




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




                [Switch to Manual](../Manual/class-TextureImporter.html)










## Declaration

public bool DoesSourceTextureHaveAlpha();






### Description



Allows you to check whether the texture source image has an alpha channel.





This method throws an exception if the texture has not finished importing. For example, it would throw an exception if you called this method in an [AssetPostprocessor.OnPreprocessAsset](AssetPostprocessor.OnPreprocessAsset.html) callback.


            
