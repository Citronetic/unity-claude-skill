This version of Unity is unsupported.



# [AnimatorJobExtensions](Animations.AnimatorJobExtensions.html).OpenAnimationStream




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

public static bool OpenAnimationStream([Animator](Animator.html) animator,
ref [Animations.AnimationStream](Animations.AnimationStream.html) stream);






### Parameters



| Parameter | Description |
| --- | --- |
| animator | The Animator instance that calls this method. |
| stream | The new stream. |





### Returns



**bool**
        Returns whether or not the stream has been opened.





### Description



Open a new stream on the [Animator](Animator.html).





The stream opened this way must be closed using [CloseAnimationStream](Animations.AnimatorJobExtensions.CloseAnimationStream.html).


            
