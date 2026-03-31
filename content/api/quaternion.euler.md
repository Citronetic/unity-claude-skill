This version of Unity is unsupported.



# [Quaternion](Quaternion.html).Euler




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

public static [Quaternion](Quaternion.html) Euler(float x,
float y,
float z);






### Parameters



| Parameter | Description |
| --- | --- |
| x | Rotation in degrees around the x-axis. |
| y | Rotation in degrees around the y-axis. |
| z | Rotation in degrees around the z-axis. |





### Returns



**Quaternion**
        The Euler angle rotation specified by the angles x,y,z converted to a Quaternion. The rotation order is ZXY.





### Description



Converts an input Euler angle rotation specified as three floats to a Quaternion.





Returns a rotation that rotates z degrees around the z-axis, x degrees around the x-axis, and y degrees around the y-axis. Rotations are applied in ZXY order. The output is represented as a Quaternion. The rotation direction is counter-clockwise when looking from the origin along the axis of rotation. For more information, refer to [Rotation and Orientation in Unity](../Manual/QuaternionAndEulerRotationsInUnity.html).


              


```
using UnityEngine;public class EulerToQuaternionExample : MonoBehaviour
{
    void Start()
    {
        // A rotation 30 degrees around the y-axis
        Quaternion rotation = Quaternion.Euler(0, 30, 0);
        // apply the rotation to this object
        transform.SetLocalPositionAndRotation(transform.localPosition, rotation);
    }
}
```




---








## Declaration

public static [Quaternion](Quaternion.html) Euler([Vector3](Vector3.html) euler);






### Parameters



| Parameter | Description |
| --- | --- |
| euler | The x,y,z vector components of euler represent the input Euler angle rotations in degrees around the corresponding axes. |





### Returns



**Quaternion**
        The Euler angle rotation specified by the angles euler.x,euler.y,euler.z converted to a Quaternion. The rotation order is ZXY.





### Description



Converts an input Euler angle rotation specified as a Vector3 to a Quaternion.





Returns a rotation that rotates `euler.z` degrees around the z-axis, `euler.x` degrees around the x-axis, and `euler.y` degrees around the y-axis. Rotations are applied in ZXY order. The output is represented as a Quaternion. For more information, refer to [Rotation and Orientation in Unity](../Manual/QuaternionAndEulerRotationsInUnity.html).


              


```
using UnityEngine;public class EulerToQuaternionExample : MonoBehaviour
{
    void Start()
    {
        // A rotation 30 degrees around the y-axis
        Vector3 rotationVector = new Vector3(0, 30, 0);
        Quaternion rotation = Quaternion.Euler(rotationVector);
        // apply the rotation to this object
        transform.SetLocalPositionAndRotation(transform.localPosition, rotation);
    }
}
```


            
