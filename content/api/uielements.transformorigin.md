This version of Unity is unsupported.



# TransformOrigin





struct in
          UnityEngine.UIElements



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



Represents the point of origin where the transformations ([Scale](UIElements.Scale.html), [Translate](UIElements.Translate.html), and [Rotate](UIElements.Rotate.html)) are applied.





By default, transform-origin is set in percentages relative to the element's size.
 For example, 50% 50% sets the origin to the center of the element.
 These percentages are calculated based on the element’s resulting layout size (resolvedStyle.height and resolvedStyle.width).
 You can also specify transform-origin in pixels.
 The origin is determined based on the local coordinate system of the element, where the top-left corner is considered the origin point (0,0)
 regardless of whether you use percentages or pixels.
 Negative values and values larger than 100% are valid and move the transform-origin outside the element.





### Constructors



| Constructor | Description |
| --- | --- |
| TransformOrigin |  |





### Static Methods



| Method | Description |
| --- | --- |
| Initial | Returns the initial value for the TransformOrigin property. |


            
