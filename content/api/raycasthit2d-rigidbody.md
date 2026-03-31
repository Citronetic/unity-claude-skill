This version of Unity is unsupported.



# [RaycastHit2D](RaycastHit2D.html).rigidbody




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












                    public [Rigidbody2D](Rigidbody2D.html) rigidbody;






### Description



The [Rigidbody2D](Rigidbody2D.html) that the [Collider2D](Collider2D.html) detected by the physics query is attached to.





When the [RaycastHit2D](RaycastHit2D.html) result is returned from a physics query, the `collider` refers to the specific [Collider2D](Collider2D.html) that was detected however `rigidbody` refers to the [Rigidbody2D](Rigidbody2D.html) the [Collider2D](Collider2D.html) is attached to.

In the case where the [Collider2D](Collider2D.html) is not attached to a [Rigidbody2D](Rigidbody2D.html) then `rigidbody` will be NULL.

**NOTE**: `rigidbody` is equivalent to using [Collider2D.attachedRigidbody](Collider2D-attachedRigidbody.html) and is provided for convenience only.

Additional resources: [RaycastHit2D.collider](RaycastHit2D-collider.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    public Vector2 direction;    void Update()
    {
        // Cast a ray in the specified direction.
        RaycastHit2D hit = Physics2D.Raycast(transform.position, direction);        // If something was hit and it was attached to a rigidbody then move the rigidbody to the world origin.
        if (hit && hit.rigidbody)
            hit.rigidbody.position = Vector2.zero;
    }
}
```





Additional resources: [Rigidbody2D](Rigidbody2D.html) class.


            
