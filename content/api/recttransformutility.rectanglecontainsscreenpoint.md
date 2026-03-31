This version of Unity is unsupported.



# [RectTransformUtility](RectTransformUtility.html).RectangleContainsScreenPoint




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

public static bool RectangleContainsScreenPoint([RectTransform](RectTransform.html) rect,
[Vector2](Vector2.html) screenPoint);






### Parameters



| Parameter | Description |
| --- | --- |
| rect | The RectTransform to test with. |
| screenPoint | The screen point to test. |





### Returns



**bool**
        True if the point is inside the rectangle.





### Description



Does the RectTransform contain the screen point?




---








## Declaration

public static bool RectangleContainsScreenPoint([RectTransform](RectTransform.html) rect,
[Vector2](Vector2.html) screenPoint,
[Camera](Camera.html) cam);






### Parameters



| Parameter | Description |
| --- | --- |
| rect | The RectTransform to test with. |
| screenPoint | The screen point to test. |
| cam | The camera from which the test is performed from. (Optional) |





### Returns



**bool**
        True if the point is inside the rectangle.





### Description



Does the RectTransform contain the screen point as seen from the given camera?




---








### Parameters



| Parameter | Description |
| --- | --- |
| rect | The RectTransform to test with. |
| screenPoint | The screen point to test. |
| cam | The camera from which the test is performed from. (Optional) |
| offset | The offset to apply to the RectTransform. |





### Returns



**bool**
        True if the point is inside the rectangle.





### Description



Does the RectTransform, with the given offset, contain the screen point as seen from the given camera?


            
