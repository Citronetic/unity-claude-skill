This version of Unity is unsupported.



# Particle





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



Script interface for a Particle.





Additional resources: [ParticleSystem](ParticleSystem.html), [ParticleSystem.GetParticles](ParticleSystem.GetParticles.html), [ParticleSystem.SetParticles](ParticleSystem.SetParticles.html).





### Properties



| Property | Description |
| --- | --- |
| angularVelocity | The angular velocity of the particle. |
| angularVelocity3D | The 3D angular velocity of the particle. |
| animatedVelocity | The animated velocity of the particle. |
| axisOfRotation | Mesh particles rotate around this axis. |
| position | The position of the particle. |
| randomSeed | The random seed of the particle. |
| remainingLifetime | The remaining lifetime of the particle. |
| rotation | The rotation of the particle. |
| rotation3D | The 3D rotation of the particle. |
| startColor | The initial color of the particle. The current color of the particle is calculated procedurally based on this value and the active color modules. |
| startLifetime | The starting lifetime of the particle. |
| startSize | The initial size of the particle. The current size of the particle is calculated procedurally based on this value and the active size modules. |
| startSize3D | The initial 3D size of the particle. The current size of the particle is calculated procedurally based on this value and the active size modules. |
| totalVelocity | The total velocity of the particle. |
| velocity | The velocity of the particle, measured in units per second. |





### Public Methods



| Method | Description |
| --- | --- |
| GetCurrentColor | Calculate the current color of the particle by applying the relevant curves to its startColor property. |
| GetCurrentSize | Calculate the current size of the particle by applying the relevant curves to its startSize property. |
| GetCurrentSize3D | Calculate the current 3D size of the particle by applying the relevant curves to its startSize3D property. |
| GetMeshIndex | Calculate the Mesh index of the particle, used for choosing which Mesh a particle is rendered with. |
| SetMeshIndex | Sets the Mesh index of the particle, used for choosing which Mesh a particle is rendered with. |


            
