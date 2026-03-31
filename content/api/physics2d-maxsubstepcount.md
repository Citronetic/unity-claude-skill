This version of Unity is unsupported.



# [Physics2D](Physics2D.html).maxSubStepCount




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












                    public static int maxSubStepCount;






### Description



The maximum number of simulation sub-steps allowed per-frame when simulation sub-stepping is enabled.





When simulation sub-stepping is enabled with [Physics2D.useSubStepping](Physics2D-useSubStepping.html), this property is used to control the maximum number of simulation sub-steps that will occur.

When sub-stepping occurs, multiple simulation sub-steps will happen. Running too many simulation sub-steps will result in poor performance. Indeed, the reason that sub-stepping is used is because of a low frame-rate situation so care needs to be taken to ensure that the situation is not made worse by running too many simulation sub-steps.

If the required number of simulation sub-steps exceed the allowed [maximum](Physics2D-maxSubStepCount.html) and the frame-rate cannot be divided into updates at or higher than the [Physics2D.minSubStepFPS](Physics2D-minSubStepFPS.html) then only the maximum number of sub-steps are used. This results in time being "lost" in the simulation with the benefit that the cost of sub-stepping is restrained. The total amount of "lost" time can be read from [PhysicsScene2D.subStepLostTime](PhysicsScene2D-subStepLostTime.html). The number of simulation sub-steps taken in the last simulation step can be read from [PhysicsScene2D.subStepCount](PhysicsScene2D-subStepCount.html). The cost of this should be monitored with the Unity Profiler using the Physics 2D Module.

Additional resources: [Physics2D.useSubStepping](Physics2D-useSubStepping.html), [Physics2D.minSubStepFPS](Physics2D-minSubStepFPS.html), [PhysicsScene2D.subStepCount](PhysicsScene2D-subStepCount.html) and [PhysicsScene2D.subStepLostTime](PhysicsScene2D-subStepLostTime.html).


            
