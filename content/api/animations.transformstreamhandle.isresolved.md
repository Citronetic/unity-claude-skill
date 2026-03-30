This version of Unity is unsupported.



# [TransformStreamHandle](Animations.TransformStreamHandle.html).IsResolved




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

public bool IsResolved([Animations.AnimationStream](Animations.AnimationStream.html) stream);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The AnimationStream that holds the animated values. |





### Returns



**bool**
        Returns `true` if the handle is resolved, `false` otherwise.





### Description



Returns whether this handle is resolved.





A TransformStreamHandle is resolved if it is valid, if it has the same bindings version than the one in the stream, and if it is bound to the transform in the stream. A TransformStreamHandle can become unresolved if the animator bindings have changed or if the transform had been destroyed.

Additional resources: [Resolve](Animations.TransformStreamHandle.Resolve.html), and [IsValid](Animations.TransformStreamHandle.IsValid.html).


            
