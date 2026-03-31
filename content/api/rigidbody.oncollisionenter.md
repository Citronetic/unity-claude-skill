This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).OnCollisionEnter(Collision)




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














### Description



OnCollisionEnter is called when this collider/rigidbody has begun touching another rigidbody/collider.





In contrast to OnTriggerEnter, OnCollisionEnter is passed the [Collision](Collision.html) class and not a Collider.
The [Collision](Collision.html) class contains information about contact points, impact velocity etc.
If you don't use collisionInfo in the function, leave out the collisionInfo parameter as this avoids unneccessary calculations.
Notes: Collision events are only sent if one of the colliders also has a non-kinematic rigidbody attached. Collision events will be sent to disabled MonoBehaviours, to allow enabling Behaviours in response to collisions.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    AudioSource audioSource;    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }    void OnCollisionEnter(Collision collision)
    {
        // Debug-draw all contact points and normals
        foreach (ContactPoint contact in collision.contacts)
        {
            Debug.DrawRay(contact.point, contact.normal, Color.white);
        }        // Play a sound if the colliding objects had a big impact.
        if (collision.relativeVelocity.magnitude > 2)
            audioSource.Play();
    }
}
```





Another example:


              


```
// A grenade
// instantiates a explosion Prefab when hitting a surface
// then destroys itself
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Transform explosionPrefab;
    void OnCollisionEnter(Collision collision)
    {
        ContactPoint contact = collision.contacts[0];        // Rotate the object so that the y-axis faces along the normal of the surface
        Quaternion rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
        Vector3 pos = contact.point;
        Instantiate(explosionPrefab, pos, rot);
        Destroy(gameObject);
    }
}
```


            
