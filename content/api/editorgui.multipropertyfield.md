This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).MultiPropertyField




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

public static void MultiPropertyField([Rect](Rect.html) position,
GUIContent[] subLabels,
[SerializedProperty](SerializedProperty.html) valuesIterator,
[GUIContent](GUIContent.html) label);






## Declaration

public static void MultiPropertyField([Rect](Rect.html) position,
GUIContent[] subLabels,
[SerializedProperty](SerializedProperty.html) valuesIterator,
[GUIContent](GUIContent.html) label,
[EditorGUI.PropertyVisibility](EditorGUI.PropertyVisibility.html) visibility);






## Declaration

public static void MultiPropertyField([Rect](Rect.html) position,
GUIContent[] subLabels,
[SerializedProperty](SerializedProperty.html) valuesIterator);






## Declaration

public static void MultiPropertyField([Rect](Rect.html) position,
GUIContent[] subLabels,
[SerializedProperty](SerializedProperty.html) valuesIterator,
[EditorGUI.PropertyVisibility](EditorGUI.PropertyVisibility.html) visibility);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the multi-property field. |
| valuesIterator | The SerializedProperty of the first property to make a control for. |
| label | Optional label to use. If not specified the label of the property itself is used. Use GUIContent.none to not display a label at all. |
| subLabels | Array with small labels to show in front of each float field. There is room for one letter per field only. |
| visibility | Each SerializedProperty during iteration must have this visibility to be drawn. Use EditorGUI.PropertyVisibility.All to draw all SerializedProperties, regardless of its actual visibility. |





### Description



Makes a multi-control with several property fields in the same line.





The array of labels determine how many properties are shown. No more than 4 properties should be used. The displayed SerializedProperties must be consecutive. The one provided in the valuesIterator argument should be the first of them.


            
