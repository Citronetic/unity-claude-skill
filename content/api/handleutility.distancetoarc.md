This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).DistanceToArc




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

public static float DistanceToArc([Vector3](Vector3.html) center,
[Vector3](Vector3.html) normal,
[Vector3](Vector3.html) from,
float angle,
float radius);






### Description



Returns the distance in pixels from the mouse pointer to a 3D section of a disc.





Calculates the screen space distance from the mouse pointer to the disc section at given world
space `position` with the given `radius` and `normal`. The disc section is defined by
`from` vector and the `angle` in degrees.

Uses the current camera to determine the distance.

Additional resources: [DistanceToDisc](HandleUtility.DistanceToDisc.html), [DistanceToCircle](HandleUtility.DistanceToCircle.html).


            
