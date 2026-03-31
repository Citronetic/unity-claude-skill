This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).DelayedIntField




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

public static int DelayedIntField(int value,
params GUILayoutOption[] options);






## Declaration

public static int DelayedIntField(int value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int DelayedIntField(string label,
int value,
params GUILayoutOption[] options);






## Declaration

public static int DelayedIntField(string label,
int value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int DelayedIntField([GUIContent](GUIContent.html) label,
int value,
params GUILayoutOption[] options);






## Declaration

public static int DelayedIntField([GUIContent](GUIContent.html) label,
int value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label to display in front of the int field. |
| value | The value to edit. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**int**
        The value entered by the user. Note that the return value will not change until the user has pressed enter or focus is moved away from the int field.





### Description



Make a delayed text field for entering integers.





Similar to [EditorGUILayout.IntField](EditorGUILayout.IntField.html) but will not return the new value until the user has pressed enter or focus is moved away from the int field.




---








## Declaration

public static void DelayedIntField([SerializedProperty](SerializedProperty.html) property,
params GUILayoutOption[] options);






## Declaration

public static void DelayedIntField([SerializedProperty](SerializedProperty.html) property,
[GUIContent](GUIContent.html) label,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The int property to edit. |
| label | Optional label to display in front of the int field. Pass GUIContent.none to hide label. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Make a delayed text field for entering integers.





Similar to [EditorGUILayout.IntField](EditorGUILayout.IntField.html) but will not return the new value until the user has pressed enter or focus is moved away from the int field.


            
