This version of Unity is unsupported.



# [Color](Color.html).Lerp




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

public static [Color](Color.html) Lerp([Color](Color.html) a,
[Color](Color.html) b,
float t);






### Parameters



| Parameter | Description |
| --- | --- |
| a | The start color, returned when t = 0. |
| b | The end color, returned when t = 1. |
| t | The interpolation ratio. Will be clamped to the range [0; 1]. |





### Returns



**Color**
        The color resulting from linear interpolation between `a` and `b`.





### Description



Linearly interpolates between colors `a` and `b` using the interpolation ratio `t`.





`t` is clamped to be between 0 and 1. When `t` is 0, the function returns `a`. When `t` is 1, the function returns `b`.

The code sample sets the color of a GameObject's material to a value between white and black, based on the amount of time that has elapsed.


              


```
using UnityEngine;public class ColorLerp : MonoBehaviour
{
    Color lerpedColor = Color.white;
    Renderer renderer;    void Start()
    {
        renderer = GetComponent<Renderer>();
    }    void Update()
    {
        lerpedColor = Color.Lerp(Color.white, Color.black, Mathf.PingPong(Time.time, 1));
        renderer.material.color = lerpedColor;
    }
}
```





Additional resources: [LerpUnclamped](Color.LerpUnclamped.html).


            
