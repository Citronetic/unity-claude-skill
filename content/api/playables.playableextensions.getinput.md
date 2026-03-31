This version of Unity is unsupported.



# [PlayableExtensions](Playables.PlayableExtensions.html).GetInput




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

public static [Playables.Playable](Playables.Playable.html) GetInput(U playable,
int inputPort);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable used by this operation. |
| inputPort | The port index. |





### Returns



**Playable**

          [Playable](Playables.Playable.html) connected at the index specified, or null if the index is valid but is not connected to anything. This happens if there was once a Playable connected at the index, but was disconnected via [PlayableGraph.Disconnect](Playables.PlayableGraph.Disconnect.html).





### Description



Returns the [Playable](Playables.Playable.html) connected at the given input port index.





Use this templated extension method on any type that inherits from [IPlayable](Playables.IPlayable.html).


            
