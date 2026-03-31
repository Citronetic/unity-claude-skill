This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnParticleCollision(GameObject)




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














### Description



OnParticleCollision is called when a particle hits a Collider.





This can be used to apply damage to a GameObject when hit by particles.

This message is sent to scripts attached to Particle Systems and to the [Collider](Collider.html) that was hit.

When `OnParticleCollision` is invoked from a script attached to a GameObject with a Collider, the GameObject parameter represents the ParticleSystem. The Collider receives at most one message per ParticleSystem, per frame, even if multiple particles from the same ParticleSystem collide with it in that frame. To retrieve detailed information about all the collisions in that frame, use [ParticlePhysicsExtensions.GetCollisionEvents](ParticlePhysicsExtensions.GetCollisionEvents.html) to retrieve the array of [ParticleCollisionEvent](ParticleCollisionEvent.html).

When `OnParticleCollision` is invoked from a script attached to a ParticleSystem, the GameObject parameter represents a GameObject with an attached Collider struck by the ParticleSystem. The ParticleSystem receives at most one message per Collider, per frame, even if multiple particles strike the same Collider in that frame. As in the previous case, use [ParticlePhysicsExtensions.GetCollisionEvents](ParticlePhysicsExtensions.GetCollisionEvents.html) to retrieve all collision incidents for the GameObject.

Messages are only sent if you enable `Send Collision Messages` in the Inspector of the Particle System Collision module.

`OnParticleCollision` can be a [coroutine](../Manual/Coroutines.html).


              


```
using UnityEngine;
using System.Collections;
using System.Collections.Generic;public class ExampleClass : MonoBehaviour
{
    public ParticleSystem part;
    public List<ParticleCollisionEvent> collisionEvents;    void Start()
    {
        part = GetComponent<ParticleSystem>();
        collisionEvents = new List<ParticleCollisionEvent>();
    }    void OnParticleCollision(GameObject other)
    {
        int numCollisionEvents = part.GetCollisionEvents(other, collisionEvents);        Rigidbody rb = other.GetComponent<Rigidbody>();
        int i = 0;        while (i < numCollisionEvents)
        {
            if (rb)
            {
                Vector3 pos = collisionEvents[i].intersection;
                Vector3 force = collisionEvents[i].velocity * 10;
                rb.AddForce(force);
            }
            i++;
        }
    }
}
```


            
