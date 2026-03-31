This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).WorldPointToSizedRect




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

public static [Rect](Rect.html) WorldPointToSizedRect([Vector3](Vector3.html) position,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The world-space position to use. |
| content | The content to make room for. |
| style | The style to use. The style's alignment. |





### Description



Calculate a rectangle to display a 2D GUI element near a projected point in 3D space.





This function is useful when 3D objects need labels or other 2D controls that follow them around in 3D space as the camera moves.


            
