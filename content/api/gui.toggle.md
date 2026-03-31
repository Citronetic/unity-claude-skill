This version of Unity is unsupported.



# [GUI](GUI.html).Toggle




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

public static bool Toggle([Rect](Rect.html) position,
bool value,
string text);






## Declaration

public static bool Toggle([Rect](Rect.html) position,
bool value,
[Texture](Texture.html) image);






## Declaration

public static bool Toggle([Rect](Rect.html) position,
bool value,
[GUIContent](GUIContent.html) content);






## Declaration

public static bool Toggle([Rect](Rect.html) position,
bool value,
string text,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static bool Toggle([Rect](Rect.html) position,
bool value,
[Texture](Texture.html) image,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static bool Toggle([Rect](Rect.html) position,
bool value,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the button. |
| value | Is this button on or off? |
| text | Text to display on the button. |
| image | Texture to display on the button. |
| content | Text, image and tooltip for this button. |
| style | The style to use. If left out, the toggle style from the current GUISkin is used. |





### Returns



**bool**
        The new value of the button.





### Description



Make an on/off toggle button.


              


```
// Draws 2 toggle controls, one with a text, the other with an image.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Texture aTexture;    private bool toggleTxt = false;
    private bool toggleImg = false;    void OnGUI()
    {
        if (!aTexture)
        {
            Debug.LogError("Please assign a texture in the inspector.");
            return;
        }        toggleTxt = GUI.Toggle(new Rect(10, 10, 100, 30), toggleTxt, "A Toggle text");
        toggleImg = GUI.Toggle(new Rect(10, 50, 50, 50), toggleImg, aTexture);
    }
}
```


            
