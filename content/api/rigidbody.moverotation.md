This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).MoveRotation




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




                [Switch to Manual](../Manual/class-Rigidbody.html)










## Declaration

public void MoveRotation([Quaternion](Quaternion.html) rot);






### Parameters



| Parameter | Description |
| --- | --- |
| rot | The new rotation for the Rigidbody. |





### Description



Rotates the rigidbody to `rotation`.





Use [Rigidbody.MoveRotation](Rigidbody.MoveRotation.html) to rotate a [Rigidbody](Rigidbody.html), complying with the Rigidbody's interpolation setting.

If Rigidbody interpolation is enabled on the [Rigidbody](Rigidbody.html), calling [Rigidbody.MoveRotation](Rigidbody.MoveRotation.html) will resulting in a smooth transition between the two rotations in any intermediate frames rendered. This should be used if you want to continuously rotate a rigidbody in each [FixedUpdate](PlayerLoop.FixedUpdate.html).

Set [Rigidbody.rotation](Rigidbody-rotation.html) instead, if you want to teleport a rigidbody from one rotation to another, with no intermediate positions being rendered.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Rigidbody m_Rigidbody;
    Vector3 m_EulerAngleVelocity;    void Start()
    {
        //Fetch the Rigidbody from the GameObject with this script attached
        m_Rigidbody = GetComponent<Rigidbody>();        //Set the angular velocity of the Rigidbody (rotating around the Y axis, 100 deg/sec)
        m_EulerAngleVelocity = new Vector3(0, 100, 0);
    }    void FixedUpdate()
    {
        Quaternion deltaRotation = Quaternion.Euler(m_EulerAngleVelocity * Time.fixedDeltaTime);
        m_Rigidbody.MoveRotation(m_Rigidbody.rotation * deltaRotation);
    }
}
```


            
