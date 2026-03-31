This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).TextArea




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

public static string TextArea([Rect](Rect.html) position,
string text,
[GUIStyle](GUIStyle.html) style = EditorStyles.textField);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the text field. |
| text | The text to edit. |
| style | Optional GUIStyle. |





### Returns



**string**
        The text entered by the user.





### Description



Makes a text area.





This works just like [GUI.TextArea](GUI.TextArea.html), but correctly responds to select all, copy, paste etc. in the editor.

[Image: image]

*Text Area in an Editor Window.*


              


```
using UnityEngine;
using UnityEditor;// Create a window where you can have notes
// This doesnt preserve the notes between sessions.
//
// check EditorPrefs Get/SetString to save the notes.class EditorGUITextArea : EditorWindow
{
    string note = "Notes:\n->";    [MenuItem("Examples/Notes")]
    static void Init()
    {
        EditorWindow window = GetWindow<EditorGUITextArea>();
        window.position = new Rect(0, 0, 350, 70);
        window.Show();
    }    void OnGUI()
    {
        note = EditorGUI.TextArea(new Rect(3, 3, position.width - 6, position.height - 35), note);
        if (GUI.Button(new Rect(0, position.height - 30, position.width, 25), "Close"))
        {
            this.Close();
        }
    }
}
```


            
