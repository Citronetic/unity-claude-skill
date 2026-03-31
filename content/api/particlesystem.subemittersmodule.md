This version of Unity is unsupported.



# SubEmittersModule





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



Script interface for the SubEmittersModule.





The sub-emitters module allows you to spawn particles in child emitters from the positions of particles in the parent system.

This module triggers child particle emission on events such as the birth, death, and collision of particles in the parent system.

Additional resources: [ParticleSystem](ParticleSystem.html), [ParticleSystem.subEmitters](ParticleSystem-subEmitters.html).





### Properties



| Property | Description |
| --- | --- |
| enabled | Specifies whether the SubEmittersModule is enabled or disabled. |
| subEmittersCount | The total number of sub-emitters. |





### Public Methods



| Method | Description |
| --- | --- |
| AddSubEmitter | Add a new sub-emitter. |
| GetSubEmitterEmitProbability | Gets the probability that the sub-emitter emits particles. |
| GetSubEmitterProperties | Gets the properties of the sub-emitter at the given index. |
| GetSubEmitterSystem | Gets the sub-emitter Particle System at the given index. |
| GetSubEmitterType | Gets the type of the sub-emitter at the given index. |
| RemoveSubEmitter | Removes a sub-emitter from the given index in the array. |
| SetSubEmitterEmitProbability | Sets the probability that the sub-emitter emits particles. |
| SetSubEmitterProperties | Sets the properties of the sub-emitter at the given index. |
| SetSubEmitterSystem | Sets the Particle System to use as the sub-emitter at the given index. |
| SetSubEmitterType | Sets the type of the sub-emitter at the given index. |


            
