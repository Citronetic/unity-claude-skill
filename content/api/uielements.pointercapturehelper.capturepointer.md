This version of Unity is unsupported.



# [PointerCaptureHelper](UIElements.PointerCaptureHelper.html).CapturePointer




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

public static void CapturePointer([UIElements.IEventHandler](UIElements.IEventHandler.html) handler,
int pointerId);






### Parameters



| Parameter | Description |
| --- | --- |
| handler | The VisualElement that captures the pointer. |
| pointerId | The pointer to capture. |





### Description



Captures the pointer.





When a VisualElement captures a pointer, all pointer events—except PointerOverEvent, PointerOutEvent, PointerEnterEvent, PointerLeaveEvent—
 are sent to the element, regardless of which element is under the pointer.

 Pointer events that would normally bubble up or trickle down are instead sent exclusively
 to the capturing element.

 If a pointer capture is requested during the propagation of an existing event, then the capture
 only takes effect after the ongoing event has been fully dispatched and propagated.

 **Note**: Events determine their target and propagation path when they are dispatched,
 not necessarily when they are sent. If an event is sent during another event's propagation,
 then the new event is added to an event queue and processed after the current event and all other events
 in the queue before it have been fully dispatched and propagated.


            
