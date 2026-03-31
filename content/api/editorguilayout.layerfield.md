This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).LayerField




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

public static int LayerField(int layer,
params GUILayoutOption[] options);






## Declaration

public static int LayerField(int layer,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int LayerField(string label,
int layer,
params GUILayoutOption[] options);






## Declaration

public static int LayerField(string label,
int layer,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int LayerField([GUIContent](GUIContent.html) label,
int layer,
params GUILayoutOption[] options);






## Declaration

public static int LayerField([GUIContent](GUIContent.html) label,
int layer,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label in front of the field. |
| layer | The layer shown in the field. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**int**
        The layer selected by the user.





### Description



Make a layer selection field.





[Image: image]


*Set the layer of the selected GameObjects.*


              


```
// Simple editor script that lets you set the layer for the
// selected GameObjects.using UnityEngine;
using UnityEditor;public class LayerFieldExample : EditorWindow
{
    static int selectedLayer = 0;    [MenuItem("Examples/Layer Field usage")]
    static void Init()
    {
        LayerFieldExample window = (LayerFieldExample)GetWindow(typeof(LayerFieldExample));
        window.Show();
    }    // Disable menu if we dont have at least 1 gameobject selected
    [MenuItem("Examples/Layer Field usage", true)]
    static bool ValidateSelection()
    {
        return Selection.activeGameObject != null;
    }    void OnGUI()
    {
        selectedLayer = EditorGUILayout.LayerField("Layer for Objects:", selectedLayer);
        if (GUILayout.Button("Set Layer!"))
            SetLayer();
    }    static void SetLayer()
    {
        foreach (var go in Selection.gameObjects)
            go.layer = selectedLayer;
    }
}
```


            
