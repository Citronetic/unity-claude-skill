This version of Unity is unsupported.



# [PlayableBehaviour](Playables.PlayableBehaviour.html).ProcessFrame




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

public void ProcessFrame([Playables.Playable](Playables.Playable.html) playable,
[Playables.FrameData](Playables.FrameData.html) info,
object playerData);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable that owns the current PlayableBehaviour. |
| info | A FrameData structure that contains information about the current frame context. |
| playerData | The user data of the ScriptPlayableOutput that initiated the process pass. |





### Description



This function is called during the ProcessFrame phase of the [PlayableGraph](Playables.PlayableGraph.html).





ProcessFrame is the stage at which your Playable does its work.

This method is called for each frame when a Playable plays and is connected, directly or indirectly, to a [ScriptPlayableOutput](Playables.ScriptPlayableOutput.html).


            
