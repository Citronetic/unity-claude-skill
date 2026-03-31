This version of Unity is unsupported.



# [AnimationState](AnimationState.html).wrapMode




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












                    public [WrapMode](WrapMode.html) wrapMode;






### Description



Wrapping mode of the animation.





By default wrapMode is initialized to the value set in the [Animation component's](../Manual/class-Animation.html) wrap mode.


              


```
using UnityEngine;
using System.Collections;public class ExampleScript : MonoBehaviour
{
    public Animation anim;    void Start()
    {
        // Set the wrap mode of the walk animation to loop
        anim["Walk"].wrapMode = WrapMode.Loop;
    }
}
```


            
