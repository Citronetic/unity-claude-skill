This version of Unity is unsupported.



# [Animator](Animator.html).GetIKPositionWeight




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




                [Switch to Manual](../Manual/class-Animator.html)










## Declaration

public float GetIKPositionWeight([AvatarIKGoal](AvatarIKGoal.html) goal);






### Parameters



| Parameter | Description |
| --- | --- |
| goal | The AvatarIKGoal that is queried. |





### Description



Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).





An IK goal is a target position and rotation for a specific body part. Unity can calculate how to move the part toward the target from the starting point (ie, the current position and rotation obtained from the animation).

The point calculated by the IK is also influenced by a weight value in the range 0..1 that determines how far between the start and the goal to aim. This function returns the current weight value for the position of the goal.

Additional resources: [GetIKPosition](Animator.GetIKPosition.html), [SetIKPosition](Animator.SetIKPosition.html).


            
