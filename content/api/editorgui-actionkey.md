This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).actionKey




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












                    public static bool actionKey;






### Description



Is the platform-dependent "action" modifier key held down? (Read Only)





The key is Command on macOS, Control on Windows.

[Image: image]

*Action Key usage, key not pressed/key pressed.*


              


```
using UnityEngine;
using UnityEditor;
// Shows a password field with some "hidden" text.
// When the user presses the action key the password field becomes a text field.class EditorGUIActionKey : EditorWindow
{
    string text = "This is some text";    [MenuItem("Examples/Show Hide password")]
    static void Init()
    {
        var window = GetWindow<EditorGUIActionKey>();
        window.position = new Rect(0, 0, 250, 60);
        window.Show();
    }    void OnGUI()
    {
        // Show the contents
        if (EditorGUI.actionKey)
        {
            text = EditorGUI.TextField(new Rect(0, 5, 245, 20), "Shown  Text:", text);
        }
        else
        {
            // show the pasword field
            text = EditorGUI.PasswordField(new Rect(0, 5, 245, 20), "Hidden Text:", text);
        }
        if (GUI.Button(new Rect(0, 30, 250, 20), "Close"))
            this.Close();
    }    void OnInspectorUpdate()
    {
        Repaint();
    }
}
```


            
