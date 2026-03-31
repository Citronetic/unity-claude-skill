This version of Unity is unsupported.



# [Collision](Collision.html).body




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












                    public [Component](Component.html) body;






### Description



The [Rigidbody](Rigidbody.html) or [ArticulationBody](ArticulationBody.html) of the collider that your [Component](Component.html) collides with (Read Only).





This returns the [Rigidbody](Rigidbody.html) or [ArticulationBody](ArticulationBody.html) of the collider that your [Component](Component.html) collides with. If the collider doesn't have a rigid or articulation body attached, this returns `null`.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Print out which type of Component is attached to the collider we hit
    void OnCollisionStay(Collision collision)
    {
        // Check if the collider your GameObject hits has a rigidbody
        if (collision.body as Rigidbody)
        {
            Debug.Log("Has Rigidbody.");
        }        // Check if the collider your GameObject hits has an articulation body
        if (collision.body as ArticulationBody)
        {
            Debug.Log("Has ArticulationBody.");
        }
    }
}
```


            
