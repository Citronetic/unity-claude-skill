This version of Unity is unsupported.



# [RaycastHit2D](RaycastHit2D.html).collider




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












                    public [Collider2D](Collider2D.html) collider;






### Description



The [Collider2D](Collider2D.html) detected by the physics query.





When the [RaycastHit2D](RaycastHit2D.html) result is returned from a physics query, the `collider` refers to the specific [Collider2D](Collider2D.html) that was detected.

**NOTE**: This field will be NULL if nothing was detected however when checking if the result is valid, you should use the less verbose method shown in the code example below.

Additional resources: [RaycastHit2D.rigidbody](RaycastHit2D-rigidbody.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    public Vector2 direction;    void Update()
    {
        // Cast a ray in the specified direction.
        RaycastHit2D hit = Physics2D.Raycast(transform.position, direction);        // If something was hit, delete the specific Collider we hit.
        if (hit)
            Destroy(hit.collider);
    }
}
```


            
