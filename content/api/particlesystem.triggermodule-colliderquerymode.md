This version of Unity is unsupported.



# [ParticleSystem.TriggerModule](ParticleSystem.TriggerModule.html).colliderQueryMode




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







                    public [ParticleSystemColliderQueryMode](ParticleSystemColliderQueryMode.html) colliderQueryMode;






### Description



Determines whether collider information is available when calling [[ParticleSystem::GetTriggerParticles]].





Use this option if you need to know which Colliders particles interacted with, inside the OnParticleTrigger callback.

Using it has an impact on performance, therefore it is disabled by default.


            
