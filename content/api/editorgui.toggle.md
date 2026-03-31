This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).Toggle




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

public static bool Toggle([Rect](Rect.html) position,
bool value);






## Declaration

public static bool Toggle([Rect](Rect.html) position,
string label,
bool value);






## Declaration

public static bool Toggle([Rect](Rect.html) position,
bool value,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static bool Toggle([Rect](Rect.html) position,
string label,
bool value,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static bool Toggle([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
bool value);






## Declaration

public static bool Toggle([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
bool value,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the toggle. |
| label | Optional label in front of the toggle. |
| value | The shown state of the toggle. |
| style | Optional GUIStyle. |





### Returns



**bool**
        The selected state of the toggle.





### Description



Makes a toggle.





[Image: image]


*Toggle control in an Editor Window.*


              


```
// Use a toggle button to show/hide a button that can close the window.
using UnityEngine;
using UnityEditor;class EditorGUIToggle : EditorWindow
{
    bool showClose =  true;    [MenuItem("Examples/EditorGUI Toggle usage")]
    static void Init()
    {
        EditorGUIToggle window = (EditorGUIToggle)GetWindow(typeof(EditorGUIToggle), true, "My Empty Window");
        window.Show();
    }    void OnGUI()
    {
        showClose = EditorGUI.Toggle(new Rect(0, 5, position.width, 20),
            "Show Close Button",
            showClose);
        if (showClose)
            if (GUI.Button(new Rect(0, 25, position.width, 100), "Close Window!"))
                this.Close();
    }
}
```


            
