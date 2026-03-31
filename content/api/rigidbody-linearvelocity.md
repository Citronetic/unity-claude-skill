This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).linearVelocity




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







                    public [Vector3](Vector3.html) linearVelocity;






### Description



The linear velocity vector of the rigidbody. It represents the rate of change of Rigidbody position.





In most cases you should not modify the velocity directly, as this can result in unrealistic behaviour - use AddForce instead
Do not set the linear velocity of an object every physics step, this will lead to unrealistic physics simulation.
A typical usage is where you would change the velocity is when jumping in a first person shooter, because you want an immediate change in velocity.

**Note:** The linearVelocity is a world-space property.


              


```
using UnityEngine;
using System.Collections;// The velocity along the y axis is 10 units per second.  If the GameObject starts at (0,0,0) then
// it will reach (0,100,0) units after 10 seconds.public class ExampleClass : MonoBehaviour
{
    public Rigidbody rb;    private float time = 0.0f;
    private bool isMoving = false;
    private bool isJumpPressed = false;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }    void Update()
    {
        isJumpPressed = Input.GetButtonDown("Jump");
    }    void FixedUpdate()
    {
        if (isJumpPressed)
        {
            // the cube moves up the y axis at a rate of 10 units per second
            rb.linearVelocity = new Vector3(0, 10, 0);
            isMoving = true;
            Debug.Log("jump");
        }        if (isMoving)
        {
            // when the cube has moved for 10 seconds, report its position
            time = time + Time.fixedDeltaTime;
            if (time > 10.0f)
            {
                Debug.Log(gameObject.transform.position.y + " : " + time);
                time = 0.0f;
            }
        }
    }
}
```





**Note:** A velocity in Unity is units per second.  The units are often thought of as metres but could be millimetres or light years.  Unity velocity also has the speed in X, Y, and Z defining the direction. Additionally, setting the linear velocity of a kinematic rigidbody is not allowed and will have no effect.


            
