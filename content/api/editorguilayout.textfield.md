This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).TextField




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

public static string TextField(string text,
params GUILayoutOption[] options);






## Declaration

public static string TextField(string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static string TextField(string label,
string text,
params GUILayoutOption[] options);






## Declaration

public static string TextField(string label,
string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static string TextField([GUIContent](GUIContent.html) label,
string text,
params GUILayoutOption[] options);






## Declaration

public static string TextField([GUIContent](GUIContent.html) label,
string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label to display in front of the text field. |
| text | The text to edit. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**string**
        The text entered by the user.





### Description



Make a text field.





This works just like [GUILayout.TextField](GUILayout.TextField.html), but correctly responds to select all, copy, paste etc. in the editor,
and it can have an optional label in front.

[Image: image]

*Changes the name of the selected GameObject.*


              


```
// Automatically change the name of the selected object via a text field
using UnityEditor;
using UnityEngine;public class EditorGUILayoutTextField : EditorWindow
{
    [MenuItem("Examples/GUILayout TextField")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorGUILayoutTextField));
        window.Show();
    }    void OnGUI()
    {
        GUILayout.Label("Select an object in the hierarchy view");
        if (Selection.activeGameObject)
            Selection.activeGameObject.name =
                EditorGUILayout.TextField("Object Name: ", Selection.activeGameObject.name);
        this.Repaint();
    }
}
```


            
