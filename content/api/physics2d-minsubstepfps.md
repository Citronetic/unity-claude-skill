This version of Unity is unsupported.



# [Physics2D](Physics2D.html).minSubStepFPS




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












                    public static float minSubStepFPS;






### Description



The minimum FPS allowed for a simulation step before sub-stepping will be used.





When simulation sub-stepping is enabled with [Physics2D.useSubStepping](Physics2D-useSubStepping.html), this property is used as a FPS threshold below which simulation sub-stepping will occur. Specifically, when the current frame-rate is lower than this value, simulation sub-stepping will occur.

This value should be set to the frame-rate you expect your simulation to start performing poorly. Unfortunately this has to be determined on a project-by-project basis because it depends on the complexity of the simulation components used and their configuration. A good rule of thumb here though is that as frame-rates reduce to less than 30 FPS, any simulation would be extremely approximate but some projects are still fine even at these low frequencies. The cost of this should be monitored with the Unity Profiler using the Physics 2D Module.

Additional resources: [Physics2D.useSubStepping](Physics2D-useSubStepping.html), [Physics2D.maxSubStepCount](Physics2D-maxSubStepCount.html), [PhysicsScene2D.subStepCount](PhysicsScene2D-subStepCount.html) and [PhysicsScene2D.subStepLostTime](PhysicsScene2D-subStepLostTime.html).


            
