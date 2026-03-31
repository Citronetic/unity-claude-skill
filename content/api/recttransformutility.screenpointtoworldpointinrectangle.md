This version of Unity is unsupported.



# [RectTransformUtility](RectTransformUtility.html).ScreenPointToWorldPointInRectangle




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

public static bool ScreenPointToWorldPointInRectangle([RectTransform](RectTransform.html) rect,
[Vector2](Vector2.html) screenPoint,
[Camera](Camera.html) cam,
out [Vector3](Vector3.html) worldPoint);






### Parameters



| Parameter | Description |
| --- | --- |
| rect | The RectTransform to find a point inside. |
| screenPoint | Screen space position. |
| cam | The camera associated with the screen space position. |
| worldPoint | Point in world space. |





### Returns



**bool**
        Returns true if the plane of the RectTransform is hit, regardless of whether the point is inside the rectangle.





### Description



Transform a screen space point to a position in world space that is on the plane of the given RectTransform.





The cam parameter should be the camera associated with the screen point. For a RectTransform in a Canvas set to Screen Space - Overlay mode, the cam parameter should be null.

When ScreenPointToWorldPointInRectangle is used from within an event handler that provides a PointerEventData object, the correct camera can be obtained by using PointerEventData.enterEventData (for hover functionality) or PointerEventData.pressEventCamera (for click functionality). This will automatically use the correct camera (or null) for the given event.


            
