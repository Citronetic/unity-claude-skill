This version of Unity is unsupported.



# RenderTargetIdentifier





struct in
          UnityEngine.Rendering



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



Identifies a [RenderTexture](RenderTexture.html) for a [CommandBuffer](Rendering.CommandBuffer.html).





Render textures can be identified in a number of ways, for example a [RenderTexture](RenderTexture.html) object, or one of built-in render textures ([BuiltinRenderTextureType](Rendering.BuiltinRenderTextureType.html)), or a temporary render texture with a name (that was created using [CommandBuffer.GetTemporaryRT](Rendering.CommandBuffer.GetTemporaryRT.html)).

This struct serves as a way to identify them, and has implicit conversion operators so that in most cases you can save some typing.

Additional resources: [CommandBuffer](Rendering.CommandBuffer.html).





### Static Properties



| Property | Description |
| --- | --- |
| AllDepthSlices | All depth-slices of the render resource are bound for rendering. For textures which are neither array nor 3D, the default slice is bound. |
| Invalid | Invalid RenderTargetIdentifier. |





### Constructors



| Constructor | Description |
| --- | --- |
| RenderTargetIdentifier | Creates a render target identifier. |


            
