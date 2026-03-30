This version of Unity is unsupported.


                  **Removed**





# [Component](Component.html).camera




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













                        **Obsolete**
                        Property camera has been deprecated. Use GetComponent<Camera>() instead.

                    public [Component](Component.html) camera;






### Description



The [Camera](Camera.html) attached to this [GameObject](GameObject.html). (Null if there is none attached).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        GetComponent<Camera>().fieldOfView = 40;
    }
}
```


            
