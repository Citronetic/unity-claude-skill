This version of Unity is unsupported.



# [Animator](Animator.html).isInitialized




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







                    public bool isInitialized;






### Description



Returns whether the animator is initialized successfully.





See [Animator.Rebind](Animator.Rebind.html) to manually initialize the animator.


              


```
using UnityEngine;public class CheckAndRebind : MonoBehaviour
{
    Animator animator;    void Start()
    {
        animator = GetComponent<Animator>();        if (!animator.isInitialized)
            animator.Rebind();
    }
}
```


            
