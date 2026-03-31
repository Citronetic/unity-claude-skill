This version of Unity is unsupported.



# [PlayableExtensions](Playables.PlayableExtensions.html).GetPlayState




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

public static [Playables.PlayState](Playables.PlayState.html) GetPlayState(U playable);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable used by this operation. |





### Returns



**PlayState**
        The current PlayState of the [Playable](Playables.Playable.html).





### Description



Returns the current PlayState of the [Playable](Playables.Playable.html).





[PlayState.Playing](Playables.PlayState.Playing.html): The local time of this [Playable](Playables.Playable.html) will be updated during the evaluation of the [PlayableGraph](Playables.PlayableGraph.html).

[PlayState.Paused](Playables.PlayState.Paused.html): The local time of this [Playable](Playables.Playable.html) will not be updated during the evaluation of the [PlayableGraph](Playables.PlayableGraph.html).

PlayState.Delayed: The delay is elapsed during the evaluation of the [PlayableGraph](Playables.PlayableGraph.html), the [Playable](Playables.Playable.html) will not start as long as there is still a delay.

Use this templated extension method on any type that inherits from [IPlayable](Playables.IPlayable.html).


            
