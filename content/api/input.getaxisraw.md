This version of Unity is unsupported.



# [Input](Input.html).GetAxisRaw




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

public static float GetAxisRaw(string axisName);






### Description



Returns the value of the virtual axis identified by `axisName` with no smoothing filtering applied.





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).

The value will be in the range -1...1 for keyboard and joystick input.
Since input is not smoothed, keyboard input will always be either -1, 0 or 1.
This is useful if you want to do all smoothing of keyboard input processing yourself.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        float speed = Input.GetAxisRaw("Horizontal") * Time.deltaTime;
        transform.Rotate(0, speed, 0);
    }
}
```





The [GetAxis](Input.GetAxis.html) page describes in detail what the `axisName` for [GetAxisRaw](Input.GetAxisRaw.html) means.  For example the `Horizontal` axis is managed by `Left` and `Right`, and `a` and `d` keys.  Other Input Axes can be seen in the `Edit->Settings->Input` window.


            
