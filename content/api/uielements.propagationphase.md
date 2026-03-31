This version of Unity is unsupported.



# PropagationPhase





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



The propagation phases of an event.





When an element receives an event, the event propagates from the panel's root element to the target element.

 In the TrickleDown phase, the event is sent from the panel's root element to the target element.

 In the BubbleUp phase, the event is sent from the target element back to the panel's root element.

 Refer to the [Dispatch events](../Manual/UIE-Events-Dispatching.html) manual page for more information and examples.





### Properties



| Property | Description |
| --- | --- |
| None | The event is not propagated. |
| TrickleDown | The event is sent from the panel's root element to the target element. |
| BubbleUp | The event is sent from the target element back to the panel's root element. |


            
