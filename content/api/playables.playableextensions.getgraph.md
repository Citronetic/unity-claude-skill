This version of Unity is unsupported.



# [PlayableExtensions](Playables.PlayableExtensions.html).GetGraph




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

public static [Playables.PlayableGraph](Playables.PlayableGraph.html) GetGraph(U playable);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable used by this operation. |





### Returns



**PlayableGraph**
        The [PlayableGraph](Playables.PlayableGraph.html) associated with the current [Playable](Playables.Playable.html).





### Description



Returns the [PlayableGraph](Playables.PlayableGraph.html) that owns this [Playable](Playables.Playable.html).  A [Playable](Playables.Playable.html) can only be used in the graph that was used to create it.





Use this templated extension method on any type that inherits from [IPlayable](Playables.IPlayable.html).


            
