This version of Unity is unsupported.



# [Mathf](Mathf.html).Ceil




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

public static float Ceil(float f);






### Parameters



| Parameter | Description |
| --- | --- |
| f | Real number to round up. |





### Returns



**float**
        Smallest integer number greater than `f`.





### Description



Returns the smallest integer number greater than or equal to `f`.





When used with negative numbers, consider that values closer to 0 are considered greater than values closer to -Infinity.

Additional resources: [CeilToInt](Mathf.CeilToInt.html), [Floor](Mathf.Floor.html), [FloorToInt](Mathf.FloorToInt.html), [Round](Mathf.Round.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        // Prints 10.0f
        Debug.Log(Mathf.Ceil(10.0f));
        // Prints 11.0f
        Debug.Log(Mathf.Ceil(10.2f));
        // Prints 11.0f
        Debug.Log(Mathf.Ceil(10.7f));        // Prints -10.0f
        Debug.Log(Mathf.Ceil(-10.0f));
        // Prints -10.0f
        Debug.Log(Mathf.Ceil(-10.2f));
        // Prints -10.0f
        Debug.Log(Mathf.Ceil(-10.7f));
    }
}
```


            
