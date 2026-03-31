This version of Unity is unsupported.



# [AudioCurveRendering](AudioCurveRendering.html).DrawMinMaxFilledCurve




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

public static void DrawMinMaxFilledCurve([Rect](Rect.html) r,
[AudioCurveRendering.AudioMinMaxCurveAndColorEvaluator](AudioCurveRendering.AudioMinMaxCurveAndColorEvaluator.html) eval);






### Parameters



| Parameter | Description |
| --- | --- |
| r | Rectangle determining the size of the graph. |
| eval | Normalized x-position in the range [0; 1] at which the min- and max-curves should be evaluated. The returned minValue and maxValue values are expected to be in the range [-1; 1] and a value of 0 corresponds to the vertical center of the rectangle that is drawn into. Values outside of this range will be clamped. |





### Description



Fills the area between the two curves evaluated by the AudioMinMaxCurveAndColorEvaluator provided with smooth gradients along the edges.


            
