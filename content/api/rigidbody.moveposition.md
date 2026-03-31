This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).MovePosition




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

public void MovePosition([Vector3](Vector3.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Provides the new position for the Rigidbody object. |





### Description



Moves the kinematic [Rigidbody](Rigidbody.html) towards `position`.





[Rigidbody.MovePosition](Rigidbody.MovePosition.html) moves a Rigidbody and complies with the interpolation settings. When Rigidbody interpolation is enabled, [Rigidbody.MovePosition](Rigidbody.MovePosition.html) creates a smooth transition between frames. Unity moves a [Rigidbody](Rigidbody.html) in each `FixedUpdate` call. The `position` occurs in world space. To teleport a [Rigidbody](Rigidbody.html) from one position to another, use [Rigidbody.position](Rigidbody-position.html) instead of [MovePosition](Rigidbody.MovePosition.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Rigidbody m_Rigidbody;
    public float m_Speed = 5f;    void Start()
    {
        //Fetch the Rigidbody from the GameObject with this script attached
        m_Rigidbody = GetComponent<Rigidbody>();
    }    void FixedUpdate()
    {
        //Store user input as a movement vector
        Vector3 m_Input = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));        //Apply the movement vector to the current position, which is
        //multiplied by deltaTime and speed for a smooth MovePosition
        m_Rigidbody.MovePosition(transform.position + m_Input * Time.fixedDeltaTime * m_Speed);
    }
}
```


            
