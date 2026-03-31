This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).GetControlRect




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

public static [Rect](Rect.html) GetControlRect(params GUILayoutOption[] options);






## Declaration

public static [Rect](Rect.html) GetControlRect(bool hasLabel,
params GUILayoutOption[] options);






## Declaration

public static [Rect](Rect.html) GetControlRect(bool hasLabel,
float height,
params GUILayoutOption[] options);






## Declaration

public static [Rect](Rect.html) GetControlRect(bool hasLabel,
float height,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| hasLabel | Optional boolean to specify if the control has a label. Default is true. |
| height | The height in pixels of the control. Default is EditorGUIUtility.singleLineHeight. |
| style | Optional GUIStyle to use for the control. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Get a rect for an Editor control.





When creating a new Editor control it is a sound design to implement the actual control without relying on GUILayout and instead have the control take a [Rect](Rect.html) as parameter, similar to the controls in the [EditorGUI](EditorGUI.html) class. This ensures the control can also be used in for example a [PropertyDrawer](PropertyDrawer.html), which does not allow GUILayout.

Once a non-layout version of the control is implemented, a layout version can easily be made as well, which simply calls into the non-layout version. In order to get a rect fitting for the control, the GetControlRect function can be used.


            
