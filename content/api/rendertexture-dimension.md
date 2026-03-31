This version of Unity is unsupported.



# [RenderTexture](RenderTexture.html).dimension




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







                    public [Rendering.TextureDimension](Rendering.TextureDimension.html) dimension;






### Description



Dimensionality (type) of the render texture.





By default render textures are "2D" type, but it is also possible to have
Cubemap or 3D render textures by changing dimension before they are created.

[Cubemap](Cubemap.html) render textures are most often used for dynamic cubemap reflections, see [Camera.RenderToCubemap](Camera.RenderToCubemap.html).
A cubemap render texture must have the same [width](RenderTexture-width.html) and [height](RenderTexture-height.html), and must be power of two size.

3D (volumetric) render textures currently only work on compute shader capable platforms (like [UsingDX11GL3Features](../Manual/UsingDX11GL3Features.html)). You can render into them using "random access writes" from a pixel shader or a compute shader. Use [volumeDepth](RenderTexture-volumeDepth.html) to set 3D depth, and [enableRandomWrite](RenderTexture-enableRandomWrite.html) to enable arbitrary writes into it.

Additional resources: [TextureDimension](Rendering.TextureDimension.html).


            
