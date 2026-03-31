This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnAnimatorMove()




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














### Description



Callback for processing animation movements for modifying root motion.





This callback will be invoked at each frame after the state machines and the animations have been evaluated,
but before [OnAnimatorIK](MonoBehaviour.OnAnimatorIK.html).

Additional resources: [Root motion](../Manual/RootMotion.html).


              


```
// Attach this script to your character GameObject that has an Animator and optionally a Rigidbody.
// Enable "Apply Root Motion" on the Animator. Adjust rootMotionMultiplier to speed up or slow down root motion.using UnityEngine;[RequireComponent(typeof(Animator))]
public class RootMotionModifier : MonoBehaviour
{
    public float rootMotionMultiplier = 2.0f; // Scale the root motion    private Animator animator;
    private Rigidbody rb;    void Awake()
    {
        animator = GetComponent<Animator>();
        rb = GetComponent<Rigidbody>();
    }    void OnAnimatorMove()
    {
        // Only modify root motion if we have a Rigidbody
        if (rb != null)
        {
            // Get the deltaPosition from the Animator
            Vector3 deltaPosition = animator.deltaPosition * rootMotionMultiplier;
            // Preserve vertical velocity (for example, gravity)
            Vector3 velocity = deltaPosition / Time.deltaTime;
            velocity.y = rb.velocity.y;
            rb.velocity = velocity;            // Optionally apply root rotation
            rb.MoveRotation(rb.rotation * animator.deltaRotation);
        }
        else
        {
            // If no Rigidbody, just move the transform
            transform.position += animator.deltaPosition * rootMotionMultiplier;
            transform.rotation *= animator.deltaRotation;
        }
    }
}
```


            
