This version of Unity is unsupported.



# [Joint2D](Joint2D.html).attachedRigidbody




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



The [Rigidbody2D](Rigidbody2D.html) attached to the [Joint2D](Joint2D.html).





[Joint2D](Joint2D.html) are automatically attached to a [Rigidbody2D](Rigidbody2D.html) on the same [GameObject](GameObject.html) as the [Joint2D](Joint2D.html).

Additional resources: [Rigidbody2D](Rigidbody2D.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Vector2 force = Vector2.up;    void Start()
    {
        // Apply a force to the rigidbody attached to the joint.
        GetComponent<Joint2D>().attachedRigidbody.AddForce(force);
    }
}
```


            
