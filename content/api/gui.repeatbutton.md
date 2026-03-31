This version of Unity is unsupported.



# [GUI](GUI.html).RepeatButton




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

public static bool RepeatButton([Rect](Rect.html) position,
string text);






## Declaration

public static bool RepeatButton([Rect](Rect.html) position,
[Texture](Texture.html) image);






## Declaration

public static bool RepeatButton([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content);






## Declaration

public static bool RepeatButton([Rect](Rect.html) position,
string text,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static bool RepeatButton([Rect](Rect.html) position,
[Texture](Texture.html) image,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static bool RepeatButton([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the button. |
| text | Text to display on the button. |
| image | Texture to display on the button. |
| content | Text, image and tooltip for this button. |
| style | The style to use. If left out, the button style from the current GUISkin is used. |





### Returns



**bool**
        True when the users clicks the button.





### Description



Make a button that is active as long as the user holds it down.


              


```
// Draws 2 buttons, one with an image, and other with a text
// Prints a message when they get clicked.// Prints a message when they get clicked.using UnityEngine;
using System.Collections;public class Example : MonoBehaviour
{
    public Texture btnTexture;    void OnGUI()
    {
        if (!btnTexture)
        {
            Debug.LogError("Please assign a texture on the inspector");
            return;
        }        if (GUI.RepeatButton(new Rect(10, 10, 50, 50), btnTexture))
            Debug.Log("Clicked the button with an image");        if (GUI.RepeatButton(new Rect(10, 70, 50, 30), "Click"))
            Debug.Log("Clicked the button with text");
    }
}
```


            
