This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).TagField




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

public static string TagField([Rect](Rect.html) position,
string tag,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static string TagField([Rect](Rect.html) position,
string label,
string tag,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static string TagField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
string tag,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| label | Optional label in front of the field. |
| tag | The tag the field shows. |
| style | Optional GUIStyle. |





### Returns



**string**
        The tag selected by the user.





### Description



Makes a tag selection field.





[Image: image]


*Tag field in an Editor window.*


              


```
using UnityEngine;
using UnityEditor;
// Change the Tag and/or the layer of the selected GameObjects.class EditorGUITagLayerField : EditorWindow
{
    string selectedTag = "";
    int selectedLayer = 0;    [MenuItem("Examples/Tag - Layer for Selection")]
    static void Init()
    {
        EditorWindow window = GetWindow<EditorGUITagLayerField>();
        window.position = new Rect(0, 0, 350, 70);
        window.Show();
    }    void OnGUI()
    {
        selectedTag = EditorGUI.TagField(
            new Rect(3, 3, position.width / 2 - 6, 20),
            "New Tag:",
            selectedTag);
        selectedLayer = EditorGUI.LayerField(
            new Rect(position.width / 2 + 3, 3, position.width / 2 - 6, 20),
            "New Layer:",
            selectedLayer);        if (Selection.activeGameObject)
        {
            if (GUI.Button(new Rect(3, 25, 90, 17), "Change Tags"))
            {
                foreach (GameObject go in Selection.gameObjects)
                    go.tag = selectedTag;
            }            if (GUI.Button(new Rect(position.width - 96, 25, 90, 17), "Change Layers"))
            {
                foreach (GameObject go in Selection.gameObjects)
                    go.layer = selectedLayer;
            }
        }
    }    void OnInspectorUpdate()
    {
        Repaint();
    }
}
```


            
