This version of Unity is unsupported.



# TriggerModule





struct in
          UnityEngine



/



Implemented in:[UnityEngine.ParticleSystemModule](UnityEngine.ParticleSystemModule.html)


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




                [Switch to Manual](../Manual/class-ParticleSystem.html)














### Description



Script interface for the TriggerModule.





This module is useful for killing particles when they touch a set of collision shapes, or for calling a script command to let you apply custom particle behaviors when the trigger is activated.

The example code for [MonoBehaviour.OnParticleTrigger](MonoBehaviour.OnParticleTrigger.html) shows how the callback type action works.

Additional resources: [ParticleSystem](ParticleSystem.html), [ParticleSystem.trigger](ParticleSystem-trigger.html).





### Properties



| Property | Description |
| --- | --- |
| colliderCount | Indicates the number of collision shapes attached to this Particle System trigger. |
| colliderQueryMode | Determines whether collider information is available when calling [[ParticleSystem::GetTriggerParticles]]. |
| enabled | Specifies whether the TriggerModule is enabled or disabled. |
| enter | Choose what action to perform when particles enter the trigger volume. |
| exit | Choose what action to perform when particles leave the trigger volume. |
| inside | Choose what action to perform when particles are inside the trigger volume. |
| outside | Choose what action to perform when particles are outside the trigger volume. |
| radiusScale | A multiplier Unity applies to the size of each particle before it processes overlaps. |





### Public Methods



| Method | Description |
| --- | --- |
| AddCollider | Adds a Collision shape associated with this Particle System trigger. |
| GetCollider | Gets a collision shape associated with this Particle System trigger. |
| RemoveCollider | Removes a collision shape associated with this Particle System trigger. |
| SetCollider | Sets a Collision shape associated with this Particle System trigger. |


            
