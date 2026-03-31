This version of Unity is unsupported.



# [PlayableExtensions](Playables.PlayableExtensions.html).SetInputWeight




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

public static void SetInputWeight(U playable,
int inputIndex,
float weight);






## Declaration

public static void SetInputWeight(U playable,
V input,
float weight);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable used by this operation. |
| input | The connected Playable to change. |
| weight | The weight. Should be between 0 and 1. |





### Description



Changes the weight of the [Playable](Playables.Playable.html) connected to the current [Playable](Playables.Playable.html).





Use this templated extension method on any type that inherits from [IPlayable](Playables.IPlayable.html).


            
