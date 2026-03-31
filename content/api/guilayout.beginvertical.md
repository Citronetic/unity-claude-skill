This version of Unity is unsupported.



# [GUILayout](GUILayout.html).BeginVertical




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

public static void BeginVertical(params GUILayoutOption[] options);






## Declaration

public static void BeginVertical([GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static void BeginVertical(string text,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static void BeginVertical([Texture](Texture.html) image,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static void BeginVertical([GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| text | Text to display on group. |
| image | Texture to display on group. |
| content | Text, image, and tooltip for this group. |
| style | The style to use for background image and padding values. If left out, the background is transparent. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Begin a vertical control group.





All controls rendered inside this element will be placed vertically below each other. The group must be closed with a call to EndVertical.

[Image: image]

*Vertical Layout.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void OnGUI()
    {
        // Starts a vertical group
        GUILayout.BeginVertical("box");        GUILayout.Button("I'm the top button");
        GUILayout.Button("I'm the bottom button");        GUILayout.EndVertical();
    }
}
```


            
