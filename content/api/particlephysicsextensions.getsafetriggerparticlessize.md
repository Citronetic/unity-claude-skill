This version of Unity is unsupported.



# [ParticlePhysicsExtensions](ParticlePhysicsExtensions.html).GetSafeTriggerParticlesSize




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

public static int GetSafeTriggerParticlesSize([ParticleSystem](ParticleSystem.html) ps,
[ParticleSystemTriggerEventType](ParticleSystemTriggerEventType.html) type);






### Parameters



| Parameter | Description |
| --- | --- |
| ps | Particle system. |
| type | Type of trigger to return size for. |





### Returns



**int**
        Number of particles with this trigger event type.





### Description



Safe array size for use with ParticleSystem.GetTriggerParticles.





This is guaranteed to be large enough to use with ParticleSystem.GetTriggerParticles for the current frame. GetTriggerParticles may return fewer elements for some GameObjects though.


            
