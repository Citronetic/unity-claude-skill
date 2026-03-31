This version of Unity is unsupported.



# [Quaternion](Quaternion.html).LookRotation




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




                [Switch to Manual](../Manual/class-Quaternion.html)










## Declaration

public static [Quaternion](Quaternion.html) LookRotation([Vector3](Vector3.html) forward,
[Vector3](Vector3.html) upwards = Vector3.up);






### Parameters



| Parameter | Description |
| --- | --- |
| forward | The direction to look in, in world coordinates. |
| upwards | The vector that defines in which direction up is, in world coordinates. |





### Description



Creates a rotation with the specified `forward` and `upwards` directions.





Z axis will be aligned with `forward`, X axis aligned with cross product between `forward` and `upwards`, and Y axis aligned with cross product between Z and X.

If the `forward` vector is zero, the method logs an error in the console and returns `identity`.

If `forward` and `upwards` are colinear, or if the magnitude of `upwards` is zero, the result is the same as [Quaternion.FromToRotation](Quaternion.FromToRotation.html) with `fromDirection` set to the positive Z-axis (0, 0, 1) and `toDirection` set to the normalized `forward` direction.


              


```
// You can also use transform.LookAtusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Transform target;    void Update()
    {
        Vector3 relativePos = target.position - transform.position;        // the second argument, upwards, defaults to Vector3.up
        Quaternion rotation = Quaternion.LookRotation(relativePos, Vector3.up);
        transform.rotation = rotation;
    }
}
```





Additional resources: [SetLookRotation](Quaternion.SetLookRotation.html).


            
