This version of Unity is unsupported.



# RigidbodyConstraints





enumeration


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



















### Description



Use these flags to constrain motion of Rigidbodies.





Additional resources: [Rigidbody.constraints](Rigidbody-constraints.html).  This enables you to freeze positions and rotations on all axes.


              


```
//This example shows how RigidbodyConstraints is used to freeze the position and rotation of a Rigidbody in the z axis at start-up.
//It also shows what happens when these constraints are removed, when you press the space key
//Attach this to a GameObject with a Rigidbody to see it in actionusing UnityEngine;public class RigidBodyConstraitsExample : MonoBehaviour
{
    Rigidbody m_Rigidbody;
    Vector3 m_ZAxis;    void Start()
    {
        m_Rigidbody = GetComponent<Rigidbody>();
        //This locks the RigidBody so that it does not move or rotate in the z axis (can be seen in Inspector).
        m_Rigidbody.constraints = RigidbodyConstraints.FreezePositionZ | RigidbodyConstraints.FreezeRotationZ;
        //Set up vector for moving the Rigidbody in the z axis
        m_ZAxis = new Vector3(0, 0, 5);
    }    void Update()
    {
        //Press space to remove the constraints on the RigidBody
        if (Input.GetKeyDown(KeyCode.Space))
        {
            //Remove all constraints
            m_Rigidbody.constraints = RigidbodyConstraints.None;
        }        //Press the right arrow key to move positively in the z axis if the constraints are removed
        if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            //If the constraints are removed, the Rigidbody moves along the z axis
            //If the constraints are there, no movement occurs
            m_Rigidbody.velocity = m_ZAxis;
        }        //Press the left arrow key to move negatively in the z axis if the constraints are removed
        if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            m_Rigidbody.velocity = -m_ZAxis;
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| None | No constraints. |
| FreezePositionX | Freeze motion along the X-axis. Limits motion to the YZ plane only. |
| FreezePositionY | Freeze motion along the Y-axis. Limits motion to the XZ plane only. |
| FreezePositionZ | Freeze motion along the Z-axis. Limits motion to the XY plane only. |
| FreezeRotationX | Freeze rotation along the X-axis. |
| FreezeRotationY | Freeze rotation along the Y-axis. |
| FreezeRotationZ | Freeze rotation along the Z-axis. |
| FreezePosition | Freeze motion along all axes. Equivalent of RigidbodyConstraints.FreezePositionX \| RigidbodyConstraints.FreezePositionY \| RigidbodyConstraints.FreezePositionZ. |
| FreezeRotation | Freeze rotation along all axes. Equivalent of RigidbodyConstraints.FreezeRotationX \| RigidbodyConstraints.FreezeRotationY \| RigidbodyConstraints.FreezeRotationZ. |
| FreezeAll | Freeze rotation and motion along all axes. Equivalent of RigidbodyConstraints.FreezePosition \| RigidbodyConstraints.FreezeRotation. |


            
