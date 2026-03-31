This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).PlaceObjectDelegate




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

public delegate bool PlaceObjectDelegate([Vector2](Vector2.html) guiPosition,
out [Vector3](Vector3.html) position,
out [Vector3](Vector3.html) normal);






### Parameters



| Parameter | Description |
| --- | --- |
| guiPosition | The GUI position in the SceneView. You can pass Event.current.mousePosition to this parameter in most cases. |
| position | Returns the nearest intersected point to a ray cast from the guiPosition into the scene. |
| normal | Returns the normal of the nearest intersected point to a ray cast from the mouse position into the scene. |





### Description



This is the method definition for [placeObjectCustomPasses](HandleUtility-placeObjectCustomPasses.html).


            
