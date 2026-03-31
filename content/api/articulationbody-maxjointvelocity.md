This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).maxJointVelocity




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




                [Switch to Manual](../Manual/class-ArticulationBody.html)







                    public float maxJointVelocity;






### Description



The maximum joint velocity of the articulation body joint in reduced coordinates.





This value is applied to the body before the simulation step. This means that after the simulation frame the velocity might exceed the set maximum. To limit velocity more realistically from a physics perspective, use [ArticulationDrive.forceLimit](ArticulationDrive-forceLimit.html) to limit how much force the drive applies to the joint.

Units of measurement - m/s (meters per second) for linear and rad/s (radians per second) for angular motion.


            
