This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).TextArea




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

public static string TextArea(string text,
params GUILayoutOption[] options);






## Declaration

public static string TextArea(string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| text | The text to edit. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**string**
        The text entered by the user.





### Description



Make a text area.





This works just like @@[GUILayout.TextArea](GUILayout.TextArea.html)@@ with proper responsiveness to actions like **Select all**, **Copy**, **Paste** in the Editor.

For Undo support, see [Undo.RecordObject](Undo.RecordObject.html).

To make the text wrap, set **EditorStyles.textField.wordWrap**.

[Image: image]

*Quick script editor.*


              


```
// Simple script that lets you visualize your scripts in an editor window
// This can be expanded to save your scripts also in the editor window.using UnityEngine;
using UnityEditor;public class TextAreaExample : EditorWindow
{
    string text = "Nothing Opened...";
    TextAsset txtAsset;
    Vector2 scroll;    [MenuItem("Examples/TextArea usage")]
    static void Init()
    {
        TextAreaExample window = (TextAreaExample)GetWindow(typeof(TextAreaExample), true, "EditorGUILayout.TextArea");
        window.Show();
    }    Object source;    void OnGUI()
    {
        source = EditorGUILayout.ObjectField(source, typeof(Object), true);
        TextAsset newTxtAsset = (TextAsset)source;        if (newTxtAsset != txtAsset)
            ReadTextAsset(newTxtAsset);        scroll = EditorGUILayout.BeginScrollView(scroll, GUILayout.Height(position.height - 30));
        text = EditorGUILayout.TextArea(text);
        EditorGUILayout.EndScrollView();
    }    void ReadTextAsset(TextAsset txt)
    {
        text = txt.text;
        txtAsset = txt;
    }
}
```


            
