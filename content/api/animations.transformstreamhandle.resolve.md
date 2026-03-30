This version of Unity is unsupported.



# [TransformStreamHandle](Animations.TransformStreamHandle.html).Resolve




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

public void Resolve([Animations.AnimationStream](Animations.AnimationStream.html) stream);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The AnimationStream that holds the animated values. |





### Description



Bind this handle with an animated values from the [AnimationStream](Animations.AnimationStream.html).





Handles are lazily resolved as they're accessed, but in order to prevent unwanted CPU spikes, this method allows to resolve handles in a deterministic way.
Additional resources: [IsResolved](Animations.TransformStreamHandle.IsResolved.html), [AnimatorJobExtensions.ResolveAllStreamHandles](Animations.AnimatorJobExtensions.ResolveAllStreamHandles.html).


            
