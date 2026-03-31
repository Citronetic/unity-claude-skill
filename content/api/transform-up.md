This version of Unity is unsupported.



# [Transform](Transform.html).up




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







                    public [Vector3](Vector3.html) up;






### Description



The green axis of the transform in world space.





Manipulate a GameObject’s position on the Y axis (green axis) of the transform in world space. Unlike [Vector3.up](Vector3-up.html), [Transform.up](Transform-up.html) moves the GameObject while also considering its rotation.

When a GameObject is rotated, the green arrow representing the Y axis of the GameObject also changes direction. [Transform.up](Transform-up.html) moves the GameObject in the green arrow’s axis (Y).

For moving the GameObject on the Y axis while ignoring rotation, see [Vector3.up](Vector3-up.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Rigidbody2D m_Rigidbody;
    float m_Speed;    void Start()
    {
        //Fetch the Rigidbody component you attach from your GameObject
        m_Rigidbody = GetComponent<Rigidbody2D>();
        //Set the speed of the GameObject
        m_Speed = 10.0f;
    }    void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            //Move the Rigidbody upwards constantly at speed you define (the green arrow axis in Scene view)
            m_Rigidbody.linearVelocity = transform.up * m_Speed;
        }        if (Input.GetKey(KeyCode.DownArrow))
        {
            //Move the Rigidbody downwards constantly at the speed you define (the green arrow axis in Scene view)
            m_Rigidbody.linearVelocity = -transform.up * m_Speed;
        }        if (Input.GetKey(KeyCode.LeftArrow))
        {
            //rotate the sprite about the Z axis in the positive direction
            transform.Rotate(new Vector3(0, 0, 1) * Time.deltaTime * m_Speed, Space.World);
        }        if (Input.GetKey(KeyCode.RightArrow))
        {
            //rotate the sprite about the Z axis in the negative direction
            transform.Rotate(new Vector3(0, 0, -1) * Time.deltaTime * m_Speed, Space.World);
        }
    }
}
```


            
