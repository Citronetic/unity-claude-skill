This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).LabelField




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

public static void LabelField(string label,
params GUILayoutOption[] options);






## Declaration

public static void LabelField(string label,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static void LabelField([GUIContent](GUIContent.html) label,
params GUILayoutOption[] options);






## Declaration

public static void LabelField([GUIContent](GUIContent.html) label,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static void LabelField(string label,
string label2,
params GUILayoutOption[] options);






## Declaration

public static void LabelField(string label,
string label2,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static void LabelField([GUIContent](GUIContent.html) label,
[GUIContent](GUIContent.html) label2,
params GUILayoutOption[] options);






## Declaration

public static void LabelField([GUIContent](GUIContent.html) label,
[GUIContent](GUIContent.html) label2,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Label in front of the label field. |
| label2 | The label to show to the right. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Make a label field. (Useful for showing read-only info.)





[Image: image]


*Shows a label in the editor (Label) with the seconds since the editor started (Label2).*


              


```
// Shows a label in the editor with the seconds since the editor started
using UnityEditor;
using UnityEngine;public class LabelFieldExample : EditorWindow
{
    [MenuItem("Examples/Editor GUILayout Label Usage")]
    static void Init()
    {
        LabelFieldExample window = (LabelFieldExample)EditorWindow.GetWindow(typeof(LabelFieldExample), true, "My Empty Window");
        window.Show();
    }    void OnGUI()
    {
        EditorGUILayout.LabelField("Time since start: ",
            EditorApplication.timeSinceStartup.ToString());
        this.Repaint();
    }
}
```


            
