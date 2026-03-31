This version of Unity is unsupported.



# [GUILayout](GUILayout.html).FlexibleSpace




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

public static void FlexibleSpace();






### Description



Insert a flexible space element.





Flexible spaces use up any leftover space in a layout.

**Note:** This will override the [GUILayout.ExpandWidth](GUILayout.ExpandWidth.html) and [GUILayout.ExpandHeight](GUILayout.ExpandHeight.html)

[Image: image]

*Flexible Space in a GUILayout Area.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    float sliderValue = 1.0f;    void OnGUI()
    {
        // Wrap everything in the designated GUI Area
        GUILayout.BeginArea(new Rect(0, 0, 200, 60));
        // Begin the singular Horizontal Group
        GUILayout.BeginHorizontal();
        // Place a Button normally
        GUILayout.RepeatButton("A button with\ntwo lines");
        // Place a space between the button and the vertical area
        // so it fits the whole area
        GUILayout.FlexibleSpace();
        // Arrange two more Controls vertically beside the Button
        GUILayout.BeginVertical();
        GUILayout.Box("Value:" + Mathf.Round(sliderValue));
        sliderValue = GUILayout.HorizontalSlider(sliderValue, 0.0f, 10f);        // End the Groups and Area
        GUILayout.EndVertical();
        GUILayout.EndHorizontal();
        GUILayout.EndArea();
    }
}
```


            
