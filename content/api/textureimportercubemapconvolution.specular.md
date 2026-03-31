This version of Unity is unsupported.



# [TextureImporterCubemapConvolution](TextureImporterCubemapConvolution.html).Specular




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



















### Description



Specular convolution (aka Prefiltered Environment Map).





Each pixel of this [Cubemap](Cubemap.html) texture is replaced with the integral of incident illumination towards corresponding direction weighted with the Phong lobe. Each mipmap is convolved with varying Phong exponent - high resolution mipmaps represent glossy reflection while low resolution mips are very blurry and useful for very rough specular reflection.

Can be used to reflect light on glossy and rough objects by sampling with the reflection vector.

Additional resources: [TextureImporterSettings.cubemapConvolution](TextureImporterSettings-cubemapConvolution.html).


            
