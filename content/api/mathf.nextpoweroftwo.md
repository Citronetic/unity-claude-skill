This version of Unity is unsupported.



# [Mathf](Mathf.html).NextPowerOfTwo




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

public static int NextPowerOfTwo(int value);






### Description



Returns the next power of two that is equal to, or greater than, the argument.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        //Prints 8 to the console
        Debug.Log(Mathf.NextPowerOfTwo(7));        //Prints 256 to the console
        Debug.Log(Mathf.NextPowerOfTwo(139));        //Prints 256 to the console
        Debug.Log(Mathf.NextPowerOfTwo(256));
    }
}
```


            
