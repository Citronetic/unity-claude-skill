This version of Unity is unsupported.



# [Mathf](Mathf.html).DeltaAngle




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

public static float DeltaAngle(float current,
float target);






### Parameters



| Parameter | Description |
| --- | --- |
| current | The current angle in degrees. |
| target | The target angle in degrees. |





### Returns



**float**
        A value between -179 and 180, in degrees.





### Description



Calculates the shortest difference between two angles.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Prints 90
        Debug.Log(Mathf.DeltaAngle(1080, 90));
    }
}
```


            
