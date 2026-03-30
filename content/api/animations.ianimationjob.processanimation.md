This version of Unity is unsupported.



# [IAnimationJob](Animations.IAnimationJob.html).ProcessAnimation




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

public void ProcessAnimation([Animations.AnimationStream](Animations.AnimationStream.html) stream);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The animation stream to work on. |





### Description



Defines what to do when processing the animation.





This method is called after [IAnimationJob.ProcessRootMotion](Animations.IAnimationJob.ProcessRootMotion.html). Depending on [Animator.cullingMode](Animator-cullingMode.html), it is possible this method won't be called.


            
