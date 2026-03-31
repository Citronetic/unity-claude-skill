This version of Unity is unsupported.



# [Vector3](Vector3.html).SmoothDamp




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















## Declaration

public static [Vector3](Vector3.html) SmoothDamp([Vector3](Vector3.html) current,
[Vector3](Vector3.html) target,
ref [Vector3](Vector3.html) currentVelocity,
float smoothTime,
float maxSpeed = Mathf.Infinity,
float deltaTime = Time.deltaTime);






### Parameters



| Parameter | Description |
| --- | --- |
| current | The initial position. |
| target | The position to move towards. |
| currentVelocity | The initial velocity. This value is modified by the function each time it runs in the Update function. Pass this parameter as a reference value. |
| smoothTime | Approximately the time it will take to reach the target. A smaller value will reach the target faster. |
| maxSpeed | The maximum speed to reach in the motion. By default, there is no maximum speed. |
| deltaTime | The time between calls to this function. The default value is Time.deltaTime, such that SmoothDamp is called once per frame. |





### Description



Gradually changes a vector towards a desired goal over time.





The vector is smoothed by a spring-like damper function, such that the speed slows as it nears the target position. The motion doesn't overshoot the target position.

                A common use of this method is smoothing the motion of a follow camera.


              


```
// This example creates a sphere and moves the attached GameObject to
// just in front of the sphere.
// Attach this example to a camera object to view the movement.
using UnityEngine;public class SmoothDampExample : MonoBehaviour{
    public float smoothTime = 15;
    public  Vector3 velocity = new Vector3(0,0,2);
    Vector3 targetPos;    void Start()
    {
        // Position the camera
        transform.position = new Vector3(0,3,-10);

        // Create a sphere in front and below the camera.
        Vector3 spherePos = this.transform.position + new Vector3(0,-3,20);
        GameObject sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        sphere.transform.position = spherePos;        // Set final camera target position to just in front of the sphere
        targetPos = spherePos - new Vector3(0,0,2);
    }    void Update()
    {
        // Smoothly move the camera towards that target position. The velocity
        // decreases as the camera moves closer to the target position
        transform.position = Vector3.SmoothDamp(transform.position, targetPos, ref velocity, smoothTime);
    }
}
```


            
