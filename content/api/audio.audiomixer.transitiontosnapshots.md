This version of Unity is unsupported.



# [AudioMixer](Audio.AudioMixer.html).TransitionToSnapshots




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

public void TransitionToSnapshots(AudioMixerSnapshot[] snapshots,
float[] weights,
float timeToReach);






### Parameters



| Parameter | Description |
| --- | --- |
| snapshots | The set of snapshots to be mixed. |
| weights | The mix weights for the snapshots specified. |
| timeToReach | Relative time after which the mixture should be reached from any current state. |





### Description



Transitions to a weighted mixture of the snapshots specified. This can be used for games that specify the game state as a continuum between states or for interpolating snapshots from a triangulated map location.


            
