This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).BeginHorizontal




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

public static [Rect](Rect.html) BeginHorizontal(params GUILayoutOption[] options);






## Declaration

public static [Rect](Rect.html) BeginHorizontal([GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout
        properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Begin a horizontal group and get its rect back.





This is an extension to [GUILayout.BeginHorizontal](GUILayout.BeginHorizontal.html). It can be used for making compound controls.

[Image: image]

*Horizontal Compound group.*


              


```
// Create a Horizontal Compound Buttonusing UnityEngine;
using UnityEditor;public class BeginEndHorizontalExample : EditorWindow
{
    [MenuItem("Examples/Begin-End Horizontal usage")]
    static void Init()
    {
        BeginEndHorizontalExample window = (BeginEndHorizontalExample)GetWindow(typeof(BeginEndHorizontalExample));
        window.Show();
    }    void OnGUI()
    {
        Rect r = EditorGUILayout.BeginHorizontal("Button");
        if (GUI.Button(r, GUIContent.none))
            Debug.Log("Go here");
        GUILayout.Label("I'm inside the button");
        GUILayout.Label("So am I");
        EditorGUILayout.EndHorizontal();
    }
}
```


            
