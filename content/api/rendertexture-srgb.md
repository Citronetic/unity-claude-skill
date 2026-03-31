This version of Unity is unsupported.



# [RenderTexture](RenderTexture.html).sRGB




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







                    public bool sRGB;






### Description



Does this render texture use sRGB read/write conversions? (Read Only).





When [Linear color space](../Manual/LinearLighting.html) is used, render textures can perform Linear to sRGB conversions when rendering into them and sRGB to Linear conversions when sampling them in the shaders.

The value of this property is based on the "readWrite" parameter of the [RenderTexture](RenderTexture.html) constructor.

Additional resources: [RenderTextureReadWrite](RenderTextureReadWrite.html) for more details.


            
