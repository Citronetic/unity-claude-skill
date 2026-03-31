This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).Foldout




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

public static bool Foldout(bool foldout,
string content,
bool toggleOnLabelClick,
[GUIStyle](GUIStyle.html) style = EditorStyles.foldout);






## Declaration

public static bool Foldout(bool foldout,
[GUIContent](GUIContent.html) content,
bool toggleOnLabelClick,
[GUIStyle](GUIStyle.html) style = EditorStyles.foldout);






## Declaration

public static bool Foldout(bool foldout,
string content,
[GUIStyle](GUIStyle.html) style = EditorStyles.foldout);






## Declaration

public static bool Foldout(bool foldout,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style = EditorStyles.foldout);






### Parameters



| Parameter | Description |
| --- | --- |
| foldout | The shown foldout state. |
| content | The label to show. |
| style | Optional GUIStyle. |
| toggleOnLabelClick | Specifies whether clicking the label toggles the foldout state. The default value is false. Set to true to include the label in the clickable area. |





### Returns



**bool**
        The foldout state selected by the user. If true, you should render sub-objects.





### Description



Make a label with a foldout arrow to the left of it.





This is useful for creating tree or folder like structures where child objects are only shown if the parent is folded out.

[Image: image]

*Foldout in an Editor Window.*


              


```
// Create a foldable menu that hides/shows the selected transform position.
// If no Transform is selected, the Foldout item will be folded until
// a transform is selected.using UnityEditor;
using UnityEngine;public class FoldoutUsage : EditorWindow
{
    bool showPosition = true;
    string status = "Select a GameObject";    [MenuItem("Examples/Foldout Usage")]
    static void Init()
    {
        FoldoutUsage window = (FoldoutUsage)GetWindow(typeof(FoldoutUsage));
        window.Show();
    }    public void OnGUI()
    {
        showPosition = EditorGUILayout.Foldout(showPosition, status);
        if (showPosition)
            if (Selection.activeTransform)
            {
                Selection.activeTransform.position =
                    EditorGUILayout.Vector3Field("Position", Selection.activeTransform.position);
                status = Selection.activeTransform.name;
            }        if (!Selection.activeTransform)
        {
            status = "Select a GameObject";
            showPosition = false;
        }
    }    public void OnInspectorUpdate()
    {
        this.Repaint();
    }
}
```


            
