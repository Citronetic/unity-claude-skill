This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).proceduralSimulationSupported




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







                    public bool proceduralSimulationSupported;






### Description



Determines whether this system supports Procedural Simulation.





Internally, each of the Built-In Particle Systems has two modes of operation: procedural and non-procedural.

In procedural mode, it is possible to know the state of a Built-in Particle System for any point in time (past and future) whereas a non-procedural system is unpredictable. This means that it is possible to prewarm a system quickly by fast forwarding the procedural system. This also allows Unity to calculate the bounding box of the Built-in Particle System more efficiently.

In order to support Procedural Simulation, you can only use a subset of the Built-in Particle System modules and properties. For example, using the [Limit Velocity over Lifetime module](ParticleSystem-limitVelocityOverLifetime.html) will disable Procedural Simulation. Additionally, modifying any properties from script whilst the system is playing will also disable Procedural Simulation.

To discover if you are using any properties that disable this feature, a small speech bubble appears in the upper right corner of the **Inspector** window. The tooltip for this icon gives you details about why Procedural Simulation is disabled.


            
