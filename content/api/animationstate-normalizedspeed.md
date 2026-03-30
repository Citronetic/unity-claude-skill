This version of Unity is unsupported.



# [AnimationState](AnimationState.html).normalizedSpeed




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












                    public float normalizedSpeed;






### Description



The normalized playback speed.





This is most commonly used to synchronize playback speed when blending between two animations.
In most cases it is easier and better to use [Animation Layer syncing](../Manual/AnimationLayers.html) instead.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Animation anim;    void Start()
    {
        anim = GetComponent<Animation>();
        anim["Run"].normalizedSpeed = anim["Walk"].normalizedSpeed;
    }
}
```


            
