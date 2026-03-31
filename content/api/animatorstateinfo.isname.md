This version of Unity is unsupported.



# [AnimatorStateInfo](AnimatorStateInfo.html).IsName




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















## Declaration

public bool IsName(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name to check. |





### Returns



**bool**
        True if the animation state has the given name, false otherwise.





### Description



Checks if `name` matches the name of the active state in the state machine.





The name should be in the form *Layer.Name* or *Layer.SubStateMachine.Name*. For example, `Base.Idle` or `Base.RunSM.JogForward`.

This method calls [Animator.StringToHash](Animator.StringToHash.html) on the name parameter and compares it to [AnimatorStateInfo.shortNameHash](AnimatorStateInfo-shortNameHash.html) and [AnimatorStateInfo.fullPathHash](AnimatorStateInfo-fullPathHash.html) internally. If you call this method often, consider precomputing the hash of the name to improve performance.


              


```
// This script demonstrates how to check if the current state of an Animator has a specific name.

using UnityEngine;

[RequireComponent(typeof(Animator))]
public class AnimatorStateInfoIsNameExample : MonoBehaviour
{
    // The Animator component on the GameObject this script is attached to.
    Animator m_Animator;

    void Start()
    {
        m_Animator = GetComponent<Animator>();
    }

    void Update()
    {
        // If the current state has the specified name, log a message.
        var stateInfo = m_Animator.GetCurrentAnimatorStateInfo(0);
        if (stateInfo.IsName("Base.Idle"))
        {
            Debug.Log($"Currently in state Base.Idle.");
        }
    }
}
```





Additional resources: [Animator.StringToHash](Animator.StringToHash.html) , [AnimatorStateInfo.IsTag](AnimatorStateInfo.IsTag.html).


            
