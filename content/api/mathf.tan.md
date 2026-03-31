This version of Unity is unsupported.



# [Mathf](Mathf.html).Tan




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




                [Switch to Manual](../Manual/class-Mathf.html)










## Declaration

public static float Tan(float f);






### Parameters



| Parameter | Description |
| --- | --- |
| f | The input angle, in radians. |





### Returns



**float**
        The return value in the range (-Infinity, Infinity).





### Description



Returns the tangent of angle `f` in radians.





The tangent trigonometric function has two properties than are worth considering:
- It has two vertical asymptotes at `f` = ±π/2. This means that when approaching these `f` values, the output of the function will grow towards ±Infinity (without ever reaching them).
- It is periodic at π intervals, which means that the output for a value `f` will be the same than the output for value `f` + π (or 2π, 3π, etc.)

Additional resources: [Cos](Mathf.Cos.html), [Sin](Mathf.Sin.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        // Prints 2.287733E+07
        Debug.Log(Mathf.Tan(-Mathf.PI / 2.0f));
        // Prints 0
        Debug.Log(Mathf.Tan(0.0f));
        // Prints 2.287733E+07
        Debug.Log(Mathf.Tan(Mathf.PI / 2.0f));
        // Prints 1
        Debug.Log(Mathf.Tan(Mathf.PI / 4.0f));
        // Prints 1
        Debug.Log(Mathf.Tan(Mathf.PI + Mathf.PI / 4.0f));
    }
}
```


            
