This version of Unity is unsupported.



# VisibleReflectionProbe





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



Holds data of a visible reflection reflectionProbe.





After [ScriptableRenderContext.Cull](Rendering.ScriptableRenderContext.Cull.html) is done, [CullingResults.visibleReflectionProbes](Rendering.CullingResults-visibleReflectionProbes.html) will contain an array of reflection reflectionProbes that are visible. The visible reflection reflectionProbe structure contains packed
information for most commonly used [ReflectionProbe](ReflectionProbe.html) variables, and a VisibleReflectionProbe.probe reference to the component itself.

Additional resources: [CullingResults.visibleReflectionProbes](Rendering.CullingResults-visibleReflectionProbes.html), [ReflectionProbe](ReflectionProbe.html).





### Properties



| Property | Description |
| --- | --- |
| blendDistance | Probe blending distance. |
| bounds | The probe's world space axis-aligned bounding box in which the probe can contribute to reflections. |
| center | The center of the probe's bounding box in which the probe can contribute to reflections. The center is relative to the position of the probe. |
| hdrData | Shader data for probe HDR texture decoding. |
| importance | Probe importance. |
| isBoxProjection | Should probe use box projection. |
| localToWorldMatrix | Probe transformation matrix. |
| reflectionProbe | Accessor to ReflectionProbe component. |
| texture | Probe texture. |


            
