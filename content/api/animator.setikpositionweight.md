This version of Unity is unsupported.



# [Animator](Animator.html).SetIKPositionWeight




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

public void SetIKPositionWeight([AvatarIKGoal](AvatarIKGoal.html) goal,
float value);






### Parameters



| Parameter | Description |
| --- | --- |
| goal | The AvatarIKGoal that is set. |
| value | The translative weight. |





### Description



Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).





An IK goal is a target position and rotation for a specific body part. Unity can calculate how to move the part toward the target from the starting point (ie, the current position and rotation obtained from the animation).

This function sets a weight value in the range 0..1 to determine how far between the start and goal positions the IK will aim. The position itself is set separately using [SetIKPosition](Animator.SetIKPosition.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public Transform objToPickUp;
    Animator animator;    void Start()
    {
        animator = GetComponent<Animator>();
    }    void OnAnimatorIK(int layerIndex)
    {
        // Retrieves the value of the parameter "RightHandReach" that must be created in the AnimatorController.
        float reach = animator.GetFloat("RightHandReach");        // Sets IK Position and IK Position Weight.
        animator.SetIKPositionWeight(AvatarIKGoal.RightHand, reach);
        animator.SetIKPosition(AvatarIKGoal.RightHand, objToPickUp.position);
    }
}
```





Additional resources: [SetIKPosition](Animator.SetIKPosition.html), [SetIKRotationWeight](Animator.SetIKRotationWeight.html).


            
