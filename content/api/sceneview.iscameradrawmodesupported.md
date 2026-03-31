This version of Unity is unsupported.



# [SceneView](SceneView.html).IsCameraDrawModeSupported




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

public bool IsCameraDrawModeSupported([SceneView.CameraMode](SceneView.CameraMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| mode | A CameraMode to check. |





### Returns



**bool**
        Returns true if the current rendering configuration supports the [CameraMode](SceneView.CameraMode.html).





### Description



Checks if the current rendering configuration supports the [CameraMode](SceneView.CameraMode.html). The check includes custom validators.





A rendering configuration might not support a [CameraMode](SceneView.CameraMode.html) if the mode has a feature that the current render pipeline does not support. For example, if the render pipeline does not support Enlighten Realtime Global Illumination, and [CameraMode](SceneView.CameraMode.html) has a property [DrawCameraMode.RealtimeAlbedo](DrawCameraMode.RealtimeAlbedo.html), this method returns false.

To register support for a draw mode feature in a custom render pipeline, use [SceneView.onValidateCameraMode](SceneView-onValidateCameraMode.html) to add a draw mode validation callback.


            
