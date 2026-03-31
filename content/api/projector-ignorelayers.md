This version of Unity is unsupported.



# [Projector](Projector.html).ignoreLayers




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




                [Switch to Manual](../Manual/class-Projector.html)







                    public int ignoreLayers;






### Description



Which object layers are ignored by the projector.





See [layer mask](../Manual/Layers.html).

By default this is zero - i.e. no layers are ignored. Each set bit
in `ignoreLayers` will make this layer not affected by the projector.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Projector proj = GetComponent<Projector>();
        // Make the projector ignore Default (0) layer
        proj.ignoreLayers = (1 << 0);
    }
}
```





Additional resources: [projector component](../Manual/class-Projector.html), [Layers](../Manual/Layers.html).


            
