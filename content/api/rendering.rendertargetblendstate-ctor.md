This version of Unity is unsupported.



# RenderTargetBlendState Constructor




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

public RenderTargetBlendState([Rendering.ColorWriteMask](Rendering.ColorWriteMask.html) writeMask,
[Rendering.BlendMode](Rendering.BlendMode.html) sourceColorBlendMode,
[Rendering.BlendMode](Rendering.BlendMode.html) destinationColorBlendMode,
[Rendering.BlendMode](Rendering.BlendMode.html) sourceAlphaBlendMode,
[Rendering.BlendMode](Rendering.BlendMode.html) destinationAlphaBlendMode,
[Rendering.BlendOp](Rendering.BlendOp.html) colorBlendOperation,
[Rendering.BlendOp](Rendering.BlendOp.html) alphaBlendOperation);






### Parameters



| Parameter | Description |
| --- | --- |
| writeMask | Specifies which color components will get written into the target framebuffer. |
| sourceColorBlendMode | Blend factor used for the color (RGB) channel of the source. |
| destinationColorBlendMode | Blend factor used for the color (RGB) channel of the destination. |
| sourceAlphaBlendMode | Blend factor used for the alpha (A) channel of the source. |
| destinationAlphaBlendMode | Blend factor used for the alpha (A) channel of the destination. |
| colorBlendOperation | Operation used for blending the color (RGB) channel. |
| alphaBlendOperation | Operation used for blending the alpha (A) channel. |





### Description



Creates a new blend state with the given values.


            
