This version of Unity is unsupported.



# [Projector](Projector.html).aspectRatio




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







                    public float aspectRatio;






### Description



The aspect ratio of the projection.





This is projection width divided by height. An aspect ratio of 1.0
makes the projection square; a ratio of 2.0 makes it twice as wide
than high.
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
        proj.aspectRatio = 2.0f;
    }
}
```


            
