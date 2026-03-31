This version of Unity is unsupported.



# [Mathf](Mathf.html).Approximately




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










## Declaration

public static bool Approximately(float a,
float b);






### Description



Compares two floating point values and returns true if they are similar.





Floating point imprecision makes comparing floats using the equals operator inaccurate.
For example, `(1.0 == 10.0 / 10.0)` might not return true every time.
Approximately() compares two floats and returns true if they are within a small value ([Epsilon](Mathf.Epsilon.html)) of each other.


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
    void Start()
    {
        if (Mathf.Approximately(1.0f, 10.0f / 10.0f))
        {
            print("The values are approximately the same");
        }
    }
}
```


            
