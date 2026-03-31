This version of Unity is unsupported.



# [AnimationState](AnimationState.html).speed




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












                    public float speed;






### Description



The playback speed of the animation. 1 is normal playback speed.





A negative playback speed will play the animation backwards.

Additional resources: [AnimationState.time](AnimationState-time.html), [AnimationState.wrapMode](AnimationState-wrapMode.html) properties and [WrapMode](WrapMode.html) enum.


              


```
using UnityEngine;
using System.Collections;public class ExampleScript : MonoBehaviour
{
    public Animation anim;    void Start()
    {
        // Walk at normal speed
        anim["Walk"].speed = 1.0f;        // Walk at double speed
        anim["Walk"].speed = 2.0f;
    }
}
```


            
