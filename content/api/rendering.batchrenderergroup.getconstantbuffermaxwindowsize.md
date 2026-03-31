This version of Unity is unsupported.



# [BatchRendererGroup](Rendering.BatchRendererGroup.html).GetConstantBufferMaxWindowSize




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

public static int GetConstantBufferMaxWindowSize();






### Returns



**int**
        The maximum window size in bytes.





### Description



Defines the maxiumum amount (in bytes) the BatchRendererGroup constant buffer window size is visible from the shader.





The BatchRendererGroup API is different from [SystemInfo.maxConstantBufferSize](SystemInfo-maxConstantBufferSize.html) because it uses Universal Buffer Objects (UBOs) in a different way from other rendering paths. This means it requires different size and alignment constraints on GL platforms.


            
