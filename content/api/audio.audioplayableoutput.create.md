This version of Unity is unsupported.



# [AudioPlayableOutput](Audio.AudioPlayableOutput.html).Create




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

public static [Audio.AudioPlayableOutput](Audio.AudioPlayableOutput.html) Create([Playables.PlayableGraph](Playables.PlayableGraph.html) graph,
string name,
[AudioSource](AudioSource.html) target);






### Parameters



| Parameter | Description |
| --- | --- |
| graph | The PlayableGraph that will contain the AnimationPlayableOutput. |
| name | The name of the output. |
| target | The AudioSource that will play the AudioPlayableOutput source Playable. |





### Returns



**AudioPlayableOutput**
        A new [AudioPlayableOutput](Audio.AudioPlayableOutput.html) attached to the [PlayableGraph](Playables.PlayableGraph.html).





### Description



Creates an [AudioPlayableOutput](Audio.AudioPlayableOutput.html) in the [PlayableGraph](Playables.PlayableGraph.html).





The [AudioSource](AudioSource.html) plays the source [Playable](Playables.Playable.html) of the [AudioPlayableOutput](Audio.AudioPlayableOutput.html). This source Playable can be set with SetSourcePlayable.


            
