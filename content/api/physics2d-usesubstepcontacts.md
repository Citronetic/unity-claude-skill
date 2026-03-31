This version of Unity is unsupported.



# [Physics2D](Physics2D.html).useSubStepContacts




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












                    public static bool useSubStepContacts;






### Description



Whether to calculate contacts for all simulation sub-steps or only the first sub-step.





When simulation sub-stepping is enabled with [Physics2D.useSubStepping](Physics2D-useSubStepping.html), this property is used to control the whether or not contacts are calculated for all sub-steps or only the first sub-step.

When enabled, contacts are calculated for all sub-steps. This provides a more accurate simulation for each sub-step but will reduce performance. In most cases, this extra contact calculation isn't required.

When disabled, contacts are only calculated for the first sub-step. Subsequent sub-steps only perform integration and constraint solving. This increases performance whilst still maintaining a stable simulation. In most cases, this should be used.

Additional resources: [Physics2D.useSubStepping](Physics2D-useSubStepping.html), [Physics2D.minSubStepFPS](Physics2D-minSubStepFPS.html), [Physics2D.maxSubStepCount](Physics2D-maxSubStepCount.html), [PhysicsScene2D.subStepCount](PhysicsScene2D-subStepCount.html) and [PhysicsScene2D.subStepLostTime](PhysicsScene2D-subStepLostTime.html).


            
