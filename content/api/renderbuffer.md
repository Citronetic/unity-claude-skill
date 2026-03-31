This version of Unity is unsupported.



# RenderBuffer





struct in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Color or depth buffer part of a [RenderTexture](RenderTexture.html).





A single [RenderTexture](RenderTexture.html) object represents both color and depth buffers,
but many complex rendering algorithms require using the same depth buffer
with multiple color buffers or vice versa.

This class represents either a color or a depth buffer part of a RenderTexture.

Additional resources: [RenderTexture.colorBuffer](RenderTexture-colorBuffer.html), [RenderTexture.depthBuffer](RenderTexture-depthBuffer.html), [Graphics.activeColorBuffer](Graphics-activeColorBuffer.html),
[Graphics.activeDepthBuffer](Graphics-activeDepthBuffer.html), [Graphics.SetRenderTarget](Graphics.SetRenderTarget.html).





### Public Methods



| Method | Description |
| --- | --- |
| GetNativeRenderBufferPtr | Returns the native RenderBuffer: an opaque pointer to a Unity struct that you can use with Unity's low-level native plug-in interface. |


            
