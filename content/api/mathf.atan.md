This version of Unity is unsupported.



# [Mathf](Mathf.html).Atan




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

public static float Atan(float f);






### Parameters



| Parameter | Description |
| --- | --- |
| f | Value to compute the arc-tangent for, in the range [-Infinity, Infinity]. |





### Returns



**float**
        Angle in radians whose tangent equals `f`, in the range [-Pi/2, Pi/2].





### Description



Returns the arc-tangent of `f` - the angle in radians whose tangent is `f`.





For values of `f` outside of the [-1,1] range, this function will return NaN.

Additional resources: [Tan](Mathf.Tan.html), [Atan2](Mathf.Atan2.html).


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
    void Start()
    {
        // Prints -1.570796
        Debug.Log(Mathf.Atan(-Mathf.Infinity));
        // Prints -0.7853982
        Debug.Log(Mathf.Atan(-1));
        // Prints 0
        Debug.Log(Mathf.Atan(0));
        // Prints 0.7853982
        Debug.Log(Mathf.Atan(1));
        // Prints 1.570796
        Debug.Log(Mathf.Atan(Mathf.Infinity));
    }
}
```


            
