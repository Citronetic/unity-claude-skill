This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).DropShadowLabel




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

public static void DropShadowLabel([Rect](Rect.html) position,
string text);






## Declaration

public static void DropShadowLabel([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content);






## Declaration

public static void DropShadowLabel([Rect](Rect.html) position,
string text,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static void DropShadowLabel([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Where to show the label. |
| content | Text to show
@style style to use. |





### Description



Draws a label with a drop shadow.





Not superfast, so use with caution.

[Image: image]

*Shadow Label in and editor window.*


              


```
using UnityEngine;
using UnityEditor;public class EditorGUIDropShadowLabel : EditorWindow
{
    // Write some text using a Shadow Label.
    string text = "This is some text with a Shadow Label";    [MenuItem("Examples/Shadow Label")]
    static void Init()
    {
        var window = GetWindow<EditorGUIDropShadowLabel>();
        window.position = new Rect(0, 0, 250, 60);
        window.Show();
    }    void OnGUI()
    {
        EditorGUI.DropShadowLabel(new Rect(0, 5, 245, 20), text);        if (GUI.Button(new Rect(0, 30, 250, 20), "Close"))
            this.Close();
    }    void OnInspectorUpdate()
    {
        Repaint();
    }
}
```


            
