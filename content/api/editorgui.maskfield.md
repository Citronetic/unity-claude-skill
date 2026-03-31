This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).MaskField




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

public static int MaskField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
int mask,
string[] displayedOptions,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static int MaskField([Rect](Rect.html) position,
string label,
int mask,
string[] displayedOptions,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static int MaskField([Rect](Rect.html) position,
int mask,
string[] displayedOptions,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for this control. |
| label | Label for the field. |
| mask | The current mask to display. |
| displayedOption | A string array containing the labels for each flag. |
| style | Optional GUIStyle. |
| displayedOptions | A string array containing the labels for each flag. |





### Returns



**int**
        The value modified by the user.





### Description



Makes a field for masks.





**Note:** The mask values for the flags associated with each option in the menu will be consecutive powers of 2 starting with 1, i.e. 1, 2, 4, 8, 16, and so on.

[Image: image]

*Simple window that shows the mask field.*


              


```
using UnityEngine;
using UnityEditor;class SimpleMaskUsage : EditorWindow
{
    int flags = 0;
    string[] options = { "CanJump", "CanShoot", "CanSwim" };    [MenuItem("Examples/Mask Field Usage")]
    static void Init()
    {
        var window = GetWindow<SimpleMaskUsage>();
        window.Show();
    }    void OnGUI()
    {
        flags = EditorGUI.MaskField(new Rect(0, 0, 300, 20), "Player Flags", flags, options);
    }
}
```


            
