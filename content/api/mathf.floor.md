This version of Unity is unsupported.



# [Mathf](Mathf.html).Floor




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

public static float Floor(float f);






### Parameters



| Parameter | Description |
| --- | --- |
| f | Real number to round down. |





### Returns



**float**
        Greatest integer number smaller than `f`.





### Description



Returns the greatest integer number smaller than or equal to `f`.





When used with negative numbers, consider that values closer to 0 are considered greater than values closer to -Infinity.

Additional resources: [FloorToInt](Mathf.FloorToInt.html), [Ceil](Mathf.Ceil.html), [Round](Mathf.Round.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        // Prints 10.0f
        Debug.Log(Mathf.Floor(10.0f));
        // Prints 10.0f
        Debug.Log(Mathf.Floor(10.2f));
        // Prints 10.0f
        Debug.Log(Mathf.Floor(10.7f));        // Prints -10.0f
        Debug.Log(Mathf.Floor(-10.0f));
        // Prints -11.0f
        Debug.Log(Mathf.Floor(-10.2f));
        // Prints -11.0f
        Debug.Log(Mathf.Floor(-10.7f));
    }
}
```


            
