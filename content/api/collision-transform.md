This version of Unity is unsupported.



# [Collision](Collision.html).transform




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



The [Transform](Transform.html) of the object we hit (Read Only).





If we collided against a collider with a [Rigidbody](Rigidbody.html), the transform will be the transform attached to the rigidbody.
If we collided against a collider without a rigidbody, the transform will be the transform attached to the collider.


              


```
// Attach this script to a GameObject with a Collider and Rigidbody.
// Make sure the object you’re colliding with also has a Collider (and optionally a Rigidbody).using UnityEngine;public class CollisionLogger : MonoBehaviour
{
    private void OnCollisionEnter(Collision collision)
    {
        // Get the transform of the object we collided with
        Transform hitTransform = collision.transform;        // Log the position, rotation, and scale of the hit object
        Debug.Log("Collided with: " + hitTransform.name);
        Debug.Log("Position: " + hitTransform.position);
        Debug.Log("Rotation: " + hitTransform.rotation);
        Debug.Log("Scale: " + hitTransform.localScale);
    }
}
```


            
