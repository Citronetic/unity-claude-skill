This version of Unity is unsupported.



# [Projector](Projector.html).fieldOfView




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







                    public float fieldOfView;






### Description



The field of view of the projection in degrees.





This is the vertical field of view; horizontal FOV varies depending on the [aspectRatio](Projector-aspectRatio.html).
Field of view is ignored when projector is orthographic (see [orthographic](Projector-orthographic.html)).
Additional resources: [projector component](../Manual/class-Projector.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Get the projector
        Projector proj = GetComponent<Projector>();
        // Use it
        proj.fieldOfView = 80.0f;
    }
}
```


            
