This version of Unity is unsupported.



# [PlayableBehaviour](Playables.PlayableBehaviour.html).OnBehaviourPause




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

public void OnBehaviourPause([Playables.Playable](Playables.Playable.html) playable,
[Playables.FrameData](Playables.FrameData.html) info);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable that owns the current PlayableBehaviour. |
| info | A FrameData structure that contains information about the current frame context. |





### Description



This method is invoked when one of the following situations occurs:

     The effective play state during traversal is changed to [PlayState.Paused](Playables.PlayState.Paused.html). This state is indicated by [FrameData.effectivePlayState](Playables.FrameData-effectivePlayState.html).

     The [PlayableGraph](Playables.PlayableGraph.html) is stopped while the playable play state is Playing. This state is indicated by [PlayableGraph.IsPlaying](Playables.PlayableGraph.IsPlaying.html) returning true.


            
