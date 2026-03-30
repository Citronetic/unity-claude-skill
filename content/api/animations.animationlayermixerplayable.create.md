This version of Unity is unsupported.



# [AnimationLayerMixerPlayable](Animations.AnimationLayerMixerPlayable.html).Create




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

public static [Animations.AnimationLayerMixerPlayable](Animations.AnimationLayerMixerPlayable.html) Create([Playables.PlayableGraph](Playables.PlayableGraph.html) graph,
int inputCount,
bool singleLayerOptimization);






### Parameters



| Parameter | Description |
| --- | --- |
| graph | The PlayableGraph that will contain the new AnimationLayerMixerPlayable. |
| inputCount | The number of layers. |
| singleLayerOptimization | This optimization automatically sets the weight of the first animation layer to 1. Set to true If your layer mixer has a single animation layer and you want to bypass unnecessary weight calculations. This optimization is automatically set to false if your layer mixer has multiple animation layers. |





### Returns



**AnimationLayerMixerPlayable**
        A new [AnimationLayerMixerPlayable](Animations.AnimationLayerMixerPlayable.html) linked to the [PlayableGraph](Playables.PlayableGraph.html).





### Description



Creates an [AnimationLayerMixerPlayable](Animations.AnimationLayerMixerPlayable.html) in the [PlayableGraph](Playables.PlayableGraph.html).


            
