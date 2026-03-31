This version of Unity is unsupported.



# [ReflectionProbe](ReflectionProbe.html).cullingMask




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




                [Switch to Manual](../Manual/class-ReflectionProbe.html)







                    public int cullingMask;






### Description



This is used to render parts of the reflecion probe's surrounding selectively.





If the [GameObject](GameObject.html)'s `layerMask` AND the probe's `cullingMask` is zero then the game object will be invisible from this probe.
See [Layers](../Manual/Layers.html) for more information.


              


```
using UnityEngine;
using UnityEditor;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        var probe = GetComponent<ReflectionProbe>();
        // Only render objects in the first layer (Default layer) when capturing the probe's texture
        probe.cullingMask = 1 << 0;
    }
}
```





Additional resources: [Camera.cullingMask](Camera-cullingMask.html).


            
