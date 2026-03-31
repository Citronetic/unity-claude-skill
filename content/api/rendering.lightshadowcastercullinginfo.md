This version of Unity is unsupported.



# LightShadowCasterCullingInfo





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



This structure contains the information to perform shadow caster culling for a given light.





Additional resources: [ShadowCastersCullingInfos](Rendering.ShadowCastersCullingInfos.html).





### Properties



| Property | Description |
| --- | --- |
| projectionType | The projection type of the shadow-casting light to be rendered. For example, directional light shadow-maps will have orthographic projection. Spot lights will usually have perspective projection, but you might want to implement orthographically-projected box-shaped spot lights in your scriptable renderer pipeline. |
| splitExclusionMask | A bitmask that represents the shadow splits in LightShadowCasterCullingInfo.splitRange Unity discards. |
| splitRange | The range of ShadowSplitData to use for this light. |


            
