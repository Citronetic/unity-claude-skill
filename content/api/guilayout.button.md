This version of Unity is unsupported.



# [GUILayout](GUILayout.html).Button




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

public static bool Button([Texture](Texture.html) image,
params GUILayoutOption[] options);






## Declaration

public static bool Button(string text,
params GUILayoutOption[] options);






## Declaration

public static bool Button([GUIContent](GUIContent.html) content,
params GUILayoutOption[] options);






## Declaration

public static bool Button([Texture](Texture.html) image,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static bool Button(string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static bool Button([GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| text | Text to display on the button. |
| image | Texture to display on the button. |
| content | Text, image and tooltip for this button. |
| style | The style to use. If left out, the button style from the current GUISkin is used. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**bool**

          `true` when the users clicks the button.





### Description



Make a single press button.





Create a [Button](GUILayout.Button.html) that can be pressed and released as
                a normal button.  When this [Button](GUILayout.Button.html) is released the Button returns the
                expected `true` value. If the mouse is moved off the button it is not clicked.

[Image: image]

*Buttons in the Game View.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Draws a button with an image and a button with text
    Texture tex;    void OnGUI()
    {
        if (!tex)
        {
            Debug.LogError("No texture found, please assign a texture on the inspector");
        }        if (GUILayout.Button(tex))
        {
            Debug.Log("Clicked the image");
        }
        if (GUILayout.Button("I am a regular Automatic Layout Button"))
        {
            Debug.Log("Clicked Button");
        }
    }
}
```


            
