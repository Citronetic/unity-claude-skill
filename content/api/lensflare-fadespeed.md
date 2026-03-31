This version of Unity is unsupported.



# [LensFlare](LensFlare.html).fadeSpeed




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




                [Switch to Manual](../Manual/class-LensFlare.html)







                    public float fadeSpeed;






### Description



The fade speed of the flare.





Additional resources: [Lens flare component](../Manual/class-LensFlare.html), [flare assets](../Manual/class-Flare.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Increments the strenght of the Lensflare lf when the Transform tr
    // gets closer to the Lens flare    public LensFlare lf;
    public Transform tr;    void Start()
    {
        lf.fadeSpeed = 0.5f;
    }
}
```


            
