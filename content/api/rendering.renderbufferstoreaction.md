This version of Unity is unsupported.



# RenderBufferStoreAction





enumeration


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



This enum describes what should be done on the render target when the GPU is done rendering into it.





When the GPU is done rendering into a render target, this setting specifies the action that should be performed on the rendering results. Tile-based GPUs may get performance advantage if the store action is DontCare. For example, this setting can be useful if the depth buffer contents are not needed after rendering the frame.

Please note that not all platforms have load/store actions, so this setting might be ignored at runtime. Generally mobile-oriented graphics APIs (OpenGL ES, Metal) take advantage of these settings.

If you use `RenderBufferLoadAction.DontCare`, rendering might fail or produce artefacts because undefined pixels in the [depth texture](../Manual/SL-CameraDepthTexture.html) cause depth testing to fail. You can use [LoadStoreActionDebugModeSettings](Rendering.LoadStoreActionDebugModeSettings.html) to highlight undefined pixels.





### Properties



| Property | Description |
| --- | --- |
| Store | The RenderBuffer contents need to be stored to RAM. If the surface has MSAA enabled, this stores the non-resolved surface. |
| Resolve | Resolve the MSAA surface. |
| StoreAndResolve | Resolve the MSAA surface, but also store the multisampled version. |
| DontCare | The contents of the RenderBuffer are not needed and can be discarded. Tile-based GPUs will skip writing out the surface contents altogether, providing performance boost. |


            
