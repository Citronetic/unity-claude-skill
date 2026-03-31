This version of Unity is unsupported.



# [Mathf](Mathf.html).Sign




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

public static float Sign(float f);






### Parameters



| Parameter | Description |
| --- | --- |
| f | Real number whose sign will be retrieved. |





### Returns



**float**
        Mathematical sign of `f`.





### Description



Returns the mathematical sign of `f`.





Returns either a value of -1 when `f` is negative, or a value of 1 when `f` is 0 or greater. This is different from standard 'Sign' implementations which return 0 whenever `f` equals 0.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Prints -1
        Debug.Log(Mathf.Sign(-10));
        // Prints 1
        Debug.Log(Mathf.Sign(0));
        // Prints 1
        Debug.Log(Mathf.Sign(10));
    }
}
```


            
