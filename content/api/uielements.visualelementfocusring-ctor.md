This version of Unity is unsupported.



# VisualElementFocusRing Constructor




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

public VisualElementFocusRing([UIElements.VisualElement](UIElements.VisualElement.html) root,
[UIElements.VisualElementFocusRing.DefaultFocusOrder](UIElements.VisualElementFocusRing.DefaultFocusOrder.html) dfo);






### Parameters



| Parameter | Description |
| --- | --- |
| root | The root of the element tree for which we want to build a focus ring. |
| dfo | Default ordering of the elements in the ring. |





### Description



Constructor.





Navigation will never focus an element that's not a descendent of the root element.
 If the root element is not the absolute root of its own visual tree, navigation within the focus ring
 will wrap around the root element hierarchy when it would otherwise leave it.


            
