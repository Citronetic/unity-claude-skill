This version of Unity is unsupported.


                  **Method group is Obsolete**





# [ParticleSystem](ParticleSystem.html).SetTrails




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








                        **Obsolete**
                        SetTrails is deprecated. Use SetParticlesAndTrails() instead. Avoid SetTrails when ParticleSystem.trails.dieWithParticles is false.




## Declaration

public void SetTrails([ParticleSystem.Trails](ParticleSystem.Trails.html) trailData);






### Parameters



| Parameter | Description |
| --- | --- |
| trailData | The Trails to apply to the Particle System. |





### Description



Use this method with the results of an earlier call to [ParticleSystem.GetTrails](ParticleSystem.GetTrails.html), in order to restore the Particle System to the state stored in the Trails object.





To fully restore a Particle System to a previous state, use this method along with [ParticleSystem.SetParticles](ParticleSystem.SetParticles.html) and [ParticleSystem.SetPlaybackState](ParticleSystem.SetPlaybackState.html).

Additional resources: [GetTrails](ParticleSystem.GetTrails.html), [SetParticles](ParticleSystem.SetParticles.html), [SetPlaybackState](ParticleSystem.SetPlaybackState.html).


            
