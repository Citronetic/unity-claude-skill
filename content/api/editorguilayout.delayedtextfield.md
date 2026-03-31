This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).DelayedTextField




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

public static string DelayedTextField(string text,
params GUILayoutOption[] options);






## Declaration

public static string DelayedTextField(string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static string DelayedTextField(string label,
string text,
params GUILayoutOption[] options);






## Declaration

public static string DelayedTextField(string label,
string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static string DelayedTextField([GUIContent](GUIContent.html) label,
string text,
params GUILayoutOption[] options);






## Declaration

public static string DelayedTextField([GUIContent](GUIContent.html) label,
string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label to display in front of the int field. |
| text | The text to edit. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**string**
        The value entered by the user. Note that the return value will not change until the user has pressed enter or focus is moved away from the text field.





### Description



Make a delayed text field.





Similar to [EditorGUILayout.TextField](EditorGUILayout.TextField.html) but will not return the new value until the user has pressed enter or focus is moved away from the text field.




---








## Declaration

public static void DelayedTextField([SerializedProperty](SerializedProperty.html) property,
params GUILayoutOption[] options);






## Declaration

public static void DelayedTextField([SerializedProperty](SerializedProperty.html) property,
[GUIContent](GUIContent.html) label,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The text property to edit. |
| label | Optional label to display in front of the int field. Pass GUIContent.none to hide label. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Make a delayed text field.





Similar to [EditorGUILayout.TextField](EditorGUILayout.TextField.html) but will not return the new value until the user has pressed enter or focus is moved away from the text field.


            
