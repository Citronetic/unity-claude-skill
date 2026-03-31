This version of Unity is unsupported.



# ShadowMapPass





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



Allows precise control over which shadow map passes to execute [CommandBuffer](Rendering.CommandBuffer.html) objects attached using [Light.AddCommandBuffer](Light.AddCommandBuffer.html).





These flags only take effect when used with Rendering.LightEvent/BeforeShadowMapPass or Rendering.LightEvent/AfterShadowMapPass.





### Properties



| Property | Description |
| --- | --- |
| PointlightPositiveX | +X point light shadow cubemap face. |
| PointlightNegativeX | -X point light shadow cubemap face. |
| PointlightPositiveY | +Y point light shadow cubemap face. |
| PointlightNegativeY | -Y point light shadow cubemap face. |
| PointlightPositiveZ | +Z point light shadow cubemap face. |
| PointlightNegativeZ | -Z point light shadow cubemap face. |
| DirectionalCascade0 | First directional shadow map cascade. |
| DirectionalCascade1 | Second directional shadow map cascade. |
| DirectionalCascade2 | Third directional shadow map cascade. |
| DirectionalCascade3 | Fourth directional shadow map cascade. |
| Spotlight | Spot light shadow pass. |
| AreaLight | Area light shadow pass. |
| Pointlight | All point light shadow passes. |
| Directional | All directional shadow map passes. |
| All | All shadow map passes. |


            
