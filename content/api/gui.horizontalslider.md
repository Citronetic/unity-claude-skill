This version of Unity is unsupported.



# [GUI](GUI.html).HorizontalSlider




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

public static float HorizontalSlider([Rect](Rect.html) position,
float value,
float leftValue,
float rightValue);






## Declaration

public static float HorizontalSlider([Rect](Rect.html) position,
float value,
float leftValue,
float rightValue,
[GUIStyle](GUIStyle.html) slider,
[GUIStyle](GUIStyle.html) thumb);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the slider. |
| value | The value the slider shows. This determines the position of the draggable thumb. |
| leftValue | The value at the left end of the slider. |
| rightValue | The value at the right end of the slider. |
| slider | The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used. |
| thumb | The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used. |





### Returns



**float**
        The value that has been set by the user.





### Description



A horizontal slider the user can drag to change a value between a min and a max.


              


```
// Draws a horizontal slider control that goes from 0 to 10.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public float hSliderValue = 0.0F;    void OnGUI()
    {
        hSliderValue = GUI.HorizontalSlider(new Rect(25, 25, 100, 30), hSliderValue, 0.0F, 10.0F);
    }
}
```


            
