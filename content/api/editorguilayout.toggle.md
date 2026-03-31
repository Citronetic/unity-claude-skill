This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).Toggle




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

public static bool Toggle(bool value,
params GUILayoutOption[] options);






## Declaration

public static bool Toggle(string label,
bool value,
params GUILayoutOption[] options);






## Declaration

public static bool Toggle([GUIContent](GUIContent.html) label,
bool value,
params GUILayoutOption[] options);






## Declaration

public static bool Toggle(bool value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static bool Toggle(string label,
bool value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static bool Toggle([GUIContent](GUIContent.html) label,
bool value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label in front of the toggle. |
| value | The shown state of the toggle. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout
        properties. Any values passed in here will override settings defined by the style.Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**bool**
        The selected state of the toggle.





### Description



Make a toggle.





[Image: image]


*Show a button if the toggle control is selected.*


              


```
using UnityEngine;
using UnityEditor;public class EditorGUILayoutToggle : UnityEditor.EditorWindow
{
    bool showBtn = true;    [MenuItem("Examples/Editor GUILayout Toggle Usage")]
    static void Init()
    {
        EditorGUILayoutToggle window = (EditorGUILayoutToggle)EditorWindow.GetWindow(typeof(EditorGUILayoutToggle), true, "My Empty Window");
        window.Show();
    }    void OnGUI()
    {
        showBtn = EditorGUILayout.Toggle("Show Button", showBtn);
        if (showBtn)
            if (GUILayout.Button("Close"))
                this.Close();
    }
}
```


            
