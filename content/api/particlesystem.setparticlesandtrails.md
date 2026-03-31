This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).SetParticlesAndTrails




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










## Declaration

public void SetParticlesAndTrails(out Particle[] particles,
[ParticleSystem.Trails](ParticleSystem.Trails.html) trailData);






## Declaration

public void SetParticlesAndTrails(out Particle[] particles,
[ParticleSystem.Trails](ParticleSystem.Trails.html) trailData,
int size);






## Declaration

public void SetParticlesAndTrails(out Particle[] particles,
[ParticleSystem.Trails](ParticleSystem.Trails.html) trailData,
int size,
int offset);






## Declaration

public void SetParticlesAndTrails(out NativeArray<Particle> particles,
[ParticleSystem.Trails](ParticleSystem.Trails.html) trailData);






## Declaration

public void SetParticlesAndTrails(out NativeArray<Particle> particles,
[ParticleSystem.Trails](ParticleSystem.Trails.html) trailData,
int size);






## Declaration

public void SetParticlesAndTrails(out NativeArray<Particle> particles,
[ParticleSystem.Trails](ParticleSystem.Trails.html) trailData,
int size,
int offset);






### Parameters



| Parameter | Description |
| --- | --- |
| particles | The input particle buffer, which represents the particle state to apply to particles in this Particle System. |
| trailData | The Trails to apply to the Particle System. |
| size | The number of elements in the particles array that Unity should write to the Particle System. |
| offset | The location in the particle array to start assigning particles. For example, set the value to 4 to assign particles starting with the 4th particle in the array. |





### Description



Sets the particles and the trails of this Particle System.





Similar to [ParticleSystem.SetParticles](ParticleSystem.SetParticles.html), if you set the lifetime of a particle to a negative value, Unity removes that particle from the particle system. To keep the particle alive until other trails finish, disable Die With Particles in the Trails module Inspector window.
Additional resources: [GetParticles](ParticleSystem.GetParticles.html), [SetParticles](ParticleSystem.SetParticles.html), [SetTrails](ParticleSystem.SetTrails.html).


            
