This version of Unity is unsupported.



# [AnimationUtility](AnimationUtility.html).GetObjectReferenceCurve




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

public static ObjectReferenceKeyframe[] GetObjectReferenceCurve([AnimationClip](AnimationClip.html) clip,
[EditorCurveBinding](EditorCurveBinding.html) binding);






### Returns



**ObjectReferenceKeyframe[]**
        Returns an array of keyframes.





### Description



Retrieves the object reference curve that the binding points to.





Unlike float curves, object reference curves do not have additional metadata. For this reason, an array of keyframes is returned instead of a curve object.

See also: [AnimationUtility.GetEditorCurve](AnimationUtility.GetEditorCurve.html).


            
