This version of Unity is unsupported.



# [VisualElement](UIElements.VisualElement.html).pickingMode




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












                    public [UIElements.PickingMode](UIElements.PickingMode.html) pickingMode;






### Description



Determines if this element can be the target of pointer events or
 picked by [IPanel.Pick](UIElements.IPanel.Pick.html) queries.





Elements can not be picked if:



          - They are invisible

          - Their `style.display` is set to `DisplayStyle.None`





Elements with a picking mode of [PickingMode.Ignore](UIElements.PickingMode.Ignore.html) never receive the hover pseudo-state.


Additional resources: [VisualElement.visible](UIElements.VisualElement-visible.html), [IStyle.display](UIElements.IStyle-display.html)


            
