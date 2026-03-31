This version of Unity is unsupported.



# ExternalForcesModule





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



Script interface for the ExternalForcesModule of a Particle System.





Additional resources: [ParticleSystem](ParticleSystem.html), [ParticleSystem.externalForces](ParticleSystem-externalForces.html).





### Properties



| Property | Description |
| --- | --- |
| enabled | Specifies whether the ExternalForcesModule is enabled or disabled. |
| influenceCount | The number of Force Fields explicitly provided to the influencers list. |
| influenceFilter | Apply all Force Fields belonging to a matching Layer to this Particle System. |
| influenceMask | Particle System Force Field Components with a matching Layer affect this Particle System. |
| multiplier | Multiplies the magnitude of external forces affecting the particles. |
| multiplierCurve | Multiplies the magnitude of applied external forces. |





### Public Methods



| Method | Description |
| --- | --- |
| AddInfluence | Adds a ParticleSystemForceField to the influencers list. |
| GetInfluence | Gets the ParticleSystemForceField at the given index in the influencers list. |
| IsAffectedBy | Determines whether any particles are inside the influence of a Force Field. |
| RemoveAllInfluences | Removes every Force Field from the influencers list. |
| RemoveInfluence | Removes the Force Field from the influencers list at the given index. |
| SetInfluence | Assigns the Force Field at the given index in the influencers list. |


            
