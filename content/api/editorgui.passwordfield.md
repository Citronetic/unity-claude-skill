This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).PasswordField




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

public static string PasswordField([Rect](Rect.html) position,
string password,
[GUIStyle](GUIStyle.html) style = EditorStyles.textField);






## Declaration

public static string PasswordField([Rect](Rect.html) position,
string label,
string password,
[GUIStyle](GUIStyle.html) style = EditorStyles.textField);






## Declaration

public static string PasswordField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
string password,
[GUIStyle](GUIStyle.html) style = EditorStyles.textField);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the password field. |
| label | Optional label to display in front of the password field. |
| password | The password to edit. |
| style | Optional GUIStyle. |





### Returns



**string**
        The password entered by the user.





### Description



Makes a text field where the user can enter a password.





This works just like [GUI.PasswordField](GUI.PasswordField.html), but correctly responds to select all, etc. in the editor,
and it can have an optional label in front.

[Image: image]

*Password Field in an Editor Window.*


              


```
using UnityEngine;
using UnityEditor;// Editor Script that creates a password field and lets you visualize what have you
// typed in a label.class EditorGUIPasswordField : EditorWindow
{
    string text = "Some text here";    [MenuItem("Examples/Editor Password field usage")]
    static void Init()
    {
        EditorWindow window = GetWindow<EditorGUIPasswordField>();
        window.Show();
    }    void OnGUI()
    {
        text = EditorGUI.PasswordField(
            new Rect(3, 3, position.width - 6, 20),
            "Type Something:",
            text);        EditorGUI.LabelField(
            new Rect(3, 25, position.width - 5, 20),
            "Written Text:",
            text);
    }
}
```


            
