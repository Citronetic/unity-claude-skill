This version of Unity is unsupported.



# [Animator](Animator.html).GetBehaviour




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

public T GetBehaviour();






### Description



Returns the first [StateMachineBehaviour](StateMachineBehaviour.html) that matches type `T` or is derived from `T`. Returns null if none are found.


              


```
using UnityEditor;
using UnityEngine;public class RunBehaviour : StateMachineBehaviour
{
    // OnStateUpdate is called at each Update frame between OnStateEnter and OnStateExit callback
    override public void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        Transform transform = animator.GetComponent<Transform>();        RaycastHit hitInfo;
        Vector3 dir = transform.TransformDirection(Vector3.forward);
        if (Physics.Raycast(transform.position + new Vector3(0, 1.5f, 0), dir, out hitInfo, 10))
        {
            if (hitInfo.collider.tag == "Obstacle")
            {
                animator.GetBehaviour<SlideBehaviour>().target = transform.position + 1.25f * hitInfo.distance * dir;
                if (hitInfo.distance < 6)
                    animator.SetTrigger("Slide");
            }
        }
    }
}public class SlideBehaviour : StateMachineBehaviour
{
    public Vector3 target;    public float slideMatchTargetStart = 0.11f;
    public float slideMatchTargetStop = 0.40f;    // OnStateUpdate is called at each Update frame between OnStateEnter and OnStateExit callback
    override public void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        animator.MatchTarget(target, new Quaternion(), AvatarTarget.Root, new MatchTargetWeightMask(new Vector3(1, 0, 1), 0), slideMatchTargetStart, slideMatchTargetStop);
    }
}
```


            
