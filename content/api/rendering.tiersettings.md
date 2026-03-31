This version of Unity is unsupported.



# TierSettings





struct in
          UnityEditor.Rendering


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



A struct that represents graphics settings for a given build target and [graphics tier](../Manual/graphics-tiers.html).





**Note:** Graphics tiers and tier settings are only supported in the Built-in Render Pipeline.

You can configure these settings in the Unity Editor, in the [Graphics Settings](../Manual/class-GraphicsSettings.html) window.

Additional resources: [Graphics tiers](../Manual/graphics-tiers.html), [GraphicsTier](Rendering.GraphicsTier.html), [Graphics.activeTier](Graphics-activeTier.html), [EditorGraphicsSettings.GetTierSettings](Rendering.EditorGraphicsSettings.GetTierSettings.html), [EditorGraphicsSettings.SetTierSettings](Rendering.EditorGraphicsSettings.SetTierSettings.html).





### Properties



| Property | Description |
| --- | --- |
| cascadedShadowMaps | Whether to use cascaded shadow maps. |
| detailNormalMap | Whether to sample a Detail Normal Map, if assigned. |
| enableLPPV | Whether Light Probe Proxy Volume should be used. |
| hdr | Whether to enable High Dynamic Range (HDR) rendering. |
| hdrMode | The format to use for the HDR buffer. |
| prefer32BitShadowMaps | Whether Unity should try to use 32-bit shadow maps, where possible. |
| realtimeGICPUUsage | The RealtimeGICPUUsage to use. |
| reflectionProbeBlending | Whether to enable Reflection Probes Blending. |
| reflectionProbeBoxProjection | Whether to use Reflection Probes Box Projection. |
| renderingPath | The rendering path to use. |
| semitransparentShadows | Whether to enable Semitransparent Shadows. |
| standardShaderQuality | The Standard Shader Quality. |


            
