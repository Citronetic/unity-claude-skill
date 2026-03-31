This version of Unity is unsupported.



# [Animation](Animation.html).Rewind




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

public void Rewind(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the animation to rewind. |





### Description



Rewinds the animation named `name`.





Sets the time of the animation named `name` to 0. If there is no animation named `name`, nothing happens.


              


```
using UnityEngine;

[RequireComponent(typeof(Animation))]
public class AnimationRewindExample : MonoBehaviour
{
    public AnimationClip walkClip;

    Animation m_Animation;

    void Start()
    {
        m_Animation = GetComponent<Animation>();

        if (walkClip != null)
        {
            m_Animation.AddClip(walkClip, "Walk");
            m_Animation.Play("Walk");
        }
    }

    private void Update()
    {
        if (m_Animation.IsPlaying("Walk"))
        {
            // This printed value increases with each Update because the clip is playing.
            Debug.Log($"Walk state time: {m_Animation["Walk"].time}.");

            if (Input.GetKeyDown(KeyCode.R))
            {
                m_Animation.Rewind("Walk");
                // The new state time will be 0.
                Debug.Log($"Walk state time: {m_Animation["Walk"].time}.");
            }
        }
    }
}
```





Additional resources: [AnimationState.time](AnimationState-time.html).




---








## Declaration

public void Rewind();






### Description



Rewinds all animations.





Sets the time of all animations to 0.
Additional resources: [AnimationState.time](AnimationState-time.html).


            
