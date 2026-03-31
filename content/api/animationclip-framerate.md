This version of Unity is unsupported.



# [AnimationClip](AnimationClip.html).frameRate




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







                    public float frameRate;






### Description



Frame rate at which keyframes are sampled. (Read Only)





This is the frame rate that was used in the
animation program you used to create the animation or model.


              


```
using UnityEngine;
using System.Collections;public class ExampleScript : MonoBehaviour
{
    public Animation anim;    void Update()
    {
        // Prints the frame rate of the animation clip to the console
        print(anim["walk"].clip.frameRate);
    }
}
```


            
