This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).BoundsField




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

public static [Bounds](Bounds.html) BoundsField([Rect](Rect.html) position,
[Bounds](Bounds.html) value);






## Declaration

public static [Bounds](Bounds.html) BoundsField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[Bounds](Bounds.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| label | Optional label to display above the field. |
| value | The value to edit. |





### Returns



**Bounds**
        The value entered by the user.





### Description



Makes Center and Extents field for entering a [Bounds](Bounds.html).





[Image: image]


*Bounds field in an Editor Window.*

See also  [Extending the editor](../Manual/ExtendingTheEditor.html).


              


```
using UnityEngine;
using UnityEditor;
// Simple script that shows radius of bounds of selected MeshFilterclass EditorGUILayoutBoundsField : EditorWindow
{
    float radius = 0;
    Bounds bounds;    [MenuItem("Examples/Show Radius of mesh bounds")]
    static void Init()
    {
        var window = GetWindow<EditorGUILayoutBoundsField>();
        window.Show();
    }    void OnGUI()
    {
        GUILayout.Label("Select a mesh in the Hierarchy view and click 'Capture Bounds'");
        EditorGUILayout.BeginHorizontal();
        bounds = EditorGUILayout.BoundsField("Mesh bounds:", bounds);        if (GUILayout.Button("Capture Bounds") && Selection.activeTransform)
        {
            MeshFilter meshFilter = Selection.activeTransform.GetComponentInChildren<MeshFilter>();
            if (meshFilter)
            {
                bounds = meshFilter.sharedMesh.bounds;
            }
        }
        EditorGUILayout.EndHorizontal();        EditorGUILayout.LabelField("Radius:", bounds.size.magnitude.ToString());
        if (GUILayout.Button("Close"))
        {
            this.Close();
        }
    }
}
```


            
