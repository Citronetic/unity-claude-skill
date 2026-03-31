This version of Unity is unsupported.



# [GUI](GUI.html).TextArea




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
string text);






## Declaration

public static string TextArea([Rect](Rect.html) position,
string text,
int maxLength);






## Declaration

public static string TextArea([Rect](Rect.html) position,
string text,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static string TextArea([Rect](Rect.html) position,
string text,
int maxLength,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the text field. |
| text | Text to edit. The return value of this function should be assigned back to the string as shown in the example. |
| maxLength | The maximum length of the string. If left out, the user can type for ever and ever. |
| style | The style to use. If left out, the textArea style from the current GUISkin is used. |





### Returns



**string**
        The edited string.





### Description



Make a Multi-line text area where the user can edit a string.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public string stringToEdit = "Hello World\nI've got 2 lines...";    void OnGUI()
    {
        // Make a multiline text area that modifies stringToEdit.
        stringToEdit = GUI.TextArea(new Rect(10, 10, 200, 100), stringToEdit, 200);
    }
}
```


            
