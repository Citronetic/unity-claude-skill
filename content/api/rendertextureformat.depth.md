This version of Unity is unsupported.



# [RenderTextureFormat](RenderTextureFormat.html).Depth




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



A depth render texture format.





Depth format is used to render high precision "depth" value into a render texture. Which format
is actually used depends on platform support and on the number of depth bits you request through the constructor.

You can also set an exact depth-stencil format with [RenderTexture.depthStencilFormat](RenderTexture-depthStencilFormat.html) or a
[RenderTexture](RenderTexture.html) constructor that takes [GraphicsFormat](Experimental.Rendering.GraphicsFormat.html). Use [SystemInfo.IsFormatSupported](SystemInfo.IsFormatSupported.html) to check your platform supports this.

When writing
shaders that use or render into a depth texture, care must be taken to ensure that they work both
on OpenGL and on Direct3D, see [depth textures documentation](../Manual/SL-CameraDepthTexture.html).

Note that not all graphics cards support depth textures. Use [SystemInfo.SupportsRenderTextureFormat](SystemInfo.SupportsRenderTextureFormat.html)
to check for support.

Additional resources: [RenderTexture](RenderTexture.html) class, [SystemInfo.SupportsRenderTextureFormat](SystemInfo.SupportsRenderTextureFormat.html).


            
