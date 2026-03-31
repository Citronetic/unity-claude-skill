This version of Unity is unsupported.



# [IFocusEvent](UIElements.IFocusEvent.html).direction




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












                    public [UIElements.FocusChangeDirection](UIElements.FocusChangeDirection.html) direction;






### Description



Direction of the focus change.
 This corresponds to the FocusChangeDirection used by the focus ring.





The [IFocusRing](UIElements.IFocusRing.html) implementation determines what focus events are generated
 as a consequence of other input events.
 Focus events generally occur after any of the following situations:



          - A [NavigationMoveEvent](UIElements.NavigationMoveEvent.html)

          - A [PointerDownEvent](UIElements.PointerDownEvent.html)

          - Calling an element's [Focusable.Focus](UIElements.Focusable.Focus.html) or [Focusable.Blur](UIElements.Focusable.Blur.html) methods





The direction of the focus change contains information about the cause of the Focus event.
 It can be null if the focus change didn't happen as a consequence of another event.


Additional resources: [VisualElementFocusChangeDirection](UIElements.VisualElementFocusChangeDirection.html), [IFocusRing](UIElements.IFocusRing.html)


            
