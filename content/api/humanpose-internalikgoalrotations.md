This version of Unity is unsupported.



# [HumanPose](HumanPose.html).internalIkGoalRotations




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












                    public ReadOnlySpan<Quaternion> internalIkGoalRotations;






### Description



The rotations of the four IK goals: left foot, right foot, left hand and right hand, as used internally in the Humanoid system.





These values can be used to create Avatar IK goal rotation keyframes in Humanoid AnimationClips.

**Note**: [HumanPose.internalIkGoalRotations](HumanPose-internalIkGoalRotations.html) cannot be used directly to calculate global rotations, as they are offset to follow internal Humanoid logic. To calculate global IK goal rotations, see [HumanPose.ikGoalRotations](HumanPose-ikGoalRotations.html).


            
