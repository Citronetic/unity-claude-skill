This version of Unity is unsupported.



# UsageHints





enumeration


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



















### Description



Offers a set of options that describe the intended usage patterns of a [VisualElement](UIElements.VisualElement.html).
 These options serve as guidance for optimizations. You can set multiple
 usage hints on an element. For example, if both position and color change, you can set both
 DynamicTransform and DynamicColor.



 **Note**: Set the usage hints at edit time or before you add the [VisualElement](UIElements.VisualElement.html) to a panel.
 In the case of transition, when it starts, the system might automatically add missing relevant
 usage hints to avoid regenerating geometry in every frame. However, this causes a one-frame performance penalty
 because the rendering data for the VisualElement and its descendants is regenerated.





### Properties



| Property | Description |
| --- | --- |
| None | No particular hints applicable. |
| DynamicTransform | Optimizes rendering of a VisualElement for frequent position and
 transformation changes. |
| GroupTransform | Optimizes rendering of a VisualElement that changes its transformation and position
 frequently, and has many descendants that have their hints set to DynamicTransform. |
| MaskContainer | Optimizes rendering of a VisualElement that has multiple descendants with nested masks. |
| DynamicColor | Optimizes rendering of a VisualElement for frequent color changes, such as a built-in style color being animated. |


            
