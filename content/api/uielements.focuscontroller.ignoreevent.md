This version of Unity is unsupported.



# [FocusController](UIElements.FocusController.html).IgnoreEvent




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

public void IgnoreEvent([UIElements.EventBase](UIElements.EventBase.html) evt);






### Parameters



| Parameter | Description |
| --- | --- |
| evt | The event to be ignored. |





### Description



Instructs the FocusController to ignore the given event.
 This will prevent the event from changing the current focused VisualElement or triggering focus events.





In general this will have no effect if the event is not a
 [PointerDownEvent](UIElements.PointerDownEvent.html), [MouseDownEvent](UIElements.MouseDownEvent.html), or [NavigationMoveEvent](UIElements.NavigationMoveEvent.html).


            
