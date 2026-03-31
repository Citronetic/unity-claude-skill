This version of Unity is unsupported.



# [AnimationPlayableOutput](Animations.AnimationPlayableOutput.html).Create




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

public static [Animations.AnimationPlayableOutput](Animations.AnimationPlayableOutput.html) Create([Playables.PlayableGraph](Playables.PlayableGraph.html) graph,
string name,
[Animator](Animator.html) target);






### Parameters



| Parameter | Description |
| --- | --- |
| graph | The PlayableGraph that will contain the AnimationPlayableOutput. |
| name | The name of the output. |
| target | The Animator that will process the PlayableGraph. |





### Returns



**AnimationPlayableOutput**
        A new [AnimationPlayableOutput](Animations.AnimationPlayableOutput.html) attached to the [PlayableGraph](Playables.PlayableGraph.html).





### Description



Creates an [AnimationPlayableOutput](Animations.AnimationPlayableOutput.html) in the [PlayableGraph](Playables.PlayableGraph.html).





The [Animator](Animator.html) plays the source [Playable](Playables.Playable.html) of the [AnimationPlayableOutput](Animations.AnimationPlayableOutput.html). This source Playable can be set with SetSourcePlayable.


            
