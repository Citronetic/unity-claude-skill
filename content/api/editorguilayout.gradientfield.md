This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).GradientField




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

public static [Gradient](Gradient.html) GradientField([Gradient](Gradient.html) value,
params GUILayoutOption[] options);






## Declaration

public static [Gradient](Gradient.html) GradientField(string label,
[Gradient](Gradient.html) value,
params GUILayoutOption[] options);






## Declaration

public static [Gradient](Gradient.html) GradientField([GUIContent](GUIContent.html) label,
[Gradient](Gradient.html) value,
params GUILayoutOption[] options);






## Declaration

public static [Gradient](Gradient.html) GradientField([GUIContent](GUIContent.html) label,
[Gradient](Gradient.html) value,
bool hdr,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label to display in front of the field. |
| value | The gradient to edit. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**Gradient**
        The gradient edited by the user.





### Description



Make a field for editing a [Gradient](Gradient.html).


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class EditorGUIGradientField : EditorWindow
{
    Gradient gradient = new Gradient();    [MenuItem("Examples/Gradient Field demo")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorGUIGradientField));
        window.position = new Rect(0, 0, 400, 199);
        window.Show();
    }    void OnGUI()
    {
        gradient = EditorGUILayout.GradientField(
            "Gradient", gradient);
    }
}
```


            
