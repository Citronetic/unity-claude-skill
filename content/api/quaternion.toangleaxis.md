This version of Unity is unsupported.



# [Quaternion](Quaternion.html).ToAngleAxis




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

public void ToAngleAxis(out float angle,
out [Vector3](Vector3.html) axis);






### Parameters



| Parameter | Description |
| --- | --- |
| angle | The rotation angle in degrees. The value is in the range [0, 360]. |
| axis | The axis of rotation as a normalized Vector3. If the quaternion represents no rotation, the axis defaults to Vector3.right. |





### Description



Converts a rotation to angle-axis representation.





This method decomposes the quaternion into an angle (in degrees) and a unit vector representing the axis of rotation. Normalize the quaternion before calling this method, otherwise Unity throws an exception.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Extracts the angle - axis from euler angle rotation
        Quaternion rotation = Quaternion.Euler(0, 90, 0);
        rotation.ToAngleAxis(out float angle, out Vector3 axis);
        // angle is 90
        // axis is (0, 1, 0)        // Extracts the angle - axis rotation from the transform rotation
        float transformRotationAngle = 0.0f;
        Vector3 transformRotationAxis = Vector3.zero;
        transform.rotation.ToAngleAxis(out transformRotationAngle, out transformRotationAxis);
    }
}
```


            
