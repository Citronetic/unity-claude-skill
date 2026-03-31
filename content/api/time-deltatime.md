This version of Unity is unsupported.



# [Time](Time.html).deltaTime




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












                    public static float deltaTime;






### Description



The interval in seconds from the last frame to the current one (Read Only).





When this is called from inside [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html), it returns [Time.fixedDeltaTime](Time-fixedDeltaTime.html). The maximum value for `deltaTime` is defined by [Time.maximumDeltaTime](Time-maximumDeltaTime.html).

`deltaTime` inside [MonoBehaviour.OnGUI](MonoBehaviour.OnGUI.html) is not reliable, because Unity might call it multiple times per frame.

The following example rotates a GameObject around its z axis at a constant speed.

See [Time and Frame Rate Management](../Manual/managing-time-and-frame-rate.html) in the User Manual for more information about how this property relates to the other Time properties.


              


```
using UnityEngine;
// Rotate around the z axis at a constant speed
public class ConstantRotation : MonoBehaviour
{
    public float degreesPerSecond = 2.0f;
    void Update()
    {
        transform.Rotate(0, 0, degreesPerSecond * Time.deltaTime);
    }
}
```





The following example implements a timer. The timer adds deltaTime each frame. The example displays the timer value
                and resets it when it reaches 2 seconds. [Time.timeScale](Time-timeScale.html) controls the speed at which time passes and how fast the timer resets.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;// Time.deltaTime example.
//
// Wait two seconds and display waited time.
// This is typically just beyond 2 seconds.
// Allow the speed of the time to be increased or decreased.
// It can range between 0.5 and 2.0. These changes only
// happen when the timer restarts.public class ScriptExample : MonoBehaviour
{
    private float waitTime = 2.0f;
    private float timer = 0.0f;
    private float visualTime = 0.0f;
    private int width, height;
    private float value = 10.0f;
    private float scrollBar = 1.0f;    void Awake()
    {
        width = Screen.width;
        height = Screen.height;
        Time.timeScale = scrollBar;
    }    void Update()
    {
        timer += Time.deltaTime;        // Check if we have reached beyond 2 seconds.
        // Subtracting two is more accurate over time than resetting to zero.
        if (timer > waitTime)
        {
            visualTime = timer;            // Remove the recorded 2 seconds.
            timer = timer - waitTime;
            Time.timeScale = scrollBar;
        }
    }    void OnGUI()
    {
        GUIStyle sliderDetails = new GUIStyle(GUI.skin.GetStyle("horizontalSlider"));
        GUIStyle sliderThumbDetails = new GUIStyle(GUI.skin.GetStyle("horizontalSliderThumb"));
        GUIStyle labelDetails = new GUIStyle(GUI.skin.GetStyle("label"));        // Set the size of the fonts and the width/height of the slider.
        labelDetails.fontSize = 6 * (width / 200);
        sliderDetails.fixedHeight = height / 32;
        sliderDetails.fontSize = 12 * (width / 200);
        sliderThumbDetails.fixedHeight = height / 32;
        sliderThumbDetails.fixedWidth = width / 32;        // Show the slider. Make the scale to be ten times bigger than the needed size.
        value = GUI.HorizontalSlider(new Rect(width / 8, height / 4, width - (4 * width / 8), height - (2 * height / 4)),
            value, 5.0f, 20.0f, sliderDetails, sliderThumbDetails);        // Show the value from the slider. Make sure that 0.5, 0.6... 1.9, 2.0 are shown.
        float v = ((float)Mathf.RoundToInt(value)) / 10.0f;
        GUI.Label(new Rect(width / 8, height / 3.25f, width - (2 * width / 8), height - (2 * height / 4)),
            "timeScale: " + v.ToString("f1"), labelDetails);
        scrollBar = v;        // Display the recorded time in a certain size.
        labelDetails.fontSize = 14 * (width / 200);
        GUI.Label(new Rect(width / 8, height / 2, width - (2 * width / 8), height - (2 * height / 4)),
            "Timer value is: " + visualTime.ToString("f4") + " seconds.", labelDetails);
    }
}
```


            
