This version of Unity is unsupported.



# [Animator](Animator.html).GetBehaviours




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

public T[] GetBehaviours();






### Description



Returns all [StateMachineBehaviour](StateMachineBehaviour.html) that match type `T` or are derived from `T`. Returns null if none are found.


              


```
using UnityEngine;
using System.Collections;// An example StateMachineBehaviour.
public class BreathBehaviour : StateMachineBehaviour
{
    public bool  fastBreath;    // OnStateUpdate is called at each Update frame between OnStateEnter and OnStateExit callback
    override public void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        animator.SetBool("FastBreath", fastBreath);
    }
}
public class RunBehaviour : StateMachineBehaviour
{
    // OnStateUpdate is called at each Update frame between OnStateEnter and OnStateExit callback
    override public void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        BreathBehaviour[] breathBehaviours = animator.GetBehaviours<BreathBehaviour>();
        for (int i = 0; i < breathBehaviours.Length; i++)
            breathBehaviours[i].fastBreath = true;
    }
}
```


            
