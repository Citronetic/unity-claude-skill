This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnCollisionEnter(Collision)




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
| collision | The Collision data associated with this collision. |





### Description



OnCollisionEnter is called when this collider/rigidbody has begun touching another rigidbody/collider.





`OnCollisionEnter` receives an instance of the [Collision](Collision.html) class as the `collision` parameter. This parameter contains information about the collision such as contact points and impact velocity. If you don't use this collision data in your `OnCollisionEnter` callback, leave out the `collision` parameter from the method declaration to avoid unneccessary calculations.

**Note:** Collision events are only sent if one of the colliders also has a non-kinematic rigidbody attached. Collision events will be sent to disabled MonoBehaviours, to allow enabling Behaviours in response to collisions.

`OnCollisionEnter` can be a [coroutine](../Manual/Coroutines.html)


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
        }        if (collision.relativeVelocity.magnitude > 2)
            audioSource.Play();
    }
}
```


            
