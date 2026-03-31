This version of Unity is unsupported.



# [PlayableBehaviour](Playables.PlayableBehaviour.html).OnGraphStart




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

public void OnGraphStart([Playables.Playable](Playables.Playable.html) playable);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable that owns the current PlayableBehaviour. |





### Description



This function is called when the [PlayableGraph](Playables.PlayableGraph.html) that owns this PlayableBehaviour starts.





OnGraphStart is called when the graph starts playing, or on the first invocation of [PlayableGraph.Evaluate](Playables.PlayableGraph.Evaluate.html). Each call to OnGraphStart is paired with OnGraphStop.


            
