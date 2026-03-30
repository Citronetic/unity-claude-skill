This version of Unity is unsupported.



# [AnimationPlayableUtilities](Playables.AnimationPlayableUtilities.html).PlayClip




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

public static [Animations.AnimationClipPlayable](Animations.AnimationClipPlayable.html) PlayClip([Animator](Animator.html) animator,
[AnimationClip](AnimationClip.html) clip,
out [Playables.PlayableGraph](Playables.PlayableGraph.html) graph);






### Parameters



| Parameter | Description |
| --- | --- |
| animator | Target Animator. |
| clip | The AnimationClip to create an AnimationClipPlayable for. |
| graph | The created PlayableGraph. |





### Returns



**AnimationClipPlayable**
        A handle to the newly-created [AnimationClipPlayable](Animations.AnimationClipPlayable.html).





### Description



Creates a [PlayableGraph](Playables.PlayableGraph.html) to be played on the given Animator. An [AnimationClipPlayable](Animations.AnimationClipPlayable.html) is also created for the given AnimationClip.


            
