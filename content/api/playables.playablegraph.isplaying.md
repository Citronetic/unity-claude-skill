This version of Unity is unsupported.



# [PlayableGraph](Playables.PlayableGraph.html).IsPlaying




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

public bool IsPlaying();






### Returns



**bool**
        A boolean indicating if the graph is playing or not.





### Description



Indicates that a graph is presently running.





Return true if [PlayableGraph.Play](Playables.PlayableGraph.Play.html) or has been called on the graph.  Returns false if [PlayableGraph.Stop](Playables.PlayableGraph.Stop.html) has been called on the graph.  Note that calling [PlayableGraph.Evaluate](Playables.PlayableGraph.Evaluate.html) has no impact on the IsPlaying state.


            
