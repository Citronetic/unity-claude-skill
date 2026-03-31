This version of Unity is unsupported.



# [Vector2](Vector2.html).Reflect




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

public static [Vector2](Vector2.html) Reflect([Vector2](Vector2.html) inDirection,
[Vector2](Vector2.html) inNormal);






### Parameters



| Parameter | Description |
| --- | --- |
| inDirection | The direction vector towards the surface. |
| inNormal | The normal vector that defines the surface. |





### Description



Reflects a vector off the surface defined by a normal.





This method calculates a reflected vector using the following formula: v = inDirection - 2 * inNormal * dot(inDirection inNormal). The `inNormal` vector defines a surface. A surface's normal is the vector that is perpendicular to
its surface. The `inDirection` vector is treated as a directional arrow coming into the surface.
The returned value is a vector of equal magnitude to `inDirection` but with its direction reflected.


            
