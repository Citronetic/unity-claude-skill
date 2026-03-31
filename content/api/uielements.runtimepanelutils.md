This version of Unity is unsupported.



# RuntimePanelUtils





class in
          UnityEngine.UIElements



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



A collection of static methods that provide simple World, Screen, and Panel coordinate transformations.





### Static Methods



| Method | Description |
| --- | --- |
| CameraTransformWorldToPanel | Transforms a world absolute position to its equivalent local coordinate on given panel,
 using provided camera for internal WorldToScreen transformation. |
| CameraTransformWorldToPanelRect | Transforms a world position and size (in world units) to their equivalent local position and size
 on given panel, using provided camera for internal WorldToScreen transformation. |
| ResetDynamicAtlas | Resets the dynamic atlas of the panel. |
| ResetRenderer | Resets the renderer of the panel. Releases all meshes, rendering commands, and pools owned by the renderer. |
| ScreenToPanel | Transforms a screen absolute position to its equivalent local coordinate on given panel. |
| SetTextureDirty | Notifies the dynamic atlas of the panel that the content of the provided texture has changed. If the dynamic
 atlas contains the texture, it will update it. |


            
