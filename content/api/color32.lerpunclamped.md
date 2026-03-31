This version of Unity is unsupported.



# [Color32](Color32.html).LerpUnclamped




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

public static [Color32](Color32.html) LerpUnclamped([Color32](Color32.html) a,
[Color32](Color32.html) b,
float t);






### Parameters



| Parameter | Description |
| --- | --- |
| a | The start color, returned when t = 0. |
| b | The end color, returned when t = 1. |
| t | The interpolation ratio. The ratio will not be clamped, and can be outside of the [0; 1] range. |





### Returns



**Color32**
        The color resulting from linear interpolation between and `a` and `b`.





### Description



Linearly interpolates between colors `a` and `b` using the interpolation ratio `t`.





`t` is clamped to be between 0 and 1. When `t` is 0, the function returns `a`. When `t` is 1, the function returns `b`.

If `t` is less than 0, or greater than 1, the result will be linearly extrapolated from `a` and `b`. For example, `Color32.LerpUnclamped(new Color32(0, 0, 0, 0), new Color32(50, 50, 50, 50), 3)` will return a color given by `new Color32(150, 150, 150, 150)`.

Since `Color32` stores each color channel as a byte, unclamped interpolation may result in integer overflow or underflow, which will cause the interpolated value to wrap around and remain inside the range of a byte. For example, `Color32.LerpUnclamped(new Color32(0, 0, 0, 0), new Color32(200, 200, 200, 200), 2)` will return a color given by `new Color32(144, 144, 144, 144)` because `(200 * 2) mod 256 = 144`.

The script below will set the color of MeshRenderer to the result of unclamped interpolation using parameters specified in the inspector. To use the script, attach it to a GameObject with a MeshRenderer.


              


```
using UnityEngine;[RequireComponent(typeof(MeshRenderer))]
public class ColorLerp : MonoBehaviour
{
    public Color32 colorA = Color.white;
    public Color32 colorB = Color.red;
    public float interpolationRatio = 0.5f;    private Material material;    private void Start()
    {
        material = GetComponent<Renderer>().material;
    }    void Update()
    {
        material.color = Color32.LerpUnclamped(colorA, colorB, interpolationRatio);
    }
}
```





Additional resources: [Lerp](Color32.Lerp.html).


            
