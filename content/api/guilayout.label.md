This version of Unity is unsupported.



# [GUILayout](GUILayout.html).Label




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

public static void Label([Texture](Texture.html) image,
params GUILayoutOption[] options);






## Declaration

public static void Label(string text,
params GUILayoutOption[] options);






## Declaration

public static void Label([GUIContent](GUIContent.html) content,
params GUILayoutOption[] options);






## Declaration

public static void Label([Texture](Texture.html) image,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static void Label(string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static void Label([GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| text | Text to display on the label. |
| image | Texture to display on the label. |
| content | Text, image and tooltip for this label. |
| style | The style to use. If left out, the label style from the current GUISkin is used. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Make an auto-layout label.





Labels have no user interaction, do not catch mouse clicks and are always rendered in normal style. If you want to make a control that responds visually to user input, use a [Box](GUILayout.Box.html) control

[Image: image]

*Label in the Game View.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Draws a texture and a label after the Texture
    // using GUILayout.
    Texture tex;    void OnGUI()
    {
        if (!tex)
        {
            Debug.LogError("Missing texture, assign a texture in the inspector");
        }
        GUILayout.Label(tex);
        GUILayout.Label("This is an sized label");
    }
}
```


            
