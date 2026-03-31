This version of Unity is unsupported.



# AnimatorTransitionInfo





struct in
          UnityEngine



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


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



















### Description



Information about the current transition on a specific state machine layer.





Use [Animator.GetAnimatorTransitionInfo](Animator.GetAnimatorTransitionInfo.html) to access transition information during playmode. Use this information to, for example, check the current transition and measure its progress. You can use the weight of the target state to measure the progress of a transition.

This struct is not related to [AnimatorTransition](Animations.AnimatorTransition.html) which is only available in the Editor and is used to build state machine transitions from code.

Additional resources: [AnimatorStateInfo](AnimatorStateInfo.html) [Animator.GetAnimatorTransitionInfo](Animator.GetAnimatorTransitionInfo.html) [AnimatorControllerPlayable.GetAnimatorTransitionInfo](Animations.AnimatorControllerPlayable.GetAnimatorTransitionInfo.html).


              


```
using UnityEngine;

// MonoBehaviour that sets the IK position and weight of the right hand when the character transitions to a "Grab" animation
// state.
[RequireComponent(typeof(Animator))]
public class GrabBehaviour : MonoBehaviour
{
    private Animator m_Animator;

    public Transform grabTarget;

    void Start()
    {
        m_Animator = GetComponent<Animator>();
    }

    void OnAnimatorIK(int layerIndex)
    {
        float ikWeight;

        var transitionInfo = m_Animator.GetAnimatorTransitionInfo(0);
        if (transitionInfo.IsName("Locomotion -> Grab"))
        {
            // When the character transitions from "Locomotion" to "Grab" state, do not immediately
            // set the IK weight from 0 to 1 to avoid the hand instantly snapping to the target.
            // The IK weight changes at the same rate as the animation state. For example, when the
            // transition is halfway through, the IK weight is 0.5.
            ikWeight = transitionInfo.normalizedTime;
        }
        else
        {
            // The IK weight is 0 when the "Locomotion" state is active and 1 when the "Graph" state is active.
            ikWeight = m_Animator.GetCurrentAnimatorStateInfo(0).IsName("Grab") ? 1f : 0f;
        }

        m_Animator.SetIKPositionWeight(AvatarIKGoal.RightHand, ikWeight);
        if (ikWeight > 0f)
        {
            m_Animator.SetIKPosition(AvatarIKGoal.RightHand, grabTarget.position);
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| anyState | Returns true if the transition is from an AnyState node, or from Animator.CrossFade. |
| duration | Duration of the transition. |
| durationUnit | The unit of the transition duration. |
| fullPathHash | The hash name of the Transition. |
| nameHash | The simplified name of the Transition. |
| normalizedTime | Normalized time of the Transition. |
| userNameHash | The user-specified name of the Transition. |





### Public Methods



| Method | Description |
| --- | --- |
| IsName | Does name match the name of the active Transition. |
| IsUserName | Does userName match the name of the active Transition. |


            
