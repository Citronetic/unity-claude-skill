This version of Unity is unsupported.



# [RectTransformUtility](RectTransformUtility.html).ScreenPointToRay




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

public static [Ray](Ray.html) ScreenPointToRay([Camera](Camera.html) cam,
[Vector2](Vector2.html) screenPos);






### Parameters



| Parameter | Description |
| --- | --- |
| cam | The camera from which the ray originates. (Optional) |
| screenPos | The screen point. |





### Returns



**Ray**
        The ray going from camera through the screen point if the camera is given, or from the screen point going forward if no camera is given.





### Description



Transforms a screen space position into a ray.


            
