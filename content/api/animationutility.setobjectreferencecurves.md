This version of Unity is unsupported.



# [AnimationUtility](AnimationUtility.html).SetObjectReferenceCurves




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

public static void SetObjectReferenceCurves([AnimationClip](AnimationClip.html) clip,
EditorCurveBinding[] bindings,
ObjectReferenceKeyframe[][] keyframes);






### Parameters



| Parameter | Description |
| --- | --- |
| clip | The animation clip to modify. |
| bindings | The bindings that define the paths and the properties of each curve. |
| keyframes | Array of Object reference arrays, one per binding. |





### Description



Adds, modifies, or removes object references curve in an animation clip.





This method is equivalent to calling [AnimationUtility.SetObjectReferenceCurve](AnimationUtility.SetObjectReferenceCurve.html) for each individual curve. This method also applies relevant post-processing operations only once.
This method modifies object reference curves. For float curves, see [AnimationUtility.SetEditorCurves](AnimationUtility.SetEditorCurves.html).


            
