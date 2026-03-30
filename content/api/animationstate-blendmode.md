This version of Unity is unsupported.



# [AnimationState](AnimationState.html).blendMode




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












                    public [AnimationBlendMode](AnimationBlendMode.html) blendMode;






### Description



Which blend mode should be used?


              


```
using UnityEngine;
using System.Collections;public class ExampleScript : MonoBehaviour
{
    public Animation anim;    void Start()
    {
        // Set the leanLeft animation to blend additively
        anim["leanLeft"].blendMode = AnimationBlendMode.Additive;
    }
}
```


            
