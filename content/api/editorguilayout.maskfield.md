This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).MaskField




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

public static int MaskField([GUIContent](GUIContent.html) label,
int mask,
string[] displayedOptions,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int MaskField(string label,
int mask,
string[] displayedOptions,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int MaskField([GUIContent](GUIContent.html) label,
int mask,
string[] displayedOptions,
params GUILayoutOption[] options);






## Declaration

public static int MaskField(string label,
int mask,
string[] displayedOptions,
params GUILayoutOption[] options);






## Declaration

public static int MaskField(int mask,
string[] displayedOptions,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int MaskField(int mask,
string[] displayedOptions,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Prefix label of the field. |
| mask | The current mask to display. |
| displayedOption | A string array containing the labels for each flag. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**int**
        The value modified by the user.





### Description



Make a field for masks.





[Image: image]


*Simple window that shows the mask field.*


              


```
using UnityEngine;
using UnityEditor;public class MaskFieldExample : EditorWindow
{
    static int flags = 0;
    static string[] options = new string[] {"CanJump", "CanShoot", "CanSwim"};    [MenuItem("Examples/Mask Field usage")]
    static void Init()
    {
        MaskFieldExample window = (MaskFieldExample)GetWindow(typeof(MaskFieldExample));
        window.Show();
    }    void OnGUI()
    {
        flags = EditorGUILayout.MaskField("Player Flags", flags, options);        // Display the flags in disabled toggles
        GUI.enabled = false;
        for (var i = 0; i < options.Length; i++)
        {
            var value = (flags & (1 << i)) != 0;
            EditorGUILayout.Toggle(options[i], value);
        }
        GUI.enabled = true;
    }
}
```


            
