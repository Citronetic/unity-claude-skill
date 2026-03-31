This version of Unity is unsupported.



# [GUISkin](GUISkin.html).verticalScrollbarThumb




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




                [Switch to Manual](../Manual/class-GUISkin.html)







                    public [GUIStyle](GUIStyle.html) verticalScrollbarThumb;






### Description



Style used by default for the thumb that is dragged in [GUI.VerticalScrollbar](GUI.VerticalScrollbar.html) controls.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Modifies only the vertical scrollbar thumb of the current GUISkin    float hSbarValue;
    GUIStyle style;    void OnGUI()
    {
        GUI.skin.verticalScrollbarThumb = style;
        hSbarValue = GUILayout.VerticalScrollbar(hSbarValue, 1.0f, 0.0f, 10.0f);
    }
}
```


            
