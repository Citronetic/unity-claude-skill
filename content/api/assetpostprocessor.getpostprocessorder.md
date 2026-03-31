This version of Unity is unsupported.



# [AssetPostprocessor](AssetPostprocessor.html).GetPostprocessOrder




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

public int GetPostprocessOrder();






### Description



Returns the execution order priority for this asset postprocessor.





Override this method to control the execution order of multiple asset postprocessors. Return an integer value where lower values are processed first.

The default implementation returns 0. Postprocessors with negative values run before the default, and positive values run after.

This method doesn't affect the execution order of AssetPostprocessorOnPostprocessAllAssets callbacks, which use dependency attributes instead.


            
