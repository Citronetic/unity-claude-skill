This version of Unity is unsupported.



# [Focusable](UIElements.Focusable.html).delegatesFocus




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












                    public bool delegatesFocus;






### Description



Whether the element delegates the focus to its children.





If the element delegates its focus, when it becomes focused, one of its child or recursive child
 elements is selected to receive focus in its place.



 The element that receives the focus cannot be chosen manually.
 Instead, it's determined automatically using a set of rules.

 The chosen element will be the first child or recursive child that



          - can be [focused](UIElements.Focusable-canGrabFocus.html),

          - does not delegate its own focus,

          - is not the child or recursive child of a content container or of another element that delegates focus, and

          - is part of the [focus ring](UIElements.IFocusRing.html) navigation sequence.





For more information, refer to [Focus system in UI Toolkit](../Manual/UIE-focus-order.html).


Additional resources: [VisualElement.contentContainer](UIElements.VisualElement-contentContainer.html), [IFocusRing](UIElements.IFocusRing.html)


            
