This version of Unity is unsupported.



# Burst





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



Script interface for a Burst.





A burst is a particle emission event, where a number of particles are all emitted at the same time.
Additional resources: [ParticleSystem.emission](ParticleSystem-emission.html), ParticleSystem.emissionModule.SetBursts, ParticleSystem.emissionModule.GetBursts.





### Properties



| Property | Description |
| --- | --- |
| count | Specify the number of particles to emit. |
| cycleCount | Specifies how many times the system should play the burst. Set this to 0 to make it play indefinitely. |
| maxCount | The maximum number of particles to emit. |
| minCount | The minimum number of particles to emit. |
| probability | The probability that the system triggers a burst. |
| repeatInterval | How often to repeat the burst, in seconds. |
| time | The time that each burst occurs. |





### Constructors



| Constructor | Description |
| --- | --- |
| ParticleSystem.Burst | Construct a new Burst with a time and count. |


            
