This version of Unity is unsupported.



# [AnimationPlayableUtilities](Playables.AnimationPlayableUtilities.html).PlayMixer




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

public static [Animations.AnimationMixerPlayable](Animations.AnimationMixerPlayable.html) PlayMixer([Animator](Animator.html) animator,
int inputCount,
out [Playables.PlayableGraph](Playables.PlayableGraph.html) graph);






### Parameters



| Parameter | Description |
| --- | --- |
| animator | Target Animator. |
| inputCount | The input count for the AnimationMixerPlayable. |
| graph | The created PlayableGraph. |





### Returns



**AnimationMixerPlayable**
        A handle to the newly-created [AnimationMixerPlayable](Animations.AnimationMixerPlayable.html).





### Description



Creates a [PlayableGraph](Playables.PlayableGraph.html) to be played on the given Animator. An [AnimationMixerPlayable](Animations.AnimationMixerPlayable.html) is also created.


            
