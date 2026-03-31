This version of Unity is unsupported.



# [SimulationMode2D](SimulationMode2D.html).Script




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



Use this enumeration to specify to Unity that it should execute the physics simulation manually when you call [Physics2D.Simulate](Physics2D.Simulate.html).





Executing the physics simulation in a script provides full control over when the simulation runs and the time over which it runs. Using this mode, you can emulate both [SimulationMode2D.FixedUpdate](SimulationMode2D.FixedUpdate.html) and [SimulationMode2D.Update](SimulationMode2D.Update.html) along with any other custom time interval.

The stability and determinism of the simulation depends on when Unity executes the simulation. If the simulation runs each frame, then it is always synchronized, including contacts between [Collider2D](Collider2D.html)s. This means that [Rigidbody2D](Rigidbody2D.html) interpolation is not required.

Additional resources: [Physics2D.simulationMode](Physics2D-simulationMode.html).


            
