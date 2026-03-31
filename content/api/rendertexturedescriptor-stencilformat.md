This version of Unity is unsupported.



# [RenderTextureDescriptor](RenderTextureDescriptor.html).stencilFormat




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












                    public [Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) stencilFormat;






### Description



The format of the stencil data that you can encapsulate within a RenderTexture.

Specifying this property creates a stencil element for the RenderTexture and sets its format.
This allows for stencil data to be bound as a Texture to all shader types for the platforms that support it.
This property does not specify the format of the stencil buffer, which is constrained by the depth buffer format specified in [RenderTexture.depth](RenderTexture-depth.html).

Currently, most platforms only support `R8_UInt` (DirectX11, DirectX12), while PS4 also supports `R8_UNorm`.





Additional resources: [GraphicsFormat](Experimental.Rendering.GraphicsFormat.html), [RenderTexture.depth](RenderTexture-depth.html).


            
