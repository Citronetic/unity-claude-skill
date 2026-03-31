This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).BeginFoldoutHeaderGroup




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

public static bool BeginFoldoutHeaderGroup(bool foldout,
string content,
[GUIStyle](GUIStyle.html) style = EditorStyles.foldoutHeader,
Action<Rect> menuAction,
[GUIStyle](GUIStyle.html) menuIcon);






## Declaration

public static bool BeginFoldoutHeaderGroup(bool foldout,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style = EditorStyles.foldoutHeader,
Action<Rect> menuAction,
[GUIStyle](GUIStyle.html) menuIcon);






### Parameters



| Parameter | Description |
| --- | --- |
| foldout | The shown foldout state. |
| content | The label to show. |
| style | Optional GUIStyle. |
| menuAction | The action that happens when you click the icon. |
| menuIcon | Optional GUIStyle for icon. |





### Returns



**bool**
        The foldout state selected by the user. If true, you should render sub-objects.





### Description



Make a label with a foldout arrow to the left of it.





This is useful for folder-like structures, where child objects only appear if you've unfolded the parent folder. This control cannot be nested in another BeginFoldoutHeaderGroup. To use multiple of these foldouts, you must end each method with EndFoldoutHeaderGroup.

[Image: image]

*Create a foldable header menu that hides or shows the selected Transform.*


              


```
// Create a foldable header menu that hides or shows the selected Transform position.
// If you have not selected a Transform, the Foldout item stays folded until
// you select a Transform.using UnityEditor;
using UnityEngine;public class FoldoutHeaderUsage : EditorWindow
{
    bool showPosition = true;
    string status = "Select a GameObject";    [MenuItem("Examples/Foldout Header Usage")]
    static void CreateWindow()
    {
        GetWindow<FoldoutHeaderUsage>();
    }    public void OnGUI()
    {
        showPosition = EditorGUILayout.BeginFoldoutHeaderGroup(showPosition, status);        if (showPosition)
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
        // End the Foldout Header that we began above.
        EditorGUILayout.EndFoldoutHeaderGroup();
    }
}
```





[Image: image]


*Create a menu item action that moves the selected object to 0,0,0 when you click it.*


              


```
// Create a foldable header menu that hides or shows the selected Transform position.
// If you have not selected a Transform, the Foldout item stays folded until
// you select a Transform.using UnityEditor;
using UnityEngine;public class FoldoutHeaderUsage : EditorWindow
{
    bool showPosition = true;
    string status = "Select a GameObject";    [MenuItem("Examples/Foldout Header Usage")]
    static void CreateWindow()
    {
        GetWindow<FoldoutHeaderUsage>();
    }    public void OnGUI()
    {
        showPosition = EditorGUILayout.BeginFoldoutHeaderGroup(showPosition, status, null, ShowHeaderContextMenu);        if (showPosition)
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
        // End the Foldout Header that we began above.
        EditorGUILayout.EndFoldoutHeaderGroup();
    }    void ShowHeaderContextMenu(Rect position)
    {
        var menu = new GenericMenu();
        menu.AddItem(new GUIContent("Move to (0,0,0)"), false, OnItemClicked);
        menu.DropDown(position);
    }    void OnItemClicked()
    {
        Undo.RecordObject(Selection.activeTransform, "Moving to center of world");
        Selection.activeTransform.position = Vector3.zero;
    }
}
```


            
