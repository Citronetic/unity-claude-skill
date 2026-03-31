This version of Unity is unsupported.



# [PanelSettings](UIElements.PanelSettings.html).SetScreenToPanelSpaceFunction3D




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















## Declaration

public void SetScreenToPanelSpaceFunction3D(Func<Vector2,Vector3> screenToPanelSpaceFunction);






### Parameters



| Parameter | Description |
| --- | --- |
| screenToPanelSpaceFunction | The translation function. Set to null to revert to the default behavior. |





### Description



Sets the function that handles the transformation from screen space to panel space. For overlay panels,
 this function returns the input value.





If the panel's targetTexture is applied to 3D objects, use a function that raycasts
 against MeshColliders in the Scene. The function can first check whether the GameObject that the ray hits
 has a MeshRenderer with a shader that uses this panel's target texture. It can then return the transformed
 `RaycastHit.textureCoord` in the texture's pixel space. Return a coordinate outside the panel to
 skip incoming pointer events if the ray doesn't hit a valid target or location.

 A non-zero z value should be returned when the element at the given screen coordinate contains
 3-D transformations that make it overflow forward or backward out of the panel's surface.
 This z value is used by pointer events when converting between panel position and local position.


            
