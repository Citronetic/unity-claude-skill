This version of Unity is unsupported.



# CameraEvent





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



Defines a place in camera's rendering to attach [CommandBuffer](Rendering.CommandBuffer.html) objects to.





Unity's rendering loop can be extended by adding so called "command buffers" at various points in camera rendering. For example, you could add some custom geometry to be drawn right after the skybox is drawn.

Additional resources: [CommandBuffer](Rendering.CommandBuffer.html), [LightEvent](Rendering.LightEvent.html), [command buffers overview](../Manual/GraphicsCommandBuffers.html).





### Properties



| Property | Description |
| --- | --- |
| BeforeDepthTexture | Before camera's depth texture is generated. |
| AfterDepthTexture | After camera's depth texture is generated. |
| BeforeDepthNormalsTexture | Before camera's depth+normals texture is generated. |
| AfterDepthNormalsTexture | After camera's depth+normals texture is generated. |
| BeforeGBuffer | Before deferred rendering G-buffer is rendered. |
| AfterGBuffer | After deferred rendering G-buffer is rendered. |
| BeforeLighting | Before lighting pass in deferred rendering. |
| AfterLighting | After lighting pass in deferred rendering. |
| BeforeFinalPass | Before final geometry pass in deferred lighting. |
| AfterFinalPass | After final geometry pass in deferred lighting. |
| BeforeForwardOpaque | Before opaque objects in forward rendering. |
| AfterForwardOpaque | After opaque objects in forward rendering. |
| BeforeImageEffectsOpaque | Before image effects that happen between opaque & transparent objects. |
| AfterImageEffectsOpaque | After image effects that happen between opaque & transparent objects. |
| BeforeSkybox | Before skybox is drawn. |
| AfterSkybox | After skybox is drawn. |
| BeforeForwardAlpha | Before transparent objects in forward rendering. |
| AfterForwardAlpha | After transparent objects in forward rendering. |
| BeforeImageEffects | Before image effects. |
| AfterImageEffects | After image effects. |
| AfterEverything | After camera has done rendering everything. |
| BeforeReflections | Before reflections pass in deferred rendering. |
| AfterReflections | After reflections pass in deferred rendering. |
| BeforeHaloAndLensFlares | Before halo and lens flares. |
| AfterHaloAndLensFlares | After halo and lens flares. |


            
