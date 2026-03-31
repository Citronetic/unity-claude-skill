This version of Unity is unsupported.



# [Animator](Animator.html).keepAnimatorStateOnDisable




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




                [Switch to Manual](../Manual/class-Animator.html)







                    public bool keepAnimatorStateOnDisable;






### Description



Controls the behaviour of the Animator component when a GameObject is inactive.





Set to true to keep the current state of the Animator controller.

Set to false to clear the current state of the Animator controller.

The default value is false.

When this property is set to true, the Animator also preserves the animated values for inactive GameObjects. For example, a GameObject's transform is animated from x=0 to x=3 while it is active. When this GameObject is inactive, it keeps the animated value x=3 instead of x=0.

This property is serializable and can be saved in a Prefab.

This property applies to the AnimatorController associated with the Animator. This property does not affect [AnimatorControllerPlayable](Animations.AnimatorControllerPlayable.html).


            
