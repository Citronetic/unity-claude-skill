This version of Unity is unsupported.



# [AnimationPlayableUtilities](Playables.AnimationPlayableUtilities.html).PlayLayerMixer




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

public static [Animations.AnimationLayerMixerPlayable](Animations.AnimationLayerMixerPlayable.html) PlayLayerMixer([Animator](Animator.html) animator,
int inputCount,
out [Playables.PlayableGraph](Playables.PlayableGraph.html) graph);






### Parameters



| Parameter | Description |
| --- | --- |
| animator | Target Animator. |
| inputCount | The input count for the AnimationLayerMixerPlayable. Defines the number of layers. |
| graph | The created PlayableGraph. |





### Returns



**AnimationLayerMixerPlayable**
        A handle to the newly-created [AnimationLayerMixerPlayable](Animations.AnimationLayerMixerPlayable.html).





### Description



Creates a [PlayableGraph](Playables.PlayableGraph.html) to be played on the given Animator. An [AnimationLayerMixerPlayable](Animations.AnimationLayerMixerPlayable.html) is also created.


            
