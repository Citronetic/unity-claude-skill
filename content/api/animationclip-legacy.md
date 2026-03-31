This version of Unity is unsupported.



# [AnimationClip](AnimationClip.html).legacy




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




                [Switch to Manual](../Manual/class-AnimationClip.html)







                    public bool legacy;






### Description



Set to true if the AnimationClip will be used with the Legacy Animation component ( instead of the Animator ).


              


```
// Create a new MonoBehaviour in your project and paste in the following code.

using UnityEngine;

// The example creates a new MonoBehaviour that is used alongside a Camera component.
// At runtime, the component will create a procedural clip to animate the Camera field of view
// property and automatically play that clip on an Animation component.
[RequireComponent(typeof(Camera))]
public class ProceduralFieldOfViewAnimation : MonoBehaviour
{
    void OnEnable()
    {
        AnimationClip clip = new AnimationClip();
        AnimationCurve curve = AnimationCurve.Linear(0.0f, 60.0f, 10.0f, 90.0f);
        clip.SetCurve("", typeof(Camera), "field of view", curve);
        clip.legacy = true;

        if (!TryGetComponent<Animation>(out var animation))
            animation = gameObject.AddComponent<Animation>();

        animation.AddClip(clip, "animfov");
        animation.Play("animfov");
    }
}
```


            
