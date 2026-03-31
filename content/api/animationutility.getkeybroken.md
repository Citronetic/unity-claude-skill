This version of Unity is unsupported.



# [AnimationUtility](AnimationUtility.html).GetKeyBroken




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

public static bool GetKeyBroken([AnimationCurve](AnimationCurve.html) curve,
int index);






### Parameters



| Parameter | Description |
| --- | --- |
| curve | Curve to query. |
| index | Keyframe index. |





### Returns



**bool**
        Broken flag at specified index.





### Description



Retrieves the broken tangent flag for a specfic keyframe.





The Curve Editor uses the keyframe broken flag to automatically generate tangents.

Additional resources: [AnimationUtility.GetKeyLeftTangentMode](AnimationUtility.GetKeyLeftTangentMode.html), [AnimationUtility.GetKeyRightTangentMode](AnimationUtility.GetKeyRightTangentMode.html).


            
