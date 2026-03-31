This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).RectIntField




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

public static [RectInt](RectInt.html) RectIntField([RectInt](RectInt.html) value,
params GUILayoutOption[] options);






## Declaration

public static [RectInt](RectInt.html) RectIntField(string label,
[RectInt](RectInt.html) value,
params GUILayoutOption[] options);






## Declaration

public static [RectInt](RectInt.html) RectIntField([GUIContent](GUIContent.html) label,
[RectInt](RectInt.html) value,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Label to display above the field. |
| value | The value to edit. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**RectInt**
        The value entered by the user.





### Description



Make an X, Y, W & H field for entering a [RectInt](RectInt.html).


            
