This version of Unity is unsupported.



# [Animation](Animation.html).this[string]




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







                    public [AnimationState](AnimationState.html) this[string];






### Description



Returns the animation state named `name`.


              


```
using UnityEngine;
using System.Collections;public class ExampleScript : MonoBehaviour
{
    public Animation anim;    void Start()
    {
        // Get the walk animation state  and set its speed
        anim["walk"].speed = 2.0f;        // Get the run animation state and set its weight
        anim["run"].weight = 0.5f;
    }
}
```


            
