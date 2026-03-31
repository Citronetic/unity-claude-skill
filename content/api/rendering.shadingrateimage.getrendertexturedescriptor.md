This version of Unity is unsupported.



# [ShadingRateImage](Rendering.ShadingRateImage.html).GetRenderTextureDescriptor




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

public static [RenderTextureDescriptor](RenderTextureDescriptor.html) GetRenderTextureDescriptor(int width,
int height,
int volumeDepth,
[Rendering.TextureDimension](Rendering.TextureDimension.html) textureDimension);






### Parameters



| Parameter | Description |
| --- | --- |
| width | Width of shading rate image |
| height | Height of shading rate image |
| volumeDepth | The number of slices of the shading rate image. The default value is 1. |
| textureDimension | Dimensionality of the resulting shading rate image. The default value is Rendering.TextureDimension.2D |





### Returns



**RenderTextureDescriptor**
        The render texture descriptor compatible for shading rate image.





### Description



Utility function to create a RenderTextureDescriptor compatible with a shading rate image. This function does not perform the conversion from pixel to tile.


            
