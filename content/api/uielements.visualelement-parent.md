This version of Unity is unsupported.



# [VisualElement](UIElements.VisualElement.html).parent




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












                    public [UIElements.VisualElement](UIElements.VisualElement.html) parent;






### Description



The parent of this VisualElement.





Unlike the Hierarchy.parent property, this property reflects for logical hierarchy.
 For example, if you add an element to a [ScrollView](UIElements.ScrollView.html), the logical parent of this element is
 the ScrollView itself, whereas the physical parent returned by the Hierarchy.parent property
 returns a child of [ScrollView](UIElements.ScrollView.html) which acts as the parent of your element.


            
