This version of Unity is unsupported.



# [PlayableDirector](Playables.PlayableDirector.html).RebindPlayableGraphOutputs




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

public void RebindPlayableGraphOutputs();






### Description



Rebinds each [PlayableOutput](Playables.PlayableOutput.html) of the [PlayableGraph](Playables.PlayableGraph.html).





This function updates the [PlayableOutput](Playables.PlayableOutput.html)s binding information. It should be used if a component has been added or deleted. New [Animator](Animator.html), [AudioSource](AudioSource.html) and NotificationReceiver objects can be discovered this way without rebuilding the graph.


            
