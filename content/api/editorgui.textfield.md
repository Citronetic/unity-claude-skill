This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).TextField




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

public static string TextField([Rect](Rect.html) position,
string text,
[GUIStyle](GUIStyle.html) style = EditorStyles.textField);






## Declaration

public static string TextField([Rect](Rect.html) position,
string label,
string text,
[GUIStyle](GUIStyle.html) style = EditorStyles.textField);






## Declaration

public static string TextField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
string text,
[GUIStyle](GUIStyle.html) style = EditorStyles.textField);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the text field. |
| label | Optional label to display in front of the text field. |
| text | The text to edit. |
| style | Optional GUIStyle. |





### Returns



**string**
        The text entered by the user.





### Description



Makes a text field.





This works just like [GUI.TextField](GUI.TextField.html), but correctly responds to select all, copy, paste etc. in the editor,
and it can have an optional label in front.

[Image: image]

*Text field in an Editor Window.*


              


```
using UnityEngine;
using UnityEditor;// Changes the name of the selected Objects to the one typed in the text fieldclass EditorGUITextField : EditorWindow
{
    string objNames = "";    [MenuItem("Examples/Bulk Name change")]
    static void Init()
    {
        var window = GetWindow<EditorGUITextField>();
        window.Show();
    }    void OnGUI()
    {
        EditorGUI.DropShadowLabel(new Rect(0, 0, position.width, 20),
            "Select the objects to rename.");        objNames = EditorGUI.TextField(new Rect(10, 25, position.width - 20, 20),
            "New Names:",
            objNames);        if (Selection.activeTransform)
        {
            if (GUI.Button(new Rect(0, 50, position.width, 30), "Bulk rename!"))
            {
                foreach (Transform t in Selection.transforms)
                {
                    t.name = objNames;
                }
            }
        }
    }    void OnInspectorUpdate()
    {
        Repaint();
    }
}
```


            
