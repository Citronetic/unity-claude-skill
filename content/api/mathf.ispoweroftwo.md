This version of Unity is unsupported.



# [Mathf](Mathf.html).IsPowerOfTwo




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

public static bool IsPowerOfTwo(int value);






### Description



Returns true if the value is power of two.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // prints false
        Debug.Log(Mathf.IsPowerOfTwo(7));        // prints true
        Debug.Log(Mathf.IsPowerOfTwo(32));
    }
}
```


            
