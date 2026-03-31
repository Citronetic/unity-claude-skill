This version of Unity is unsupported.



# [Animation](Animation.html).CrossFade




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




                [Switch to Manual](../Manual/class-Animation.html)










## Declaration

public void CrossFade(string animation,
float fadeLength = 0.3F,
[PlayMode](PlayMode.html) mode = PlayMode.StopSameLayer);






### Parameters



| Parameter | Description |
| --- | --- |
| animation | The name of the animation in the Animation component to crossfade to. |
| fadeLength | The duration of the crossfade in seconds. Negative values are clamped to 0 seconds. |
| mode | The layer behavior of the crossfade. This controls whether the crossfade is with animations on all layers or animations on the same later as animation. |





### Description



Fades in the animation with the name `animation` over a period of time defined by `fadeLength`.





If the mode is set to [PlayMode.StopSameLayer](PlayMode.StopSameLayer.html), animations on the same layer as `animation` are faded out while `animation` is faded in.
if the mode is set to [PlayMode.StopAll](PlayMode.StopAll.html), all animations are faded out while `animation` is faded in.

If the animation is not set to be looping, it will be stopped and rewound after playing.

The following example demonstrates how to switch between two animations using the CrossFade method.


              


```
using UnityEngine;

[RequireComponent(typeof(Animation))]
public class AnimationCrossFadeExample : MonoBehaviour
{
    public bool IsRunning = false;
    Animation m_Animation;

    void Start()
    {
        m_Animation = GetComponent<Animation>();

        if (m_Animation.GetClip("walk") == null)
            Debug.LogError("Missing walk clip");

        if (m_Animation.GetClip("run") == null)
            Debug.LogError("Missing run clip");

        m_Animation.Play("walk");
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            IsRunning = !IsRunning;
            m_Animation.CrossFade(IsRunning ? "run" : "walk", .5f);
        }
    }
}
```





Additional resources: [Animation.Play](Animation.Play.html), [PlayMode](PlayMode.html).


            
