This version of Unity is unsupported.



# LightEvent





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



Defines a place in light's rendering to attach [CommandBuffer](Rendering.CommandBuffer.html) objects to.





Unity's rendering loop can be extended by adding so called "command buffers" at various points in light rendering; mostly related to shadows. For example, you could do custom processing of the shadow map after it is rendered.

Additional resources: [CommandBuffer](Rendering.CommandBuffer.html), [CameraEvent](Rendering.CameraEvent.html), [command buffers overview](../Manual/GraphicsCommandBuffers.html).





### Properties



| Property | Description |
| --- | --- |
| BeforeShadowMap | Before shadowmap is rendered. |
| AfterShadowMap | After shadowmap is rendered. |
| BeforeScreenspaceMask | Before directional light screenspace shadow mask is computed. |
| AfterScreenspaceMask | After directional light screenspace shadow mask is computed. |
| BeforeShadowMapPass | Before shadowmap pass is rendered. |
| AfterShadowMapPass | After shadowmap pass is rendered. |


            
