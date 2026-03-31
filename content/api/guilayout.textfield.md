This version of Unity is unsupported.



# [GUILayout](GUILayout.html).TextField




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

public static string TextField(string text,
params GUILayoutOption[] options);






## Declaration

public static string TextField(string text,
int maxLength,
params GUILayoutOption[] options);






## Declaration

public static string TextField(string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static string TextField(string text,
int maxLength,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| text | Text to edit. The return value of this function should be assigned back to the string as shown in the example. |
| maxLength | The maximum length of the string. If left out, the user can type for ever and ever. |
| style | The style to use. If left out, the textArea style from the current GUISkin is used. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**string**
        The edited string.





### Description



Make a single-line text field where the user can edit a string.





[Image: image]


*Text field in the GameView.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    string stringToEdit = "Hello World";    void OnGUI()
    {
        // Make a text field that modifies stringToEdit.
        stringToEdit = GUILayout.TextField(stringToEdit, 25);
    }
}
```


            
