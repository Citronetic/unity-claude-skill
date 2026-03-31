This version of Unity is unsupported.



# [RenderTexture](RenderTexture.html).GenerateMips




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




                [Switch to Manual](../Manual/class-RenderTexture.html)










## Declaration

public void GenerateMips();






### Description



Generate mipmap levels of a render texture.





Use this function to manually re-generate mipmap levels of a render texture. The render texture has to have mipmaps ([useMipMap](RenderTexture-useMipMap.html) set to true),
and automatic mip generation turned off ([autoGenerateMips](RenderTexture-autoGenerateMips.html) set to false).

On some platforms (most notably, D3D9), there is no way to manually generate render texture mip levels; in these cases this function does nothing.

Additional resources: [useMipMap](RenderTexture-useMipMap.html), [autoGenerateMips](RenderTexture-autoGenerateMips.html).


            
