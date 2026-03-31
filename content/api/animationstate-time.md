This version of Unity is unsupported.



# [AnimationState](AnimationState.html).time




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












                    public float time;






### Description



The current time of the animation.





If the time is larger than length it will be wrapped according to wrapMode.
The value can be larger than the animations length.
In this case playback mode will remap the time before sampling.
This value usually goes from 0 to infinity.


              


```
using UnityEngine;
using System.Collections;public class ExampleScript : MonoBehaviour
{
    public Animation anim;    void Start()
    {
        // Rewind the walk animation
        anim["Walk"].time = 0.0f;
    }
}
```


            
