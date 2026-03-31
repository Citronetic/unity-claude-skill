This version of Unity is unsupported.



# [IFocusRing](UIElements.IFocusRing.html).GetFocusChangeDirection




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

public [UIElements.FocusChangeDirection](UIElements.FocusChangeDirection.html) GetFocusChangeDirection([UIElements.Focusable](UIElements.Focusable.html) currentFocusable,
[UIElements.EventBase](UIElements.EventBase.html) e);






### Description



Get the direction of the focus change for the given event.





For example, in a [VisualElementFocusRing](UIElements.VisualElementFocusRing.html), when the Tab key is pressed, the focus change
 direction should be [VisualElementFocusChangeDirection.right](UIElements.VisualElementFocusChangeDirection-right.html).

 When the [EventDispatcher](UIElements.EventDispatcher.html) processes navigation and pointer events, it automatically calls
 this method to generate Focus events.

 The Focus event's [IFocusEvent.direction](UIElements.IFocusEvent-direction.html) matches the value returned by this method to
 generate it.


            
