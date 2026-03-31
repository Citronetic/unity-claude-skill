This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).RenderingLayerMaskField




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

public static void RenderingLayerMaskField([Rect](Rect.html) position,
string label,
[SerializedProperty](SerializedProperty.html) property);






## Declaration

public static void RenderingLayerMaskField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[SerializedProperty](SerializedProperty.html) property);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for field. |
| label | Optional label in front of the field. |
| property | Serialized property which contains RenderingLayerMask struct. |





### Description



Makes a rendering layer selection field.




---








## Declaration

public static [RenderingLayerMask](RenderingLayerMask.html) RenderingLayerMaskField([Rect](Rect.html) position,
string label,
[RenderingLayerMask](RenderingLayerMask.html) layers);






## Declaration

public static [RenderingLayerMask](RenderingLayerMask.html) RenderingLayerMaskField([Rect](Rect.html) position,
string label,
[RenderingLayerMask](RenderingLayerMask.html) layers,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static [RenderingLayerMask](RenderingLayerMask.html) RenderingLayerMaskField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[RenderingLayerMask](RenderingLayerMask.html) layers);






## Declaration

public static [RenderingLayerMask](RenderingLayerMask.html) RenderingLayerMaskField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[RenderingLayerMask](RenderingLayerMask.html) layers,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for field. |
| label | Optional label in front of the field. |
| layers | Value which represents RenderingLayerMask. |
| style | Optional GUIStyle. |





### Returns



**RenderingLayerMask**
        The Rendering Layer selected by the User.





### Description



Makes a rendering layer selection field.


            
