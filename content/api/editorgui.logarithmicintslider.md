This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).LogarithmicIntSlider




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

public static int LogarithmicIntSlider([Rect](Rect.html) position,
string label,
int sliderValue,
int leftValue,
int rightValue,
int logbase,
int textFieldMin,
int textFieldMax);






## Declaration

public static int LogarithmicIntSlider([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
int sliderValue,
int leftValue,
int rightValue,
int logbase,
int textFieldMin,
int textFieldMax);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the long field. |
| label | Label to display in front of the long field. |
| sliderValue | The value to edit. |
| leftValue | The value at the left end of the slider. |
| rightValue | The value at the right end of the slider. |
| logbase | The logarithm base. The resulting value will be a power of this value. |
| textFieldMin | The value to display at the left end of the slider. |
| textFieldMax | The value to display at the right end of the slider. |





### Returns



**int**
        The value entered by the user.





### Description



Makes a text field for entering an integer on a logarithmic scale.





Additional resources: [IntField](EditorGUI.IntField.html), [FloatField](EditorGUI.FloatField.html), [DoubleField](EditorGUI.DoubleField.html).


            
