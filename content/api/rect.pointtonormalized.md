This version of Unity is unsupported.



# [Rect](Rect.html).PointToNormalized




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

public static [Vector2](Vector2.html) PointToNormalized([Rect](Rect.html) rectangle,
[Vector2](Vector2.html) point);






### Parameters



| Parameter | Description |
| --- | --- |
| rectangle | Rectangle to get normalized coordinates inside. |
| point | A point inside the rectangle to get normalized coordinates for. |





### Description



Returns the normalized coordinates corresponding to the point.





The returned Vector2 is in the range 0 to 1 with values more 1 or less than zero clamped.


            
