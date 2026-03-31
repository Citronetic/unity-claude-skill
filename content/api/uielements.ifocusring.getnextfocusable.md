This version of Unity is unsupported.



# [IFocusRing](UIElements.IFocusRing.html).GetNextFocusable




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

public [UIElements.Focusable](UIElements.Focusable.html) GetNextFocusable([UIElements.Focusable](UIElements.Focusable.html) currentFocusable,
[UIElements.FocusChangeDirection](UIElements.FocusChangeDirection.html) direction);






### Description



Get the next element in the given direction.





For example, in a [VisualElementFocusRing](UIElements.VisualElementFocusRing.html), the next element in the
 [VisualElementFocusChangeDirection.right](UIElements.VisualElementFocusChangeDirection-right.html) by default is the element to the right of the current
 element.
 More precisely, the next element is the focusable element whose [Focusable.tabIndex](UIElements.Focusable-tabIndex.html) is the
 closest to the current element in increasing order.
 If no such element is found, the process wraps around and continues looking for a focusable element
 starting at tabIndex=0 and proceeding in increasing order.

 When the [EventDispatcher](UIElements.EventDispatcher.html) processes navigation and pointer events, it automatically calls
 this method to generate Focus events.

 The Focus event's [EventBase.target](UIElements.EventBase-target.html) matches the value returned by this method to generate it.


            
