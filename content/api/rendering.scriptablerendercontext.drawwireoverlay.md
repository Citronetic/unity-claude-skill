This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).DrawWireOverlay




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

public void DrawWireOverlay([Camera](Camera.html) camera);






### Parameters



| Parameter | Description |
| --- | --- |
| camera | The Scene view Camera to draw the overlay for. |





### Description



Schedules the drawing of a wireframe overlay for a given Scene view Camera.





Note that `DrawWireOverlay` works only in the Unity Editor, when the [Camera.cameraType](Camera-cameraType.html) is set to [CameraType.SceneView](CameraType.SceneView.html), and the [SceneView.CameraMode.drawMode](SceneView.CameraMode-drawMode.html) is set to [DrawCameraMode.TexturedWire](DrawCameraMode.TexturedWire.html). If these conditions are not met, calling `DrawWireOverlay` has no effect.

To draw gizmos on top of the wireframe overlay in your Scene view, call `DrawWireOverlay` and then call [DrawGizmos](Rendering.ScriptableRenderContext.DrawGizmos.html).


            
