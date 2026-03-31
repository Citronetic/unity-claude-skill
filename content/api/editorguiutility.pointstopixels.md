This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).PointsToPixels




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



Convert from point space to pixel space.





Use this for determining the resolution and positioning of custom GUI content, such as render textures.

Additional resources: [PixelsToPoints](EditorGUIUtility.PixelsToPoints.html), [pixelsPerPoint](EditorGUIUtility-pixelsPerPoint.html).




---








## Declaration

public static [Vector2](Vector2.html) PointsToPixels([Vector2](Vector2.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| position | A GUI rect measured in points. |





### Returns



**Vector2**
        A rect representing the same area in pixels.





### Description



Convert a Rect from point space to pixel space.




---








## Declaration

public static [Rect](Rect.html) PointsToPixels([Rect](Rect.html) rect);






### Parameters



| Parameter | Description |
| --- | --- |
| rect | A GUI position in point space. |





### Returns



**Rect**
        The same position in pixel space.





### Description



Converts a position from point to pixel space.


            
