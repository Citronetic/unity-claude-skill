This version of Unity is unsupported.



# [Animator](Animator.html).SetLookAtPosition




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

public void SetLookAtPosition([Vector3](Vector3.html) lookAtPosition);






### Parameters



| Parameter | Description |
| --- | --- |
| lookAtPosition | The position in the world space to look at. |





### Description



Sets the look at position for a character during animations.





Use this method in conjunction with [Animator.SetLookAtWeight](Animator.SetLookAtWeight.html) to determine how strongly the character should look toward the specified position.

You can only call [Animator.SetLookAtPosition](Animator.SetLookAtPosition.html) from the [MonoBehaviour.OnAnimatorIK](MonoBehaviour.OnAnimatorIK.html) or [StateMachineBehaviour.OnStateIK](StateMachineBehaviour.OnStateIK.html) callback. If called from a different context, this method has no effect and issues a warning.

Additional resources: [Animator.SetLookAtWeight](Animator.SetLookAtWeight.html), [MonoBehaviour.OnAnimatorIK](MonoBehaviour.OnAnimatorIK.html), [StateMachineBehaviour.OnStateIK](StateMachineBehaviour.OnStateIK.html).


              


```
using UnityEngine;

[RequireComponent(typeof(Animator))]
public class SetLookAtPositionExample : MonoBehaviour
{
    // The target to look at
    public Transform target;

    // The weight of the look at. This will determine how much the character will look at the target
    [Range(0, 1)]
    public float weight = 1f;

    Animator m_Animator;

    void Awake()
    {
        m_Animator = GetComponent<Animator>();

        if (target == null)
        {
            Debug.LogError("Target is not set. Please set the target to look at.");
        }
    }

    void OnAnimatorIK(int layerIndex)
    {
        if (m_Animator == null || target == null)
        {
            return;
        }

        // Set the look at weight
        m_Animator.SetLookAtWeight(weight);

        // Set the look at position to the target's position
        m_Animator.SetLookAtPosition(target.position);
    }
}
```


            
