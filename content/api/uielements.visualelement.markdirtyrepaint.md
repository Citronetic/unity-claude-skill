This version of Unity is unsupported.



# [VisualElement](UIElements.VisualElement.html).MarkDirtyRepaint




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

public void MarkDirtyRepaint();






### Description



Marks that the [VisualElement](UIElements.VisualElement.html) requires a repaint.





Don't call this method when you change the styles or properties of built-in controls, as this is automatically called when necessary.
 However, you might need to call this method when your element has a custom [generateVisualContent](UIElements.VisualElement-generateVisualContent.html) that needs to be triggered, such as after you change a custom style or property.


            
