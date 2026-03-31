This version of Unity is unsupported.



# [TrailRenderer](TrailRenderer.html).shadowBias




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




                [Switch to Manual](../Manual/class-TrailRenderer.html)







                    public float shadowBias;






### Description



Apply a shadow bias to prevent self-shadowing artifacts. The specified value is the proportion of the trail width at each segment.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(TrailRenderer))]
public class ExampleClass : MonoBehaviour
{
    private TrailRenderer tr;    void Start()
    {
        tr = GetComponent<TrailRenderer>();
        tr.material = new Material(Shader.Find("Standard"));
        tr.castShadows = true;
        tr.receiveShadows = true;
        tr.shadowBias = 0.3f;
    }
}
```


            
