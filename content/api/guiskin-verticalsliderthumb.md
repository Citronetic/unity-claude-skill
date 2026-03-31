This version of Unity is unsupported.



# [GUISkin](GUISkin.html).verticalSliderThumb




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







                    public [GUIStyle](GUIStyle.html) verticalSliderThumb;






### Description



Style used by default for the thumb that is dragged in [GUI.VerticalSlider](GUI.VerticalSlider.html) controls.





The padding property is used to determine the size of the thumb.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Modifies only the vertical slider thumb style of the current GUISkin    float vSliderValue = 0.0f;
    GUIStyle style;    void OnGUI()
    {
        GUI.skin.verticalSliderThumb = style;
        vSliderValue = GUILayout.VerticalSlider(vSliderValue, 10.0f, 0.0f);
    }
}
```


            
