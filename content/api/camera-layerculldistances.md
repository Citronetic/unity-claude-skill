This version of Unity is unsupported.



# [Camera](Camera.html).layerCullDistances




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




                [Switch to Manual](../Manual/class-Camera.html)







                    public float[] layerCullDistances;






### Description



Per-layer culling distances.





Normally Camera skips rendering of objects that are further away than [farClipPlane](Camera-farClipPlane.html).
You can set up some [Layers](../Manual/Layers.html) to use smaller culling distances using layerCullDistances.
This is very useful to cull small objects early on, if you put them into appropriate layers.

When assigning layerCullDistances, you need to assign float array that has 32 values.
Zero values in cull distances means "use far plane distance".

By default, per-layer culling will use a plane aligned with the camera. You can change this to
a sphere by setting layerCullSpherical on the Camera to true.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Camera camera = GetComponent<Camera>();
        float[] distances = new float[32];
        distances[10] = 15;
        camera.layerCullDistances = distances;
    }
}
```





Additional resources: [farClipPlane](Camera-farClipPlane.html), [layerCullSpherical](Camera-layerCullSpherical.html).


            
