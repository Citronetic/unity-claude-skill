This version of Unity is unsupported.



# [EditorPrefs](EditorPrefs.html).SetString




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

public static void SetString(string key,
string value);






### Description



Sets the value of the preference identified by `key`. Note that EditorPrefs does not support null strings and will store an empty string instead.





[Image: image]


*Quick notes that last between Unity Sessions.*


              


```
// Simple Editor Script that lets you create / save quick notes
// Between Unity Sessions.using UnityEngine;
using UnityEditor;public class ExampleClass : EditorWindow
{
    string note = "Notes:\n->\n->";    [MenuItem("Examples/QuickNotes")]
    static void Init()
    {
        ExampleClass window = (ExampleClass)EditorWindow.GetWindow(typeof(ExampleClass));
        window.Show();
    }    void OnGUI()
    {
        note = EditorGUILayout.TextArea(note,
            GUILayout.Width(position.width - 5),
            GUILayout.Height(position.height - 30));
        EditorGUILayout.BeginHorizontal();
        if (GUILayout.Button("Reset"))
            note = "";
        if (GUILayout.Button("Clear Story", GUILayout.Width(72)))
        {
            note = "Notes:\n->\n->";
        }
        EditorGUILayout.EndHorizontal();
    }    void OnFocus()
    {
        if (EditorPrefs.HasKey("QuickNotes"))
            note = EditorPrefs.GetString("QuickNotes");
    }    void OnLostFocus()
    {
        EditorPrefs.SetString("QuickNotes", note);
    }    void OnDestroy()
    {
        EditorPrefs.SetString("QuickNotes", note);
    }
}
```


            
