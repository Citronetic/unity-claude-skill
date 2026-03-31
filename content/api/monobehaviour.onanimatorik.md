This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnAnimatorIK(int)




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Parameters



| Parameter | Description |
| --- | --- |
| layerIndex | The index of the layer on which the IK solver is called. |





### Description



Callback for setting up animation IK (inverse kinematics).





`OnAnimatorIK` is called by the [Animator](Animator.html) component immediately before it updates its internal IK system. This callback can be used to set the positions of the IK goals and their respective weights.

`OnAnimatorIK` is only called if the following requirements are met:



          - The Animator component must reference an [Avatar](Avatar.html) configured as Humanoid. Generic or Legacy avatars do not support IK.

          - The Animator Controller layer you want to process IK on must have the IK Pass option enabled.

          - The Animator component must be enabled and playing an animation on the GameObject.

          - The script containing `OnAnimatorIK` must be attached to the GameObject with the Animator component.





Common uses include:



          - Setting the position and rotation of IK goals, such as hands and feet, to interact with objects or reach targets in the environment.

          - Blending between animation-driven and IK-driven motion by adjusting IK weights.

          - Creating procedural animations, such as looking at a target or reaching for an object.





Additional resources: [AnimatorController](Animations.AnimatorController.html), [Avatar](Avatar.html), [Animator](Animator.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    float leftFootPositionWeight;
    float leftFootRotationWeight;
    Transform leftFootObj;    private Animator animator;    void Start()
    {
        animator = GetComponent<Animator>();
    }    void OnAnimatorIK(int layerIndex)
    {
        animator.SetIKPositionWeight(AvatarIKGoal.LeftFoot, leftFootPositionWeight);
        animator.SetIKRotationWeight(AvatarIKGoal.LeftFoot, leftFootRotationWeight);
        animator.SetIKPosition(AvatarIKGoal.LeftFoot, leftFootObj.position);
        animator.SetIKRotation(AvatarIKGoal.LeftFoot, leftFootObj.rotation);
    }
}
```





Additional resources: [Animator.SetIKPosition](Animator.SetIKPosition.html), [Animator.SetIKPositionWeight](Animator.SetIKPositionWeight.html), [Animator.SetIKRotation](Animator.SetIKRotation.html), [Animator.SetIKRotationWeight](Animator.SetIKRotationWeight.html).


            
