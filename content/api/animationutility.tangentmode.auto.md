This version of Unity is unsupported.



# [AnimationUtility.TangentMode](AnimationUtility.TangentMode.html).Auto




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



The tangents are automatically set to make the curve go smoothly through the key.





This was the standard tangent mode prior to Unity 5.5, however way the curve was calculated would sometimes cause the value to overshoot before reaching the proper value.

In Unity 5.5 and onwards, the tangent calculations have been improved to avoid overshoots, but this legacy mode remains in the engine to allow for backward compatibility.

In general you should use [AnimationUtility.TangentMode.ClampedAuto](AnimationUtility.TangentMode.ClampedAuto.html) unless you are specifically dealing with legacy assets which relied on the old behavior.


            
