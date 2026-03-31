This version of Unity is unsupported.



# PerObjectData





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



What kind of per-object data to setup during rendering.





At minimum, object transformation matrices are set up per-object, but extra data (e.g. lightmaps, light probes etc.) can be set up by combining PerObjectData flags.

Additional resources: [DrawingSettings](Rendering.DrawingSettings.html), ScriptableRenderContext.DrawRenderers.





### Properties



| Property | Description |
| --- | --- |
| None | Do not setup any particular per-object data besides the transformation matrix. |
| LightProbe | Setup per-object light probe SH data. |
| ReflectionProbes | Setup per-object reflection probe data. |
| LightProbeProxyVolume | Setup per-object light probe proxy volume data. |
| Lightmaps | Setup per-object lightmaps. |
| LightData | Setup per-object light data. |
| MotionVectors | Setup per-object motion vectors. |
| LightIndices | Setup per-object light indices. |
| ReflectionProbeData | Setup per-object reflection probe index offset and count. |
| OcclusionProbe | Setup per-object occlusion probe data. |
| OcclusionProbeProxyVolume | Setup per-object occlusion probe proxy volume data (occlusion in alpha channels). |
| ShadowMask | Setup per-object shadowmask. |


            
