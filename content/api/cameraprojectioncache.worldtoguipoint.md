This version of Unity is unsupported.



# [CameraProjectionCache](CameraProjectionCache.html).WorldToGUIPoint




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

public [Vector2](Vector2.html) WorldToGUIPoint([Vector3](Vector3.html) worldPoint);






### Parameters



| Parameter | Description |
| --- | --- |
| worldPoint | A point in world space. |





### Returns



**Vector2**
        A point in GUI space.





### Description



Converts a world space point to a 2D GUI position.





Uses the cached camera matrices and viewport to calculate the projection.

See also [HandleUtility.WorldToGUIPoint](HandleUtility.WorldToGUIPoint.html).


            
