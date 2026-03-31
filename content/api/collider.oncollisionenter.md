This version of Unity is unsupported.



# [Collider](Collider.html).OnCollisionEnter(Collision)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| other | The Collision data associated with this collision event. |





### Description



OnCollisionEnter is called when this collider/rigidbody has begun touching another rigidbody/collider.





In contrast to [OnTriggerEnter](Collider.OnTriggerEnter.html), [OnCollisionEnter](Collider.OnCollisionEnter.html) is passed the [Collision](Collision.html) class and not a Collider.
The [Collision](Collision.html) class contains information, for example, about contact points and impact velocity.
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
        foreach (ContactPoint contact in collision.contacts)
        {
            Debug.DrawRay(contact.point, contact.normal, Color.white);
        }
        if (collision.relativeVelocity.magnitude > 2)
            audioSource.Play();
    }
}
```





Another example:


              


```
// A grenade
// - instantiates an explosion Prefab when hitting a surface
// - then destroys itselfusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public GameObject explosionPrefab;    void OnCollisionEnter(Collision collision)
    {
        ContactPoint contact = collision.contacts[0];
        Quaternion rotation = Quaternion.FromToRotation(Vector3.up, contact.normal);
        Vector3 position = contact.point;
        Instantiate(explosionPrefab, position, rotation);
        Destroy(gameObject);
    }
}
```


            
