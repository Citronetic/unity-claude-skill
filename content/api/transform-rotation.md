This version of Unity is unsupported.



# [Transform](Transform.html).rotation




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




                [Switch to Manual](../Manual/class-Transform.html)







                    public [Quaternion](Quaternion.html) rotation;






### Description



A [Quaternion](Quaternion.html) that stores the rotation of the Transform in world space.





[Transform.rotation](Transform-rotation.html) stores a [Quaternion](Quaternion.html). You can use [rotation](Transform-rotation.html) to rotate a GameObject or provide the current rotation.  Do not attempt to edit/modify [rotation](Transform-rotation.html). [Transform.rotation](Transform-rotation.html) is less than 180 degrees.

[Transform.rotation](Transform-rotation.html) has no gimbal lock.

To rotate a [Transform](Transform.html), use [Transform.Rotate](Transform.Rotate.html), which uses Euler Angles.

If you want to match values you see in the Inspector, use the [Quaternion.eulerAngles](Quaternion-eulerAngles.html) property on the returned [Quaternion](Quaternion.html).


              


```
using UnityEngine;// Transform.rotation example.// Rotate a GameObject using a Quaternion.
// Tilt the cube using the arrow keys. When the arrow keys are released
// the cube will be rotated back to the center using Slerp.public class ExampleScript : MonoBehaviour
{
    float smooth = 5.0f;
    float tiltAngle = 60.0f;    void Update()
    {
        // Smoothly tilts a transform towards a target rotation.
        float tiltAroundZ = Input.GetAxis("Horizontal") * tiltAngle;
        float tiltAroundX = Input.GetAxis("Vertical") * tiltAngle;        // Rotate the cube by converting the angles into a quaternion.
        Quaternion target = Quaternion.Euler(tiltAroundX, 0, tiltAroundZ);        // Dampen towards the target rotation
        transform.rotation = Quaternion.Slerp(transform.rotation, target,  Time.deltaTime * smooth);
    }
}
```





In the above example, the [rotation](Transform-rotation.html) is described by a quaternion.  For more advice, see [Rotation and Orientation in Unity](../Manual/QuaternionAndEulerRotationsInUnity.html).


            
