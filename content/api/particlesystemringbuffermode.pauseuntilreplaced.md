This version of Unity is unsupported.



# [ParticleSystemRingBufferMode](ParticleSystemRingBufferMode.html).PauseUntilReplaced




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



Particle ages pause at the end of their lifetime until they need to be removed. Particles are removed when creating new particles would exceed the Max Particles property.





If they reach the end of the lifetime before being replaced, they remain paused at their final lifetime value. This means that any lifetime based properties, such as curves, use the final value on the curve.


            
