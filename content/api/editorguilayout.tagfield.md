This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).TagField




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

public static string TagField(string tag,
params GUILayoutOption[] options);






## Declaration

public static string TagField(string tag,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static string TagField(string label,
string tag,
params GUILayoutOption[] options);






## Declaration

public static string TagField(string label,
string tag,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static string TagField([GUIContent](GUIContent.html) label,
string tag,
params GUILayoutOption[] options);






## Declaration

public static string TagField([GUIContent](GUIContent.html) label,
string tag,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label in front of the field. |
| tag | The tag the field shows. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**string**
        The tag selected by the user.





### Description



Make a tag selection field.





[Image: image]


*Assign tags on the selected GameObjects.*


              


```
// Simple editor script that lets you set a tag for the selected GameObjects.
using UnityEditor;
using UnityEngine;public class EditorGUILayoutTagField : EditorWindow
{
    static string tagStr = "";    [MenuItem("Examples/Set Tags For Selection")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorGUILayoutTagField));
        window.Show();
    }    void OnGUI()
    {
        tagStr = EditorGUILayout.TagField("Tag for Objects:", tagStr);
        if (GUILayout.Button("Set Tag!"))
        {
            SetTags();
        }
    }    static void SetTags()
    {
        foreach (GameObject go in Selection.gameObjects)
        {
            go.tag = tagStr;
        }
    }
}
```


            
