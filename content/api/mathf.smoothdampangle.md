This version of Unity is unsupported.



# [Mathf](Mathf.html).SmoothDampAngle




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

public static float SmoothDampAngle(float current,
float target,
ref float currentVelocity,
float smoothTime,
float maxSpeed = Mathf.Infinity,
float deltaTime = Time.deltaTime);






### Parameters



| Parameter | Description |
| --- | --- |
| current | The current position. |
| target | The target position. |
| currentVelocity | The current velocity. This method modifies the currentVelocity every time the method is called. |
| smoothTime | The approximate time it takes to reach the target position. The lower the value the faster this method reaches the target. The minimum value is 0.0001. If a lower value is specified, it is automatically clamped to this minimum value. |
| maxSpeed | Use this optional parameter to specify a maximum speed. By default, the maximum speed is set to infinity. |
| deltaTime | The time since this method was last called. By default, this is set to `Time.deltaTime`. |





### Description



Gradually changes an angle given in degrees towards a desired goal angle over time.





This method smoothes the value with a spring-damper like algorithm that never overshoots the target value. This algorithm is based on Game Programming Gems 4, Chapter 1.10.

**Note:** This method attempts to avoid overshooting the target value. When deltaTime is 0.0f, this yields NaN for the currentVelocity. If you call back with a currentVelocity of NaN, this method returns a NaN.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    //A simple smooth follow camera,
    // that follows the targets forward direction    Transform target;
    float smooth = 0.3f;
    float distance = 5.0f;
    float yVelocity = 0.0f;    void Update()
    {
        // Damp angle from current y-angle towards target y-angle
        float yAngle = Mathf.SmoothDampAngle(transform.eulerAngles.y, target.eulerAngles.y, ref yVelocity, smooth);
        // Position at the target
        Vector3 position = target.position;
        // Then offset by distance behind the new angle
        position += Quaternion.Euler(0, yAngle, 0) * new Vector3(0, 0, -distance);
        // Apply the position
        transform.position = position;        // Look at the target
        transform.LookAt(target);
    }
}
```


            
