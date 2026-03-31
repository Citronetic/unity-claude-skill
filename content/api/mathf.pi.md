This version of Unity is unsupported.



# [Mathf](Mathf.html).PI




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







                    public static float PI;






### Description



The well-known *3.14159265358979...* value (Read Only).





The ratio of the circumference of a circle to its diameter. Note that this value is a 32-bit floating point number i.e. a `float`.  Approximately seven digits of precision are provided.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public float radius = 5;    void Start()
    {
        float perimeter = 2.0f * Mathf.PI * radius;
        Debug.Log("The perimeter of the circle is: " + perimeter);
    }
}
```


            
