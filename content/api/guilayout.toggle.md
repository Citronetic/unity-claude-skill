This version of Unity is unsupported.



# [GUILayout](GUILayout.html).Toggle




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

public static bool Toggle(bool value,
[Texture](Texture.html) image,
params GUILayoutOption[] options);






## Declaration

public static bool Toggle(bool value,
string text,
params GUILayoutOption[] options);






## Declaration

public static bool Toggle(bool value,
[GUIContent](GUIContent.html) content,
params GUILayoutOption[] options);






## Declaration

public static bool Toggle(bool value,
[Texture](Texture.html) image,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static bool Toggle(bool value,
string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static bool Toggle(bool value,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| value | Is the button on or off? |
| text | Text to display on the button. |
| image | Texture to display on the button. |
| content | Text, image and tooltip for this button. |
| style | The style to use. If left out, the button style from the current GUISkin is used. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**bool**
        The new value of the button.





### Description



Make an on/off toggle button.





[Image: image]


*Toggle button in the Game View.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Draws 2 toggle controls, one with a text, the other with an image.
    Texture aTexture;    bool toggleTxt = false;
    bool toggleImg = false;    void OnGUI()
    {
        if (!aTexture)
        {
            Debug.LogError("Please assign a texture in the inspector.");
            return;
        }
        toggleTxt = GUILayout.Toggle(toggleTxt, "A Toggle text");
        toggleImg = GUILayout.Toggle(toggleImg, aTexture);
    }
}
```


            
