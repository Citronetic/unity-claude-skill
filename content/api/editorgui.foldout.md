This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).Foldout




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

public static bool Foldout([Rect](Rect.html) position,
bool foldout,
string content,
[GUIStyle](GUIStyle.html) style = EditorStyles.foldout);






## Declaration

public static bool Foldout([Rect](Rect.html) position,
bool foldout,
string content,
bool toggleOnLabelClick,
[GUIStyle](GUIStyle.html) style = EditorStyles.foldout);






## Declaration

public static bool Foldout([Rect](Rect.html) position,
bool foldout,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style = EditorStyles.foldout);






## Declaration

public static bool Foldout([Rect](Rect.html) position,
bool foldout,
[GUIContent](GUIContent.html) content,
bool toggleOnLabelClick,
[GUIStyle](GUIStyle.html) style = EditorStyles.foldout);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the arrow and label. |
| foldout | The shown foldout state. |
| content | The label to show. |
| style | Optional GUIStyle. |
| toggleOnLabelClick | Should the label be a clickable part of the control? |





### Returns



**bool**
        The foldout state selected by the user. If true, you should render sub-objects.





### Description



Makes a label with a foldout arrow to the left of it.





This is useful for creating tree or folder like structures where child objects are only shown if the parent is folded out.

[Image: image]

*Foldout in an Editor Window.*


              


```
using UnityEditor;
using UnityEngine;
using System.Collections;// Create a foldable menu that hides/shows the selected transform position.
// if no Transform is selected, the Foldout item will be folded until a transform is selected.
public class EditorGUIFoldout : EditorWindow
{
    public bool showPosition = true;
    public string status = "Select a GameObject";
    [MenuItem("Examples/Foldout Usage")]
    static void Init()
    {
        UnityEditor.EditorWindow window = GetWindow(typeof(EditorGUIFoldout));
        window.position = new Rect(0, 0, 150, 60);
        window.Show();
    }    void OnGUI()
    {
        showPosition = EditorGUI.Foldout(new Rect(3, 3, position.width - 6, 15), showPosition, status);
        if (showPosition)
            if (Selection.activeTransform)
            {
                Selection.activeTransform.position = EditorGUI.Vector3Field(new Rect(3, 25, position.width - 6, 40), "Position", Selection.activeTransform.position);
                status = Selection.activeTransform.name;
            }        if (!Selection.activeTransform)
        {
            status = "Select a GameObject";
            showPosition = false;
        }
    }    void OnInspectorUpdate()
    {
        Repaint();
    }
}
```


            
