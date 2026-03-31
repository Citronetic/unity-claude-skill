This version of Unity is unsupported.



# [RenderTexture](RenderTexture.html).autoGenerateMips




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







                    public bool autoGenerateMips;






### Description



Mipmap levels are generated automatically when this flag is set.





When a render texture is with mipmaps ([useMipMap](RenderTexture-useMipMap.html)), then by default rendering into it generates all the mipmap levels. The mipmap
generation happens automatically only after rendering into this render texture; when active render target is switched to some other render texture.

If you want to render into mip levels manually, or control when mipmap generation happens (via [GenerateMips](RenderTexture.GenerateMips.html)), set this variable to false.
Default value is true.

Additional resources: [useMipMap](RenderTexture-useMipMap.html), [GenerateMips](RenderTexture.GenerateMips.html).


            
