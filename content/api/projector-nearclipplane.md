This version of Unity is unsupported.



# [Projector](Projector.html).nearClipPlane




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







                    public float nearClipPlane;






### Description



The near clipping plane distance.





The projector will not affect anything that is nearer than this distance.
Additional resources: [projector component](../Manual/class-Projector.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Projector proj = GetComponent<Projector>();
        proj.nearClipPlane = 0.5f;
    }
}
```


            
