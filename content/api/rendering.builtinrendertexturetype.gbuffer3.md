This version of Unity is unsupported.



# [BuiltinRenderTextureType](Rendering.BuiltinRenderTextureType.html).GBuffer3




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



Deferred shading G-buffer #3 (typically emission/lighting).





Built-in deferred shaders put ambient & emission into RGB channels of this texture. And then the lights are also added there during lighting pass. But your own custom shaders could be outputting anything there of course.

Note that GBuffer3 render texture is not created when the current camera is using HDR; instead emission/lighting is rendered directly into
a camera's target texture. You'll need to use [CameraTarget](Rendering.BuiltinRenderTextureType.CameraTarget.html) render texture type to handle the HDR camera case.

Additional resources: [CommandBuffer](Rendering.CommandBuffer.html).


            
