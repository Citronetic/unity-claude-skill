This version of Unity is unsupported.



# [Quaternion](Quaternion.html).AngleAxis




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

public static [Quaternion](Quaternion.html) AngleAxis(float angle,
[Vector3](Vector3.html) axis);






### Description



Creates a rotation which rotates `angle` degrees around `axis`.





The rotation is counter-clockwise when looking from the origin along the axis of rotation. For more information, refer to [Rotation and Orientation in Unity](../Manual/QuaternionAndEulerRotationsInUnity.html). The magnitude of the axis parameter is not applied.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Sets the transform's current rotation to a new rotation that rotates 30 degrees around the y-axis(Vector3.up)
        transform.rotation = Quaternion.AngleAxis(30, Vector3.up);
    }
}
```


            
