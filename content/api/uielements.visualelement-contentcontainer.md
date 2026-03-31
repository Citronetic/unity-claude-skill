This version of Unity is unsupported.



# [VisualElement](UIElements.VisualElement.html).contentContainer




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












                    public [UIElements.VisualElement](UIElements.VisualElement.html) contentContainer;






### Description



Logical container where child elements are added.
 If a child is added to this element, the child is added to this element's content container instead.





When iterating over the  [VisualElement.Children](UIElements.VisualElement.Children.html) of an element, the
 element's content container hierarchy is used instead of the element itself.
 This can lead to unexpected results, such as elements being ignored by the navigation events
 if they are not directly in the content container's hierarchy. Refer to [IFocusRing](UIElements.IFocusRing.html) for more information.

 If the content container is the same as the element itself, child elements are added directly to the element.
 This is true for most elements but can be overridden by more complex types.

 The [ScrollView](UIElements.ScrollView.html), for example, has a content container that is different from itself.
 In that case, child elements added to the scroll view are added to its content container element instead.
 While the physical parent ([VisualElement.Hierarchy.parent](UIElements.VisualElement.Hierarchy-parent.html)) of the child elements is the
 scroll view's content container element, their logical parent ([VisualElement.parent](UIElements.VisualElement-parent.html))
 still refers to the scroll view itself.
 Since some of the scroll view's focusable children are not part of its logical hierarchy, like its
 [Scroller](UIElements.Scroller.html) elements, these focusable children are not considered by default when using
 sequential navigation.
 Refer to
 [How can I change what element is focused next](../Manual/UIE-faq-event-and-input-system.html)
 for an example of a workaround solution if the default navigation rules don't correspond to your needs.


Additional resources: [VisualElement.hierarchy](UIElements.VisualElement-hierarchy.html), [VisualElement.Children](UIElements.VisualElement.Children.html)


            
