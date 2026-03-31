This version of Unity is unsupported.



# [PlayableExtensions](Playables.PlayableExtensions.html).AddInput




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

public static int AddInput(U playable,
V sourcePlayable,
int sourceOutputIndex,
float weight);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable used by this operation. |
| sourcePlayable | The Playable to connect to. |
| sourceOutputIndex | The output port of the Playable. |
| weight | The weight of the created input port. |





### Returns



**int**
        The index of the newly created input port.





### Description



Create a new input port and connect it to the output port of the given [Playable](Playables.Playable.html).





If several inputs are needed, it is better to use [SetInputCount](Playables.PlayableExtensions.SetInputCount.html) and [ConnectInput](Playables.PlayableExtensions.ConnectInput.html).

This method is a mere helper on top of [PlayableGraph.Connect](Playables.PlayableGraph.Connect.html).

Use this templated extension method on any type that inherits from [IPlayable](Playables.IPlayable.html).


            
