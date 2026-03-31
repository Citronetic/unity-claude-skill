This version of Unity is unsupported.



# [EventBase](UIElements.EventBase.html).StopPropagation




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

public void StopPropagation();






### Description



Stops the propagation of the event to other targets.
 All subscribers to the event on this target still receive the event.





The event is not sent to other elements along the propagation path.
 If the propagation is in the [PropagationPhase.TrickleDown](UIElements.PropagationPhase.TrickleDown.html) phase,
 this prevents event handlers from executing on children of the [EventBase.currentTarget](UIElements.EventBase-currentTarget.html),
 including on the event's [EventBase.target](UIElements.EventBase-target.html) itself, and prevents all event handlers using the
 [TrickleDown.NoTrickleDown](UIElements.TrickleDown.NoTrickleDown.html) option from executing
 (see [CallbackEventHandler.RegisterCallback](UIElements.CallbackEventHandler.RegisterCallback.html)).
 If the propagation is in the [PropagationPhase.BubbleUp](UIElements.PropagationPhase.BubbleUp.html) phase,
 this prevents event handlers from executing on parents of the [EventBase.currentTarget](UIElements.EventBase-currentTarget.html).

 This method has the same effect as [EventBase.StopImmediatePropagation](UIElements.EventBase.StopImmediatePropagation.html)
 except on execution of other event handlers on the [EventBase.currentTarget](UIElements.EventBase-currentTarget.html).

 Calling this method does not prevent some internal actions to be processed,
 such as an element getting focused as a result of a [PointerDownEvent](UIElements.PointerDownEvent.html).

 Refer to the [Dispatch events](../Manual/UIE-Events-Dispatching.html) manual page for more information and examples.


Additional resources: [EventBase.StopImmediatePropagation](UIElements.EventBase.StopImmediatePropagation.html)


            
