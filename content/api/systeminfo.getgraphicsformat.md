This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).GetGraphicsFormat




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

public static [Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) GetGraphicsFormat([Experimental.Rendering.DefaultFormat](Experimental.Rendering.DefaultFormat.html) format);






### Parameters



| Parameter | Description |
| --- | --- |
| format | The DefaultFormat format to look up. |





### Description



Returns the platform-specific GraphicsFormat that is associated with the DefaultFormat.





You can create a RenderTexture with [DefaultFormat.DepthStencil](Experimental.Rendering.DefaultFormat.DepthStencil.html) by setting the resulting [GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) to [RenderTexture.depthStencilFormat](RenderTexture-depthStencilFormat.html), [RenderTextureDescriptor.depthStencilFormat](RenderTextureDescriptor-depthStencilFormat.html) or by using one of the constructors.

To create a [RenderTexture](RenderTexture.html) that you can use as a shadow map, set the [ShadowSamplingMode](Rendering.ShadowSamplingMode.html) using [RenderTextureDescriptor.shadowSamplingMode](RenderTextureDescriptor-shadowSamplingMode.html). If you only set the depth or stencil format and not the [ShadowSamplingMode](Rendering.ShadowSamplingMode.html) then you will not have a valid shadow map.

Additional resources: [GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) enum and [DefaultFormat](Experimental.Rendering.DefaultFormat.html).


            
