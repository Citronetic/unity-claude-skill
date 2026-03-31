This version of Unity is unsupported.



# [Physics](Physics.html).bounceThreshold




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












                    public static float bounceThreshold;






### Description



Two colliding objects with a relative velocity below this will not bounce (default 2). Must be positive.





This value is usually changed in `Edit->Project Settings->Physics` inspector instead of from scripts.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Physics.bounceThreshold = 1;
    }
}
```


            
