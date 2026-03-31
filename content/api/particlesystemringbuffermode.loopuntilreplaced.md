This version of Unity is unsupported.



# [ParticleSystemRingBufferMode](ParticleSystemRingBufferMode.html).LoopUntilReplaced




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



















### Description



Particle ages loop until they need to be removed. Particles are removed when creating new particles would exceed the Max Particles property.





When using this mode, particle ages will loop in the range specified by [ParticleSystem.MainModule.ringBufferLoopRange](ParticleSystem.MainModule-ringBufferLoopRange.html). When they need to be removed, they stop looping, but continue to play until their age reaches their lifetime value. This looping behaviour means that any lifetime based properties, such as curves, repeat the portion of the curve specified by the loop range.


            
