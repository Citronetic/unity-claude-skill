This version of Unity is unsupported.



# [RuntimePanelUtils](UIElements.RuntimePanelUtils.html).CameraTransformWorldToPanelRect




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

public static [Rect](Rect.html) CameraTransformWorldToPanelRect([UIElements.IPanel](UIElements.IPanel.html) panel,
[Vector3](Vector3.html) worldPosition,
[Vector2](Vector2.html) worldSize,
[Camera](Camera.html) camera);






### Parameters



| Parameter | Description |
| --- | --- |
| panel | The local coordinates reference panel. |
| worldPosition | The world position to transform. |
| worldSize | The world size to transform. The object in the panel will appear to have
 that size when compared to other 3D objects at neighboring positions. |
| camera | The Camera used for internal WorldToScreen transformation. |





### Returns



**Rect**
        A (position, size) Rect in panel coordinates that corresponds to the provided world position
 and size.





### Description



Transforms a world position and size (in world units) to their equivalent local position and size
 on given panel, using provided camera for internal WorldToScreen transformation.


            
