This version of Unity is unsupported.



# [AnimationUtility](AnimationUtility.html).SetKeyLeftTangentMode




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

public static void SetKeyLeftTangentMode([AnimationCurve](AnimationCurve.html) curve,
int index,
[AnimationUtility.TangentMode](AnimationUtility.TangentMode.html) tangentMode);






### Parameters



| Parameter | Description |
| --- | --- |
| curve | The curve to modify. |
| index | Keyframe index. |
| tangentMode | Tangent mode. |





### Description



Change the specified keyframe tangent mode.





The keyframe tangent mode will be used by the Curve Editor to generate tangents automatically.  Changing the tangent mode here will also recalculate [Keyframe.inTangent](Keyframe-inTangent.html) and [Keyframe.outTangent](Keyframe-outTangent.html).

Additional resources: [AnimationUtility.SetKeyRightTangentMode](AnimationUtility.SetKeyRightTangentMode.html), [AnimationUtility.SetKeyBroken](AnimationUtility.SetKeyBroken.html).


            
