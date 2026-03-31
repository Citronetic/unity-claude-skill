This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).DrawCurveSwatch




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

public static void DrawCurveSwatch([Rect](Rect.html) position,
[AnimationCurve](AnimationCurve.html) curve,
[SerializedProperty](SerializedProperty.html) property,
[Color](Color.html) color,
[Color](Color.html) bgColor);






## Declaration

public static void DrawCurveSwatch([Rect](Rect.html) position,
[AnimationCurve](AnimationCurve.html) curve,
[SerializedProperty](SerializedProperty.html) property,
[Color](Color.html) color,
[Color](Color.html) bgColor,
[Rect](Rect.html) curveRanges);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The rectangle to draw the color swatch within. |
| curve | The curve to draw. |
| property | The curve to draw as a SerializedProperty. |
| color | The color to draw the curve with. |
| bgColor | The color to draw the background with. |
| curveRanges | Optional parameter to specify the range of the curve which should be included in swatch. |





### Description



Draw a curve swatch.





Pass in the curve to draw either with the curve parameter or with the property parameter.


            
