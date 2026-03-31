This version of Unity is unsupported.



# [Quaternion](Quaternion.html).RotateTowards




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

public static [Quaternion](Quaternion.html) RotateTowards([Quaternion](Quaternion.html) from,
[Quaternion](Quaternion.html) to,
float maxDegreesDelta);






### Parameters



| Parameter | Description |
| --- | --- |
| from | The unit quaternion to be aligned with to. |
| to | The target unit quaternion. |
| maxDegreesDelta | The maximum angle in degrees allowed for this rotation. |





### Returns



**Quaternion**
        A unit quaternion rotated towards `to` by an angular step of `maxDegreesDelta`.





### Description



Rotates a rotation `from` towards `to`.





The `from` quaternion is rotated towards `to` by an angular step of `maxDegreesDelta`. The rotation will not overshoot the `to` quaternion.
Negative values of `maxDegreesDelta` moves away from `to` until the rotation
is exactly the opposite direction.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // The object whose rotation we want to match.
    public Transform target;    // Angular speed in degrees per sec.
    public float speed = 1.0f;    void Update()
    {
        // The step size is equal to speed times frame time.
        var step = speed * Time.deltaTime;        // Rotate our transform a step closer to the target's.
        transform.rotation = Quaternion.RotateTowards(transform.rotation, target.rotation, step);
    }
}
```


            
