This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).PixelsToPoints




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



Convert from pixel space to point space.





Use this to convert values from custom content for use in GUI. For instance, you might be rendering a camera to a render texture, and then drawing GUI on top of that. Screen positions from the camera will be in pixel space, and need to be converted to points before being used for your UI.

Additional resources: [PointsToPixels](EditorGUIUtility.PointsToPixels.html), [pixelsPerPoint](EditorGUIUtility-pixelsPerPoint.html).




---








## Declaration

public static [Vector2](Vector2.html) PixelsToPoints([Vector2](Vector2.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| position | A GUI position in pixel space. |





### Returns



**Vector2**
        A vector representing the same position in point space.





### Description



Convert a position from pixel to point space.




---








## Declaration

public static [Rect](Rect.html) PixelsToPoints([Rect](Rect.html) rect);






### Parameters



| Parameter | Description |
| --- | --- |
| rect | A GUI rect measured in pixels. |





### Returns



**Rect**
        A rect representing the same area in points.





### Description



Convert a Rect from pixel space to point space.


            
