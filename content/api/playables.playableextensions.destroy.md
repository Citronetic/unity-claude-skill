This version of Unity is unsupported.



# [PlayableExtensions](Playables.PlayableExtensions.html).Destroy




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

public static void Destroy(U playable);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable used by this operation. |





### Description



Destroys the current [Playable](Playables.Playable.html).





NOTE: Any other Playables connected to the destroyed Playable's output ports will be orphaned; they will still exist in the [PlayableGraph](Playables.PlayableGraph.html), but will not be updated until they are connected to a graph branch that is connected to a [PlayableOutput](Playables.PlayableOutput.html).





Use this templated extension method on any type that inherits from [IPlayable](Playables.IPlayable.html).


            
