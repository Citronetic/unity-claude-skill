This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnCollisionStay(Collision)




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Parameters



| Parameter | Description |
| --- | --- |
| other | The Collision data associated with this collision. |





### Description



OnCollisionStay is called once per frame for every Collider or Rigidbody that touches another Collider or Rigidbody.





In contrast to OnTriggerStay, OnCollisionStay is passed the [Collision](Collision.html) class and not a [Collider](Collider.html).
The [Collision](Collision.html) class contains information about contact points, impact velocity etc.
If you don't use collisionInfo in the function, leave out the collisionInfo parameter as this avoids unneccessary calculations.

**Note:** Collision events are only sent if one of the colliders also has a non-kinematic rigidbody attached. Collision events will be sent to disabled MonoBehaviours, to allow enabling Behaviours in response to collisions.

Collision stay events are not sent for sleeping Rigidbodies.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnCollisionStay(Collision collisionInfo)
    {
        // Debug-draw all contact points and normals
        foreach (ContactPoint contact in collisionInfo.contacts)
        {
            Debug.DrawRay(contact.point, contact.normal, Color.white);
        }
    }
}
```





OnCollisionStay can be a co-routine, simply use the yield statement in the function.


            
