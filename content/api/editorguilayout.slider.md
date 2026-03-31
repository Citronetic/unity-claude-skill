This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).Slider




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

public static float Slider(float value,
float leftValue,
float rightValue,
params GUILayoutOption[] options);






## Declaration

public static float Slider(string label,
float value,
float leftValue,
float rightValue,
params GUILayoutOption[] options);






## Declaration

public static float Slider([GUIContent](GUIContent.html) label,
float value,
float leftValue,
float rightValue,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label in front of the slider. |
| value | The value the slider shows. This determines the position of the draggable thumb. |
| leftValue | The value at the left end of the slider. |
| rightValue | The value at the right end of the slider. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**float**
        The value that has been set by the user.





### Description



Make a slider the user can drag to change a value between a min and a max.





[Image: image]


*Scale the selected object between a range.*


              


```
// Editor script that lets you scale the selected GameObject between 1 and 100using UnityEditor;
using UnityEngine;public class EditorGUILayoutSlider : EditorWindow
{
    static float scale = 0.0f;    [MenuItem("Examples/Editor GUILayout Slider usage")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorGUILayoutSlider));
        window.Show();
    }    void OnGUI()
    {
        scale = EditorGUILayout.Slider(scale, 1, 100);
    }    void OnInspectorUpdate()
    {
        if (Selection.activeTransform)
            Selection.activeTransform.localScale = new Vector3(scale, scale, scale);
    }
}
```




---








## Declaration

public static void Slider([SerializedProperty](SerializedProperty.html) property,
float leftValue,
float rightValue,
params GUILayoutOption[] options);






## Declaration

public static void Slider([SerializedProperty](SerializedProperty.html) property,
float leftValue,
float rightValue,
string label,
params GUILayoutOption[] options);






## Declaration

public static void Slider([SerializedProperty](SerializedProperty.html) property,
float leftValue,
float rightValue,
[GUIContent](GUIContent.html) label,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label in front of the slider. |
| property | The value the slider shows. This determines the position of the draggable thumb. |
| leftValue | The value at the left end of the slider. |
| rightValue | The value at the right end of the slider. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Make a slider the user can drag to change a value between a min and a max.


            
