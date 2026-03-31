This version of Unity is unsupported.



# [ParticleSystem.Particle](ParticleSystem.Particle.html).animatedVelocity




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







                    public [Vector3](Vector3.html) animatedVelocity;






### Description



The animated velocity of the particle.





You can use animated velocity for effects that are not based on physics, but are instead based on creating a specific velocity over time. Modules such as Noise and VelocityOverLifetime use this type of velocity. This module does not store this velocity across frames, because modules that use this value calculate a new velocity value each frame.

[ParticleSystemRenderer](ParticleSystemRenderer.html) also uses animated velocity if *Render Mode* is
set to [ParticleSystemRenderMode.Stretch](ParticleSystemRenderMode.Stretch.html).

Additional resources: [ParticleSystem.Particle.velocity](ParticleSystem.Particle-velocity.html), [ParticleSystem.Particle.totalVelocity](ParticleSystem.Particle-totalVelocity.html).


            
