This version of Unity is unsupported.



# [PlayableExtensions](Playables.PlayableExtensions.html).SetTime




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

public static void SetTime(U playable,
double value);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable used by this operation. |
| value | The current time in seconds. |





### Description



Changes the current local time of the [Playable](Playables.Playable.html).





Use this method to override the next PlayableGraph evaluation of the current time.

                Normally, the PlayableGraph updates the current time between Update and LateUpdate (see [Execution Order](../Manual/ExecutionOrder.html)).





Use this templated extension method on any type that inherits from [IPlayable](Playables.IPlayable.html).


            
