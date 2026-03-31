This version of Unity is unsupported.



# [Mathf](Mathf.html).ClosestPowerOfTwo




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

public static int ClosestPowerOfTwo(int value);






### Description



Returns the closest power of two value.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // prints 8
        Debug.Log(Mathf.ClosestPowerOfTwo(7));        // prints 16
        Debug.Log(Mathf.ClosestPowerOfTwo(19));
    }
}
```


            
