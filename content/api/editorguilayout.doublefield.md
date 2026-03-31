This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).DoubleField




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

public static double DoubleField(double value,
params GUILayoutOption[] options);






## Declaration

public static double DoubleField(double value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static double DoubleField(string label,
double value,
params GUILayoutOption[] options);






## Declaration

public static double DoubleField(string label,
double value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static double DoubleField([GUIContent](GUIContent.html) label,
double value,
params GUILayoutOption[] options);






## Declaration

public static double DoubleField([GUIContent](GUIContent.html) label,
double value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label to display in front of the double field. |
| value | The value to edit. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**double**
        The value entered by the user.





### Description



Make a text field for entering double values.





Additional resources: [FloatField](EditorGUILayout.FloatField.html), [IntField](EditorGUILayout.IntField.html), [LongField](EditorGUILayout.LongField.html).


            
