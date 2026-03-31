This version of Unity is unsupported.



# [Projector](Projector.html).orthographic




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







                    public bool orthographic;






### Description



Is the projection orthographic (*true*) or perspective (*false*)?





When orthographic is *true*, projection is defined by [orthographicSize](Projector-orthographicSize.html).

When orthographic is *false*, projection is defined by [fieldOfView](Projector-fieldOfView.html).
Additional resources: [projector component](../Manual/class-Projector.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Projector proj = GetComponent<Projector>();
        proj.orthographic = true;
    }
}
```


            
