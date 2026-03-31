This version of Unity is unsupported.



# [VisualElement](UIElements.VisualElement.html).Children




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

public IEnumerable<VisualElement> Children();






### Description



Returns the elements from its contentContainer.





The elements returned by this method are the logical children of the element.
 This might differ from the physical children of the element if the element's contentContainer
 property doesn't return the element itself. For more information, refer to [VisualElement.contentContainer](UIElements.VisualElement-contentContainer.html).

 To access the physical children of the element, use [VisualElement.Hierarchy.Children](UIElements.VisualElement.Hierarchy.Children.html).


Additional resources: [VisualElement.contentContainer](UIElements.VisualElement-contentContainer.html), [VisualElement.hierarchy](UIElements.VisualElement-hierarchy.html)


            
