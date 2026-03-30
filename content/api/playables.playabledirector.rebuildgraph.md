This version of Unity is unsupported.



# [PlayableDirector](Playables.PlayableDirector.html).RebuildGraph




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

public void RebuildGraph();






### Description



Discards the existing [PlayableGraph](Playables.PlayableGraph.html) and creates a new instance.





When the PlayableDirector starts playback, it creates a PlayableGraph from the assigned PlayableAsset. Use this method when the assigned PlayableAsset has changed and it is necessary to show the changes during playback.

RebuildGraph attempts to maintain the current playback state. For example, if the PlayableDirector has not started playback, RebuildGraph constructs a new PlayableGraph and does not start playback. If the PlayableDirector is playing an existing graph, RebuildGraph stops playback, destroys the graph, creates a new instance of the graph, and resumes playback.


            
