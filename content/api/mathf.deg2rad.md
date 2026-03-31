This version of Unity is unsupported.



# [Mathf](Mathf.html).Deg2Rad




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




                [Switch to Manual](../Manual/class-Mathf.html)







                    public static float Deg2Rad;






### Description



Degrees-to-radians conversion constant (Read Only).





This is equal to *(PI * 2) / 360*.

Additional resources: [Rad2Deg](Mathf.Rad2Deg.html) constant.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public float deg = 30.0F;    void Start()
    {
        float rad = deg * Mathf.Deg2Rad;
        Debug.Log(deg + " degrees are equal to " + rad + " radians.");
    }
}
```


            
