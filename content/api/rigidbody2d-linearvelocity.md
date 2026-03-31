This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).linearVelocity




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












                    public [Vector2](Vector2.html) linearVelocity;






### Description



The linear velocity of the Rigidbody2D represents the rate of change over time of the Rigidbody2D position in world-units.





The linear velocity is specified as a [Vector2](Vector2.html) with components in the X and Y directions (there is no Z direction in 2D physics). The value is not usually set directly but rather by using *forces*.

Linear velocity is affected by user specified forces, impulses from collisions, gravity and [Rigidbody2D.linearDamping](Rigidbody2D-linearDamping.html).

**Note:** A velocity in Unity is represented as world units per second. World units are arbitrary and often thought of as metres, but they can also represent millimetres or light years.

Additional resources: [Rigidbody2D.angularVelocity](Rigidbody2D-angularVelocity.html), [Rigidbody2D.AddForce](Rigidbody2D.AddForce.html) and [Rigidbody2D.linearDamping](Rigidbody2D-linearDamping.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    private Rigidbody2D rb;    private float time = 0.0f;
    private bool isMoving = false;
    private bool isJumpPressed = false;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }    void Update()
    {
        isJumpPressed = Input.GetButtonDown("Jump");
    }    void FixedUpdate()
    {
        // Was jump pressed and we're not moving?
        if (isJumpPressed && !isMoving)
        {
            // The rigidbody moves up the y axis at a rate of 10 units per second
            rb.linearVelocity = new Vector2(0f, 10f);            isMoving = true;            Debug.Log("Moving!");
        }        if (isMoving)
        {
            // When the rigidbody has moved for 10 seconds, report its position
            time = time + Time.fixedDeltaTime;
            if (time > 10f)
            {
               // Remove the linear velocity.
                rb.linearVelocity = Vector2.zero;                time = 0.0f;
                isMoving = false;

                Debug.Log(rb.position.y + " : " + time);
            }
        }
    }
}
```


            
