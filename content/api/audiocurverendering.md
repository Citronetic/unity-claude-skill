This version of Unity is unsupported.



# AudioCurveRendering





class in
          UnityEditor


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



Antialiased curve rendering functionality used by audio tools in the editor.





### Static Methods



| Method | Description |
| --- | --- |
| DrawCurve | Renders a thin curve determined by the curve evaluation function. The solid color of the curve is set by the curveColor argument. |
| DrawFilledCurve | Fills the area between the curve evaluated by the AudioCurveAndColorEvaluator provided and the bottom of the rectngle with smooth gradients along the edges. |
| DrawMinMaxFilledCurve | Fills the area between the two curves evaluated by the AudioMinMaxCurveAndColorEvaluator provided with smooth gradients along the edges. |
| DrawSymmetricFilledCurve | Fills the area between the curve evaluated by the AudioCurveAndColorEvaluator provided and its vertical mirror image with smooth gradients along the edges. Useful for drawing amplitude plots of audio signals. |





### Delegates



| Delegate | Description |
| --- | --- |
| AudioCurveAndColorEvaluator | Curve evaluation function that allows simultaneous evaluation of the curve y-value and a color of the curve at that point. |
| AudioCurveEvaluator | Curve evaluation function used to evaluate the curve y-value and at the specified point. |
| AudioMinMaxCurveAndColorEvaluator | Curve evaluation function that allows simultaneous evaluation of the min- and max-curves. The returned minValue and maxValue values are expected to be in the range [-1; 1] and a value of 0 corresponds to the vertical center of the rectangle that is drawn into. Values outside of this range will be clamped. Additionally the color of the curve at this point is evaluated. |


            
