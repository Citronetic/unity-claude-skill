This version of Unity is unsupported.



# [RaycastHit2D](RaycastHit2D.html).transform




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












                    public [Transform](Transform.html) transform;






### Description



The [Transform](Transform.html) on the [GameObject](GameObject.html) that the [Collider2D](Collider2D.html) is attached to.





When the [RaycastHit2D](RaycastHit2D.html) result is returned from a physics query, the `collider` refers to the specific [Collider2D](Collider2D.html) that was detected however `transform` refers to the [Transform](Transform.html) on the [GameObject](GameObject.html) that the [RaycastHit2D.collider](RaycastHit2D-collider.html) is attached to.

**NOTE**: `transform` is equivalent to using Collider2D.transform and is provided for convenience only. This field will be NULL if nothing was detected.

Additional resources: [RaycastHit2D.collider](RaycastHit2D-collider.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    public Vector2 direction;    void Update()
    {
        // Cast a ray in the specified direction.
        RaycastHit2D hit = Physics2D.Raycast(transform.position, direction);        // If something was hit then move the transform to the world origin.
        if (hit)
            hit.transform.position = Vector3.zero;
    }
}
```


            
