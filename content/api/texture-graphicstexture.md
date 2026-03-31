This version of Unity is unsupported.



# [Texture](Texture.html).graphicsTexture




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












                    public [Rendering.GraphicsTexture](Rendering.GraphicsTexture.html) graphicsTexture;






### Description



[GraphicsTexture](Rendering.GraphicsTexture.html) that represents the texture resource uploaded to the graphics device.





The current GraphicsTexture object corresponding to the texture.

For [RenderTextures](RenderTexture.html), this returns the `GraphicsTexture` object that represents the color buffer. If the `RenderTexture` is depth-only and has a [GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) of `None`, it returns the `GraphicsTexture` object representing the depth buffer.

Note: When you use the Unity APIs to reinitialize the properties of a Texture object, or when a different mipmap level is streamed in, the underlying GraphicsTexture object changes. Instead of caching the value, retrieve the new GraphicsTexture by calling `Texture.graphicsTexture` again.


            
