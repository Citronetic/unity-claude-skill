This version of Unity is unsupported.



# [GraphicsSettings](Rendering.GraphicsSettings.html).cameraRelativeShadowCulling




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












                    public static bool cameraRelativeShadowCulling;






### Description



Enable or disable using the camera position as the reference point for culling shadows.





When Unity culls distant shadows, a shadow that's far away from the world space origin can flicker. The flickering happens because GameObject coordinates become increasingly less precise as they get further away, so the shadow moves in and out of culling range.

                If you set `cameraRelativeShadowCulling` to `true`, Unity uses the camera position as the reference point for culling shadows instead of the world space origin. This can reduce flickering.

                If a shadow is closer to the world space origin than the camera position, setting `cameraRelativeShadowCulling` to `true` may introduce flickering or make it worse. You can use the following approaches instead:



          - Reduce [Camera.farClipPlane](Camera-farClipPlane.html) to avoid the distance of shadows becoming too large for precise calculations.

          - Make everything in your scene smaller, to reduce distances across your whole scene.





Additional resources: [GraphicsSettings.cameraRelativeLightCulling](Rendering.GraphicsSettings-cameraRelativeLightCulling.html)


            
