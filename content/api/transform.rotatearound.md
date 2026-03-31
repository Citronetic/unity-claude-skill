This version of Unity is unsupported.



# [Transform](Transform.html).RotateAround




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










## Declaration

public void RotateAround([Vector3](Vector3.html) point,
[Vector3](Vector3.html) axis,
float angle);






### Parameters



| Parameter | Description |
| --- | --- |
| point | The world-space point to rotate the target object around. |
| axis | The world-space axis to rotate the target object around. This vector does not need to be unit length. |
| angle | The angle to rotate, provided in degrees. |





### Description



Rotates the transform about `axis` passing through `point` in world coordinates by `angle` degrees.





This modifies both the position and the rotation of the transform, but will not affect its scale.

If the provided axis's magnitude is too close to zero, the function returns without performing any rotation.

For more information on Rotation in Unity, see [Rotation and Orientation in Unity](../Manual/QuaternionAndEulerRotationsInUnity.html).

Additional resources: [Transform.Rotate](Transform.Rotate.html).


              


```
using UnityEngine;//Attach this script to a GameObject to rotate around the target position.
public class Example : MonoBehaviour
{
    //Assign a GameObject in the Inspector to rotate around
    public GameObject target;    void Update()
    {
        // Spin the object around the target at 20 degrees/second.
        transform.RotateAround(target.transform.position, Vector3.up, 20 * Time.deltaTime);
    }
}
```


            
