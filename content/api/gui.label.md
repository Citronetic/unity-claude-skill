This version of Unity is unsupported.



# [GUI](GUI.html).Label




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

public static void Label([Rect](Rect.html) position,
string text);






## Declaration

public static void Label([Rect](Rect.html) position,
[Texture](Texture.html) image);






## Declaration

public static void Label([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content);






## Declaration

public static void Label([Rect](Rect.html) position,
string text,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static void Label([Rect](Rect.html) position,
[Texture](Texture.html) image,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static void Label([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the label. |
| text | Text to display on the label. |
| image | Texture to display on the label. |
| content | Text, image and tooltip for this label. |
| style | The style to use. If left out, the label style from the current GUISkin is used. |





### Description



Make a text or texture label on screen.





Labels have no user interaction, do not catch mouse clicks and are always rendered in normal style. If you want to make a control that responds visually to user input, use a [Box](GUI.Box.html) control.

Example: Draw the classic Hello World! string:

[Image: image]

*Text label on the Game View.*


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        GUI.Label(new Rect(10, 10, 100, 20), "Hello World!");
    }
}
```





Example: Draw a texture on-screen. Labels are also used to display textures, instead of a string, simply pass in a texture:

[Image: image]

*Texture Label.*


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Texture2D textureToDisplay;    void OnGUI()
    {
        GUI.Label(new Rect(10, 40, textureToDisplay.width, textureToDisplay.height), textureToDisplay);
    }
}
```


            
