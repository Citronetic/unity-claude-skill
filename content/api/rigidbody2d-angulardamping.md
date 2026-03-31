This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).angularDamping




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












                    public float angularDamping;






### Description



The angular damping of the Rigidbody2D angular velocity.





Damping can be used to reduce the [Rigidbody2D.angularVelocity](Rigidbody2D-angularVelocity.html) (angular speed) of a [Rigidbody2D](Rigidbody2D.html) over time.

Zero indicates that no damping should be used whereas higher values increase the damping, effectively slowing down the rotational movement faster. Unlike contact friction, angular damping is always applied.

**Note:** The following formula is how the angular damping is applied `angularVelocity *= 1.0f / ( 1.0f + simulation-time-step * angularDamping )`

Additional resources: [Rigidbody2D.linearDamping](Rigidbody2D-linearDamping.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    private Rigidbody2D rb;    void Start()
    {
        rb = GetComponent<Rigidbody2D>();        // Start the object spining fast.
        rb.angularVelocity = 45f;        // Turn-off the angular damping.
        rb.angularDamping = 0f;
    }
    void Update()
    {
        // Set a large angular damping to slow down the spin fast.
        if (Input.GetKeyDown("space"))
            rb.angularDamping = 0.8f;
    }
}
```


            
