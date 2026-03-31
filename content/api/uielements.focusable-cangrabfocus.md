This version of Unity is unsupported.



# [Focusable](UIElements.Focusable.html).canGrabFocus




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












                    public bool canGrabFocus;






### Description



Whether the element can be focused.





Returns true if the element meets all the following conditions:



          - It's [focusable](UIElements.Focusable-focusable.html).

          - It's [enabled](UIElements.VisualElement-enabledInHierarchy.html).

          - It's [visible](UIElements.VisualElement-visible.html).

          - It's display style isn't [DisplayStyle.None](UIElements.DisplayStyle.None.html).

          - It has a parent that [delegates focus](UIElements.Focusable-delegatesFocus.html), and the parent must also meet these conditions.





For more information, refer to [Focus system in UI Toolkit](../Manual/UIE-focus-order.html).


Additional resources: [IStyle.display](UIElements.IStyle-display.html), [Focusable.Focus](UIElements.Focusable.Focus.html)


            
