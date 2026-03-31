This version of Unity is unsupported.



# [ParticlePhysicsExtensions](ParticlePhysicsExtensions.html).GetCollisionEvents




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















## Declaration

public static int GetCollisionEvents([ParticleSystem](ParticleSystem.html) ps,
[GameObject](GameObject.html) go,
List<ParticleCollisionEvent> collisionEvents);






### Parameters



| Parameter | Description |
| --- | --- |
| go | The GameObject for which to retrieve collision events. |
| collisionEvents | Array to write collision events to. |
| ps | The Particle System that owns the potentially colliding particles. |





### Returns



**int**
        The number of collision events.





### Description



Get the particle collision events for a GameObject. Returns the number of events written to the array.





This method is typically called from [MonoBehaviour.OnParticleCollision](MonoBehaviour.OnParticleCollision.html) in response to a collision callback.

If the array used is too short, the list of collision events will be truncated. This means you will not have every event that occurred. To avoid this use [ParticlePhysicsExtensions.GetSafeCollisionEventSize](ParticlePhysicsExtensions.GetSafeCollisionEventSize.html) to determine an appropriate array size prior the call.

Additional resources: [MonoBehaviour.OnParticleCollision](MonoBehaviour.OnParticleCollision.html).




---






                        **Obsolete**
                        GetCollisionEvents function using ParticleCollisionEvent[] is deprecated. Use List<ParticleCollisionEvent> instead.




## Declaration

public static int GetCollisionEvents([ParticleSystem](ParticleSystem.html) ps,
[GameObject](GameObject.html) go,
ParticleCollisionEvent[] collisionEvents);






### Description



Deprecated: Use the overload that takes a List. That overload doesn't create garbage.


            
