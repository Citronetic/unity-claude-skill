This version of Unity is unsupported.



# VisibleLight





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



Holds data of a visible light.





After [ScriptableRenderContext.Cull](Rendering.ScriptableRenderContext.Cull.html) is done, [CullingResults.visibleLights](Rendering.CullingResults-visibleLights.html) will contain an array of lights that are visible. The visible light structure contains packed
information for most commonly used [Light](Light.html) variables, and a [VisibleLight.light](Rendering.VisibleLight-light.html) reference to the Light component itself.

Additional resources: [CullingResults.visibleLights](Rendering.CullingResults-visibleLights.html), [Light](Light.html).





### Properties



| Property | Description |
| --- | --- |
| finalColor | Light color multiplied by intensity. |
| forcedVisible | Has the light been forced to be visibile. |
| intersectsFarPlane | Light intersects far clipping plane. |
| intersectsNearPlane | Light intersects near clipping plane. |
| light | Accessor to Light component. |
| lightType | Light type. |
| localToWorldMatrix | Light transformation matrix. |
| range | Light range. |
| screenRect | Light's influence rectangle on screen. |
| spotAngle | Spot light angle. |


            
