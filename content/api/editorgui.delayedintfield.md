This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).DelayedIntField




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

public static int DelayedIntField([Rect](Rect.html) position,
int value,
[GUIStyle](GUIStyle.html) style = EditorStyles.numberField);






## Declaration

public static int DelayedIntField([Rect](Rect.html) position,
string label,
int value,
[GUIStyle](GUIStyle.html) style = EditorStyles.numberField);






## Declaration

public static int DelayedIntField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
int value,
[GUIStyle](GUIStyle.html) style = EditorStyles.numberField);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the int field. |
| label | Optional label to display in front of the int field. |
| value | The value to edit. |
| style | Optional GUIStyle. |





### Returns



**int**
        The value entered by the user. Note that the return value will not change until the user has pressed enter or focus is moved away from the int field.





### Description



Makes a delayed text field for entering integers.





Similar to [EditorGUI.IntField](EditorGUI.IntField.html) but will not return the new value until the user has pressed enter or focus is moved away from the int field.




---








## Declaration

public static void DelayedIntField([Rect](Rect.html) position,
[SerializedProperty](SerializedProperty.html) property,
[GUIContent](GUIContent.html) label = null);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the int field. |
| property | The int property to edit. |
| label | Optional label to display in front of the int field. Pass GUIContent.none to hide label. |





### Description



The value entered by the user. Note that the return value will not change until the user has pressed enter or focus is moved away from the int field.





Similar to [EditorGUI.IntField](EditorGUI.IntField.html) but will not return the new value until the user has pressed enter or focus is moved away from the int field.


            
