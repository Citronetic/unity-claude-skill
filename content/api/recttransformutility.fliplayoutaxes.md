This version of Unity is unsupported.



# [RectTransformUtility](RectTransformUtility.html).FlipLayoutAxes




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

public static void FlipLayoutAxes([RectTransform](RectTransform.html) rect,
bool keepPositioning,
bool recursive);






### Parameters



| Parameter | Description |
| --- | --- |
| rect | The RectTransform to flip. |
| keepPositioning | Flips around the pivot if true. Flips within the parent rect if false. |
| recursive | Flip the children as well? |





### Description



Flips the horizontal and vertical axes of the RectTransform size and alignment, and optionally its children as well.





This swaps the horizontal and vertical axis in the size and alignment of the RectTransform. This can also be thought of as a diagonal flip. Any actual content such as images or text will not be flipped or rotated but may be resized and aligned differently.

An example usage is to instantiate a control designed for alignment along one axis (like a horizontal slider) and flip the axes so the layout becomes suitable for use along the other axis (like a vertical slider).

When used with the recursive argument set to true, the children are always flipped with the keepPositioning option set to false so that they properly follow the flip of the parent.


            
