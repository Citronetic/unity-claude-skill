This version of Unity is unsupported.



# [Mathf](Mathf.html).LerpAngle




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

public static float LerpAngle(float a,
float b,
float t);






### Parameters



| Parameter | Description |
| --- | --- |
| a | The start angle. A float expressed in degrees. |
| b | The end angle. A float expressed in degrees. |
| t | The interpolation value between the start and end angles. This value is clamped to the range [0, 1]. |





### Returns



**float**
        Returns the interpolated float result between angle `a` and angle `b`, based on the interpolation value `t`.





### Description



Same as [Lerp](Mathf.Lerp.html) but makes sure the values interpolate correctly when they wrap around 360 degrees.





This method returns the shortest path between the specified angles. This method wraps around values that are outside the range [-180, 180]. For example, LerpAngle(1.0f, 190.0f, 1.0f) returns -170.0f. To find the longest path use [Lerp](Mathf.Lerp.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    float minAngle = 0.0f;
    float maxAngle = 90.0f;    void Update()
    {
        float angle = Mathf.LerpAngle(minAngle, maxAngle, Time.time);
        transform.eulerAngles = new Vector3(0, angle, 0);
    }
}
```





Additional resources: [Lerp](Mathf.Lerp.html).


            
