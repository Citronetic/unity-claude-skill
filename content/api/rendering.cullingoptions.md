This version of Unity is unsupported.



# CullingOptions





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



Flags used by [ScriptableCullingParameters.cullingOptions](Rendering.ScriptableCullingParameters-cullingOptions.html) to configure a culling operation.





Unity sets some of the [CullingOptions](Rendering.CullingOptions.html) flags with default values, and others depending on the properties of the [Camera](Camera.html) from which you obtained the [ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html) struct. You can override these values before performing the culling operation.

Additional resources: [ScriptableCullingParameters.cullingOptions](Rendering.ScriptableCullingParameters-cullingOptions.html), [ScriptableRenderContext.Cull](Rendering.ScriptableRenderContext.Cull.html), [Camera](Camera.html).





### Properties



| Property | Description |
| --- | --- |
| None | Unset all CullingOptions flags. |
| ForceEvenIfCameraIsNotActive | When this flag is set, Unity performs the culling operation even if the Camera is not active. |
| OcclusionCull | When this flag is set, Unity performs occlusion culling as part of the culling operation. |
| NeedsLighting | When this flag is set, Unity culls Lights as part of the culling operation. |
| NeedsReflectionProbes | When this flag is set, Unity culls Reflection Probes as part of the culling operation. |
| Stereo | When this flag is set, Unity culls both eyes together for stereo rendering. |
| DisablePerObjectCulling | When this flag is set, Unity does not perform per-object culling. |
| ShadowCasters | When this flag is set, Unity culls shadow casters as part of the culling operation. |


            
