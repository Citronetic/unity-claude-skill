This version of Unity is unsupported.



# [Mathf](Mathf.html).Sqrt




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

public static float Sqrt(float f);






### Parameters



| Parameter | Description |
| --- | --- |
| f | Real number whose square root to calculate. |





### Returns



**float**
        Real number whose square is `f`.





### Description



Returns square root of `f` (real number whose square equals `f`).





When used with negative values, the output will be equal to NaN.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    // The formula made famous by Pythagoras, also used internally by
    // Vector3.Distance and several other standard functions.
    float HypotenuseLength(float sideALength, float sideBLength)
    {
        return Mathf.Sqrt(sideALength * sideALength + sideBLength * sideBLength);
    }
}
```


            
