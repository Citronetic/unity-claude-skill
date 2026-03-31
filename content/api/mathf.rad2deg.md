This version of Unity is unsupported.



# [Mathf](Mathf.html).Rad2Deg




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







                    public static float Rad2Deg;






### Description



Radians-to-degrees conversion constant (Read Only).





This is equal to *360 / (PI * 2)*.

Additional resources: [Deg2Rad](Mathf.Deg2Rad.html) constant.


              


```
using UnityEngine;public class MathfRad2Deg : MonoBehaviour
{
    // convert 1 radian to degrees    float rad = 1.0f;    void Start()
    {
        float deg = rad * Mathf.Rad2Deg;
        //This will output 1 radians are equal to 57.29578 degrees
        Debug.Log(rad + " radians are equal to " + deg + " degrees.");
    }
}
```


            
