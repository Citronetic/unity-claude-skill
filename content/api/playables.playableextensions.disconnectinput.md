This version of Unity is unsupported.



# [PlayableExtensions](Playables.PlayableExtensions.html).DisconnectInput




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

public static void DisconnectInput(U playable,
int inputPort);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable used by this operation. |
| inputPort | The input port index. |





### Description



Disconnect the input port of a [Playable](Playables.Playable.html).





This method is a simple helper on top of [PlayableGraph.Disconnect](Playables.PlayableGraph.Disconnect.html).

                    Use this templated extension method on any type that inherits from [IPlayable](Playables.IPlayable.html).


            
