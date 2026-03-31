This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).ToggleLeft




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

public static bool ToggleLeft(string label,
bool value,
params GUILayoutOption[] options);






## Declaration

public static bool ToggleLeft([GUIContent](GUIContent.html) label,
bool value,
params GUILayoutOption[] options);






## Declaration

public static bool ToggleLeft(string label,
bool value,
[GUIStyle](GUIStyle.html) labelStyle,
params GUILayoutOption[] options);






## Declaration

public static bool ToggleLeft([GUIContent](GUIContent.html) label,
bool value,
[GUIStyle](GUIStyle.html) labelStyle,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Label to display next to the toggle. |
| value | The value to edit. |
| labelStyle | Optional GUIStyle to use for the label. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Make a toggle field where the toggle is to the left and the label immediately to the right of it.





[EditorGUILayout.ToggleLeft](EditorGUILayout.ToggleLeft.html) is similar to [GUILayout.Toggle](GUILayout.Toggle.html) but
                respects the [EditorGUI.showMixedValue](EditorGUI-showMixedValue.html) property and handles keyboard focus
                consistent with other Editor controls.  [EditorGUILayout.ToggleLeft](EditorGUILayout.ToggleLeft.html) has
                the label close and to the left of the toggle.  (The [EditorGUILayout.Toggle](EditorGUILayout.Toggle.html) has the
                opposite with the label at a distance from the toggle and to the right.)





[Image: image]


*Show a button if the toggle control is selected.*


              


```
// Creates a new menu in the Editor called "Examples" with a new menu item called "ToggleLeft example"using UnityEngine;
using UnityEditor;public class Example : EditorWindow
{
    bool showBtn = true;    [MenuItem("Examples/ToggleLeft example")]
    static void Init()
    {
        Example window = (Example)EditorWindow.GetWindow(typeof(Example), true, "ToggleLeft example");
        window.Show();
    }    void OnGUI()
    {
        showBtn = EditorGUILayout.ToggleLeft("Show Button", showBtn);
        if (showBtn)
        {
            if (GUILayout.Button("Close"))
            {
                this.Close();
            }
        }
    }
}
```


            
