This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).BeginScrollView




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

public static [Vector2](Vector2.html) BeginScrollView([Vector2](Vector2.html) scrollPosition,
params GUILayoutOption[] options);






## Declaration

public static [Vector2](Vector2.html) BeginScrollView([Vector2](Vector2.html) scrollPosition,
bool alwaysShowHorizontal,
bool alwaysShowVertical,
params GUILayoutOption[] options);






## Declaration

public static [Vector2](Vector2.html) BeginScrollView([Vector2](Vector2.html) scrollPosition,
[GUIStyle](GUIStyle.html) horizontalScrollbar,
[GUIStyle](GUIStyle.html) verticalScrollbar,
params GUILayoutOption[] options);






## Declaration

public static [Vector2](Vector2.html) BeginScrollView([Vector2](Vector2.html) scrollPosition,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static [Vector2](Vector2.html) BeginScrollView([Vector2](Vector2.html) scrollPosition,
bool alwaysShowHorizontal,
bool alwaysShowVertical,
[GUIStyle](GUIStyle.html) horizontalScrollbar,
[GUIStyle](GUIStyle.html) verticalScrollbar,
[GUIStyle](GUIStyle.html) background,
params GUILayoutOption[] options);










### Parameters



| Parameter | Description |
| --- | --- |
| scrollPosition | The position to use display. |
| style | Optional GUIStyle to use for the background. |
| background | Optional GUIStyle to use for the background. |
| alwaysShowHorizontal | Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when the content inside the ScrollView is wider than the scrollview itself. |
| alwaysShowVertical | Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when content inside the ScrollView is taller than the scrollview itself. |
| horizontalScrollbar | Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used. |
| verticalScrollbar | Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used. |





### Returns



**Vector2**
        The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.





### Description



Begin an automatically laid out scrollview.





These work just like [GUILayout.BeginScrollView](GUILayout.BeginScrollView.html) but feel more application-like and should be used in the editor

[Image: image]

*Label inside a scroll view.*


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class BeginScrollViewExample : EditorWindow
{
    Vector2 scrollPos;
    string t = "This is a string inside a Scroll view!";    [MenuItem("Examples/Begin Scroll View Example")]
    static void Init()
    {
        BeginScrollViewExample window = (BeginScrollViewExample)EditorWindow.GetWindow(typeof(BeginScrollViewExample), true, "BeginEndScrollViewExample");
        window.Show();
    }    void OnGUI()
    {
        EditorGUILayout.BeginHorizontal();
        scrollPos =
            EditorGUILayout.BeginScrollView(scrollPos, GUILayout.Width(100), GUILayout.Height(100));
        GUILayout.Label(t);
        EditorGUILayout.EndScrollView();
        if (GUILayout.Button("Add More Text", GUILayout.Width(100), GUILayout.Height(100)))
            t += " \nAnd this is more text!";
        EditorGUILayout.EndHorizontal();
        if (GUILayout.Button("Clear"))
            t = "";
    }
}
```


            
