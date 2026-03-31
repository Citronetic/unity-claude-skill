This version of Unity is unsupported.



# [ControllerColliderHit](ControllerColliderHit.html).normal




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












                    public [Vector3](Vector3.html) normal;






### Description



The normal of the surface we collided with in world space.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnControllerColliderHit(ControllerColliderHit hit)
    {
        // print the impact point's normal
        Debug.Log("Normal vector we collided at: " + hit.normal);
    }
}
```





**Note:** When the CharacterController is colliding with an edge or a corner rather than a flat surface,
the reported normal may be different when colliding with BoxColliders than when colliding with MeshColliders.
This is due to a limitation in how PhysX handles Capsule/BoxCollider collisions.


            
