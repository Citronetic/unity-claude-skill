This version of Unity is unsupported.



# [AnimationUtility](AnimationUtility.html).GetAnimationClips




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













                        **Obsolete**
                        GetAnimationClips(Animation) is deprecated. Use GetAnimationClips(GameObject) instead.




## Declaration

public static AnimationClip[] GetAnimationClips([Animation](Animation.html) component);






## Declaration

public static AnimationClip[] GetAnimationClips([GameObject](GameObject.html) gameObject);






### Description



Retrieves an array of animation clips associated with a GameObject or component. `GetAnimationClips(Animation)` is obsolete and has been replaced with `GetAnimationClips(GameObject)`.





This method retrieves animation clips from the [Animator](Animator.html) or [Animation](Animation.html) component. This method works with any component that has implemented the [IAnimationClipSource](IAnimationClipSource.html) interface.


            
