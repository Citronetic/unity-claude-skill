This version of Unity is unsupported.



# [Projector](Projector.html).orthographicSize




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







                    public float orthographicSize;






### Description



Projection's half-size when in orthographic mode.





This is half of the vertical size of the projection volume. Horizontal projection
size varies depending on [aspectRatio](Projector-aspectRatio.html).
Orthographic size is ignored when projection is not orthographic (see [orthographic](Projector-orthographic.html)).
Additional resources: [projector component](../Manual/class-Projector.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Projector proj = GetComponent<Projector>();
        proj.orthographic = true;
        proj.orthographicSize = 2.0f;
    }
}
```


            
