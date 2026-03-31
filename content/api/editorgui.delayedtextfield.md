This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).DelayedTextField




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

public static string DelayedTextField([Rect](Rect.html) position,
string text,
[GUIStyle](GUIStyle.html) style = EditorStyles.textField);






## Declaration

public static string DelayedTextField([Rect](Rect.html) position,
string label,
string text,
[GUIStyle](GUIStyle.html) style = EditorStyles.textField);






## Declaration

public static string DelayedTextField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
string text,
[GUIStyle](GUIStyle.html) style = EditorStyles.textField);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the text field. |
| label | Optional label to display in front of the int field. |
| text | The value to edit. |
| style | Optional GUIStyle. |





### Returns



**string**
        The value entered by the user. Note that the return value will not change until the user has pressed enter or focus is moved away from the text field.





### Description



Makes a delayed text field.





Similar to [EditorGUI.TextField](EditorGUI.TextField.html) but will not return the new value until the user has pressed enter or focus is moved away from the text field.




---








## Declaration

public static void DelayedTextField([Rect](Rect.html) position,
[SerializedProperty](SerializedProperty.html) property,
[GUIContent](GUIContent.html) label = null);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the text field. |
| property | The text property to edit. |
| label | Optional label to display in front of the int field. Pass GUIContent.none to hide label. |





### Description



Makes a delayed text field.





Similar to [EditorGUI.TextField](EditorGUI.TextField.html) but will not return the new value until the user has pressed enter or focus is moved away from the text field.


            
