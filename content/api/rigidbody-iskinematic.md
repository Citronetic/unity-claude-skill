This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).isKinematic




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







                    public bool isKinematic;






### Description



Controls whether physics affects the rigidbody.





If isKinematic is enabled, Forces, collisions or joints will not affect the rigidbody anymore.
The rigidbody will be under full control of animation or script control by changing transform.position.
Kinematic bodies also affect the motion of other rigidbodies through collisions or joints.
Eg. can connect a kinematic rigidbody to a normal rigidbody with a joint
and the rigidbody will be constrained with the motion of the kinematic body.
Kinematic rigidbodies are also particularly useful for making characters which are normally driven by an animation,
but on certain events can be quickly turned into a ragdoll by setting isKinematic to false.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Rigidbody rb;    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }    // Let the rigidbody take control and detect collisions.
    void EnableRagdoll()
    {
        rb.isKinematic = false;
        rb.detectCollisions = true;
    }    // Let animation control the rigidbody and ignore collisions.
    void DisableRagdoll()
    {
        rb.isKinematic = true;
        rb.detectCollisions = false;
    }
}
```


            
