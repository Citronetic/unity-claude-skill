This version of Unity is unsupported.



# [Collider2D](Collider2D.html).attachedRigidbody




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












                    public [Rigidbody2D](Rigidbody2D.html) attachedRigidbody;






### Description



The [Rigidbody2D](Rigidbody2D.html) attached to the [Collider2D](Collider2D.html).





[Collider2D](Collider2D.html) are automatically attached to a [Rigidbody2D](Rigidbody2D.html) on the same [GameObject](GameObject.html) as the [Collider2D](Collider2D.html) or if none is present then on a [Rigidbody2D](Rigidbody2D.html) on the nearest parent [GameObject](GameObject.html).  The property will be null if no [Rigidbody2D](Rigidbody2D.html) is attached.  In this case, the [Collider2D](Collider2D.html) is attached to a hidden body known as the ground body that lives at the world origin as is set to be [RigidbodyType2D.Static](RigidbodyType2D.Static.html).  No reference to this hidden body is available however.

Additional resources: [Rigidbody2D](Rigidbody2D.html), [RigidbodyType2D](RigidbodyType2D.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Vector2 force = Vector2.up;    void Start()
    {
        // Apply a force to the rigidbody attached to the collider.
        GetComponent<Collider2D>().attachedRigidbody.AddForce(force);
    }
}
```


            
