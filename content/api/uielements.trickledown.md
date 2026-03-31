This version of Unity is unsupported.



# TrickleDown





enumeration


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



















### Description



Use this enum to specify during which propagation phase the event handler is executed.





Additional resources: [PropagationPhase](UIElements.PropagationPhase.html), CallbackEventHandler.RegisterCallback_1





### Properties



| Property | Description |
| --- | --- |
| NoTrickleDown | Execute the event handler during the BubbleUp propagation phase
 if the event bubbles and the element is a parent of the event's target,
 or if the callback is registered directly on the event's target. |
| TrickleDown | Execute the event handler during the TrickleDown propagation phase
 if the event tricklesDown and the element is a parent of the event's target,
 or if the callback is registered directly on the event's target. |


            
