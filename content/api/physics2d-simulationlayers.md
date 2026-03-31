This version of Unity is unsupported.



# [Physics2D](Physics2D.html).simulationLayers




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












                    public static [LayerMask](LayerMask.html) simulationLayers;






### Description



The [Rigidbody2D](Rigidbody2D.html) and [Collider2D](Collider2D.html) layers to simulate.





By default, [All Layers](Physics2D.AllLayers.html) are simulated, however if you specify layers in this property then only the [Rigidbody2D](Rigidbody2D.html) on those layers will be simulated. Along with this, only contacts for [Collider2D](Collider2D.html) on the specified layer(s) will be handled. Finally, only [joints](Joint2D.html) or [effectors](Effector2D.html) on the specified layer(s) will be handled.

This property is only used when the Physics2D.SimulationMode is in one of the automatic simulation modes i.e. [SimulationMode2D.FixedUpdate](SimulationMode2D.FixedUpdate.html) or [SimulationMode2D.Update](SimulationMode2D.Update.html).  When using [SimulationMode2D.Script](SimulationMode2D.Script.html) and calling [Physics2D.Simulate](Physics2D.Simulate.html), the simulation layers are pass as an argument.

Additional resources: [Physics2D.simulationMode](Physics2D-simulationMode.html) and [Physics2D.Simulate](Physics2D.Simulate.html).


            
