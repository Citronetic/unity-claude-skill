This version of Unity is unsupported.



# [RuntimePanelUtils](UIElements.RuntimePanelUtils.html).CameraTransformWorldToPanel




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

public static [Vector2](Vector2.html) CameraTransformWorldToPanel([UIElements.IPanel](UIElements.IPanel.html) panel,
[Vector3](Vector3.html) worldPosition,
[Camera](Camera.html) camera);






### Parameters



| Parameter | Description |
| --- | --- |
| panel | The local coordinates reference panel. |
| worldPosition | The world position to transform. |
| camera | The Camera used for internal WorldToScreen transformation. |





### Returns



**Vector2**
        A position in panel coordinates that corresponds to the provided world position.





### Description



Transforms a world absolute position to its equivalent local coordinate on given panel,
 using provided camera for internal WorldToScreen transformation.


            
