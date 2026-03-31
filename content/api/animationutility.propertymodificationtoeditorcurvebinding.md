This version of Unity is unsupported.



# [AnimationUtility](AnimationUtility.html).PropertyModificationToEditorCurveBinding




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

public static Type PropertyModificationToEditorCurveBinding([PropertyModification](PropertyModification.html) modification,
[GameObject](GameObject.html) gameObject,
out [EditorCurveBinding](EditorCurveBinding.html) binding);






### Parameters



| Parameter | Description |
| --- | --- |
| modification | The PropertyModification to be converted. |
| gameObject | The root game object of the animated hierarchy. |
| binding | The resulting EditorCurveBinding. |





### Returns



**Type**
        The type of the animated value.





### Description



Use this method to convert a [PropertyModification](PropertyModification.html) to an [EditorCurveBinding](EditorCurveBinding.html).





The [AnimationWindow](AnimationWindow.html) uses this method when it filters property modifications from [Undo.postprocessModifications](Undo-postprocessModifications.html), during keyframe operations.


            
