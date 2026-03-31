This version of Unity is unsupported.



# [Mathf](Mathf.html).Epsilon




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







                    public static float Epsilon;






### Description



The smallest non-zero value that a float can represent.





Operations with Epsilon follow these rules:



          - anyValue + Epsilon = anyValue

          - anyValue - Epsilon = anyValue

          - 0 + Epsilon = Epsilon

          - 0 - Epsilon = -Epsilon





A value Between any number and Epsilon will result in an arbitrary number due to loss of trailing digits.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Compares two floating point numbers and return true if they are the same number.
    // See also Mathf.Approximately, which compares floating point numbers so you dont have
    // to create a function to compare them.    bool isEqual(float a, float b)
    {
        if (a >= b - Mathf.Epsilon && a <= b + Mathf.Epsilon)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
```


            
