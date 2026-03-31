This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).PasswordField




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

public static string PasswordField(string password,
params GUILayoutOption[] options);






## Declaration

public static string PasswordField(string password,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static string PasswordField(string label,
string password,
params GUILayoutOption[] options);






## Declaration

public static string PasswordField(string label,
string password,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static string PasswordField([GUIContent](GUIContent.html) label,
string password,
params GUILayoutOption[] options);






## Declaration

public static string PasswordField([GUIContent](GUIContent.html) label,
string password,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label to display in front of the password field. |
| password | The password to edit. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**string**
        The password entered by the user.





### Description



Make a text field where the user can enter a password.





This works just like [GUILayout.PasswordField](GUILayout.PasswordField.html), but correctly responds to select all, etc. in the editor,
and it can have an optional label in front.

[Image: image]

*Simple window that visualizes what you have typed in the password field.*


              


```
// Editor Script that creates a password field and lets you
// visualize what have you typed in a label.using UnityEditor;
using UnityEngine;public class ExampleClass : EditorWindow
{
    string text  = "Some text here";    [MenuItem("Examples/Editor Password field usage")]
    static void Init()
    {
        ExampleClass window = (ExampleClass)GetWindow(typeof(ExampleClass));
        window.Show();
    }    void OnGUI()
    {
        text = EditorGUILayout.PasswordField("Type Something:", text);
        EditorGUILayout.LabelField("Written Text:", text);
    }
}
```


            
