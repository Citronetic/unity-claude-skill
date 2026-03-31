This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).LabelField




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

public static void LabelField([Rect](Rect.html) position,
string label,
[GUIStyle](GUIStyle.html) style = EditorStyles.label);






## Declaration

public static void LabelField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[GUIStyle](GUIStyle.html) style = EditorStyles.label);






## Declaration

public static void LabelField([Rect](Rect.html) position,
string label,
string label2,
[GUIStyle](GUIStyle.html) style = EditorStyles.label);






## Declaration

public static void LabelField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[GUIContent](GUIContent.html) label2,
[GUIStyle](GUIStyle.html) style = EditorStyles.label);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the label field. |
| label | Label in front of the label field. |
| label2 | The label to show to the right. |
| style | Style information (color, etc) for displaying the label. |





### Description



Makes a label field. (Useful for showing read-only info.)





[Image: image]


*Shows a label in an editor window with the seconds since the editor started.*


              


```
// Shows a label in the editor with the seconds since the editor startedusing UnityEditor;
using UnityEngine;
using System.Collections;//Select the dependencies of the found GameObject
public class EditorGUIObjectField : EditorWindow
{
    [MenuItem("Examples/EditorGUI Label Usage")]
    static void Init()
    {
        UnityEditor.EditorWindow window = GetWindow(typeof(EditorGUIObjectField));
        window.Show();
    }    void OnGUI()
    {
        EditorGUI.LabelField(new Rect(3, 3, position.width, 20),
            "Time since start: ",
            EditorApplication.timeSinceStartup.ToString());
        this.Repaint();
    }
}
```


            
