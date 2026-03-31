This version of Unity is unsupported.



# [PhysicsScene2D](PhysicsScene2D.html).subStepLostTime




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












                    public float subStepLostTime;






### Description



The amount of simulation time that has been "lost" due to simulation sub-stepping hitting the maximum number of allowed sub-steps.





When simulation sub-stepping occurs, the number of sub-steps that run are limited to [Physics2D.maxSubStepCount](Physics2D-maxSubStepCount.html). This can result is "lost" simulation time which is monitored and is available for analysis here. The cost of sub-stepping should be monitored with the Unity Profiler using the Physics 2D Module.

Additional resources: [Physics2D.useSubStepping](Physics2D-useSubStepping.html), [Physics2D.maxSubStepCount](Physics2D-maxSubStepCount.html), [Physics2D.minSubStepFPS](Physics2D-minSubStepFPS.html) and [PhysicsScene2D.subStepCount](PhysicsScene2D-subStepCount.html).


            
