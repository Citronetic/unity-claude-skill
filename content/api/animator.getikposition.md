This version of Unity is unsupported.



# [Animator](Animator.html).GetIKPosition




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

public [Vector3](Vector3.html) GetIKPosition([AvatarIKGoal](AvatarIKGoal.html) goal);






### Parameters



| Parameter | Description |
| --- | --- |
| goal | The AvatarIKGoal that is queried. |





### Returns



**Vector3**
        Return the current position of this IK goal in world space.





### Description



Gets the position of an IK goal.





An IK goal is a target position and rotation for a specific body part. Unity can calculate how to move the part toward the target from the starting point (ie, the current position and rotation obtained from the animation).

This function gets the current position of the specified goal in world space.

Additional resources: [GetIKPositionWeight](Animator.GetIKPositionWeight.html), [SetIKPosition](Animator.SetIKPosition.html).


            
