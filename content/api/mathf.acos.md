This version of Unity is unsupported.



# [Mathf](Mathf.html).Acos




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

public static float Acos(float f);






### Parameters



| Parameter | Description |
| --- | --- |
| f | Value to compute the arc-cosine for, in the range [-1,1]. |





### Returns



**float**
        Angle in radians whose cosine equals `f`, in the range [0, Pi].





### Description



Returns the arc-cosine of `f` - the angle in radians whose cosine is `f`.





For values of `f` outside of the [-1,1] range, this function will return NaN.

Additional resources: [Cos](Mathf.Cos.html).


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
    void Start()
    {
        // Prints NaN
        Debug.Log(Mathf.Acos(-1.0000001f));
        // Prints 3.141593
        Debug.Log(Mathf.Acos(-1));
        // Prints 1.570796
        Debug.Log(Mathf.Acos(0));
        // Prints 0
        Debug.Log(Mathf.Acos(1));
        // Prints NaN
        Debug.Log(Mathf.Acos(1.0000001f));
    }
}
```


            
