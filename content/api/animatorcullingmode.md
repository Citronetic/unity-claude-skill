This version of Unity is unsupported.



# AnimatorCullingMode





enumeration


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



The culling mode for an Animator.





To specify how an Animator manages animations for objects that might not be visible, set a value from this enum to [Animator.cullingMode](Animator-cullingMode.html).


              


```
using UnityEngine;

// This example demonstrates how to change the culling mode of an Animator component based on the distance between the
// object and the main camera. This can be useful to optimize performance by disabling animations when objects are far
// away from the camera.
[RequireComponent(typeof(Animator))]
public class AnimatorCullingModeExample : MonoBehaviour
{
    // The distance at which the Animator culling mode is set to CullCompletely.
    public float distanceToEnableCulling = 100.0f;

    Animator m_Animator;

    void Start()
    {
        m_Animator = GetComponent<Animator>();
        m_Animator.cullingMode = AnimatorCullingMode.AlwaysAnimate;

        if (Camera.main == null)
        {
            Debug.LogError("There is no main camera in the scene.");
        }
    }

    void Update()
    {
        if (Camera.main == null)
        {
            return;
        }

        // Check the distance between the object and the camera.
        if (Vector3.Distance(transform.position, Camera.main.transform.position) < distanceToEnableCulling)
        {
            m_Animator.cullingMode = AnimatorCullingMode.AlwaysAnimate;
        }
        else
        {
            m_Animator.cullingMode = AnimatorCullingMode.CullCompletely;
        }
    }
}
```





Additional resources: [Animator.cullingMode](Animator-cullingMode.html).





### Properties



| Property | Description |
| --- | --- |
| AlwaysAnimate | Always animate the entire character. Object is animated even when offscreen. |
| CullUpdateTransforms | Retarget, IK and write of Transforms are disabled when renderers are not visible. |
| CullCompletely | Animation is completely disabled when renderers are not visible. |


            
