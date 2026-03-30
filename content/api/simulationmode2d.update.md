This version of Unity is unsupported.



# [SimulationMode2D](SimulationMode2D.html).Update




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



Use this enumeration to specify to Unity that it should execute the physics simulation immediately after [MonoBehaviour.Update](MonoBehaviour.Update.html).





Executing the physics simulation during [MonoBehaviour.Update](MonoBehaviour.Update.html) provides a less stable and deterministic physics simulation due to the unpredictable fluctuations in framerate that can arise. However, the physics simulation is always synchronized each frame, including contacts between [Collider2D](Collider2D.html). Using this mode, [Rigidbody2D](Rigidbody2D.html) interpolation is not required as the simulation is updated per-frame.

Additional resources: [Physics2D.simulationMode](Physics2D-simulationMode.html).


            
