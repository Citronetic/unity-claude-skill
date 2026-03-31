This version of Unity is unsupported.



# [Mathf](Mathf.html).Round




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

public static float Round(float f);






### Parameters



| Parameter | Description |
| --- | --- |
| f | Real number to round. |





### Returns



**float**
        Nearest integer number to `f`.





### Description



Returns `f` rounded to the nearest integer number.





If the number ends in .5 so it is halfway between two integers, one of which is even and the other odd, the even number is returned.

Additional resources: [RoundToInt](Mathf.RoundToInt.html), [Ceil](Mathf.Ceil.html), [Floor](Mathf.Floor.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    // Use this for initialization
    void Start()
    {
        // Prints 10
        Debug.Log(Mathf.Round(10.0f));        // Prints 10
        Debug.Log(Mathf.Round(10.2f));        // Prints 11
        Debug.Log(Mathf.Round(10.7f));        // Prints 10
        Debug.Log(Mathf.Round(10.5f));        // Prints 12
        Debug.Log(Mathf.Round(11.5f));        // Prints -10
        Debug.Log(Mathf.Round(-10.0f));        // Prints -10
        Debug.Log(Mathf.Round(-10.2f));        // Prints -11
        Debug.Log(Mathf.Round(-10.7f));        // Prints -10
        Debug.Log(Mathf.Round(-10.5f));        // Prints -12
        Debug.Log(Mathf.Round(-11.5f));
    }
}
```


            
