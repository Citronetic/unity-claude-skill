This version of Unity is unsupported.



# [GUISkin](GUISkin.html).horizontalSlider




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







                    public [GUIStyle](GUIStyle.html) horizontalSlider;






### Description



Style used by default for the background part of [GUI.HorizontalSlider](GUI.HorizontalSlider.html) controls.





The padding property is used to determine the size of the area the thumb can be dragged within.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Modifies only the horizontal slider style of the current GUISkin    float hSliderValue = 0.0f;
    GUIStyle style;    void OnGUI()
    {
        GUI.skin.horizontalSlider = style;
        hSliderValue = GUILayout.HorizontalSlider(hSliderValue, 0.0f, 10.0f);
    }
}
```


            
