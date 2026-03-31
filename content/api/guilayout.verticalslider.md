This version of Unity is unsupported.



# [GUILayout](GUILayout.html).VerticalSlider




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

public static float VerticalSlider(float value,
float leftValue,
float rightValue,
params GUILayoutOption[] options);






## Declaration

public static float VerticalSlider(float value,
float leftValue,
float rightValue,
[GUIStyle](GUIStyle.html) slider,
[GUIStyle](GUIStyle.html) thumb,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| value | The value the slider shows. This determines the position of the draggable thumb. |
| topValue | The value at the top end of the slider. |
| bottomValue | The value at the bottom end of the slider. |
| slider | The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used. |
| thumb | The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style. |





### Returns



**float**
        The value that has been set by the user.





### Description



A vertical slider the user can drag to change a value between a min and a max.





[Image: image]


*Vertical slider in the Game View.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Draws a vertical slider control that goes from  10 (top) to 0 (bottom)
    float vSliderValue = 0.0f;    void OnGUI()
    {
        vSliderValue = GUILayout.VerticalSlider(vSliderValue, 10.0f, 0.0f);
    }
}
```


            
