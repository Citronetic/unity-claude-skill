This version of Unity is unsupported.



# [Mathf](Mathf.html).MoveTowardsAngle




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

public static float MoveTowardsAngle(float current,
float target,
float maxDelta);






### Description



Same as [MoveTowards](Mathf.MoveTowards.html) but makes sure the values interpolate correctly when they wrap around 360 degrees.





Variables `current` and `target` are assumed to be in degrees.
For optimization reasons, negative values of `maxDelta` are not supported and may cause oscillation. To push `current` away from a target angle, add 180 to that angle instead.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    float target = 270.0f;
    float speed = 45.0f;    void Update()
    {
        float angle = Mathf.MoveTowardsAngle(transform.eulerAngles.y, target, speed * Time.deltaTime);
        transform.eulerAngles = new Vector3(0, angle, 0);
    }
}
```


            
