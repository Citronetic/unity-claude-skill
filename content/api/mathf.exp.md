This version of Unity is unsupported.



# [Mathf](Mathf.html).Exp




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

public static float Exp(float power);






### Parameters



| Parameter | Description |
| --- | --- |
| power | Exponent of the exponentiation operation. |





### Returns



**float**
        Result of the exponentiation operation.





### Description



Returns the result of raising euler's number (e) to the power `power`.





The result of this function is the same as the result of 'Mathf.Pow(e, power)', with e being Euler's number (2.718282).

Additional resources: [Pow](Mathf.Pow.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Prints Infinity
        Debug.Log(Mathf.Exp(Mathf.Infinity));
        // Prints 2.718282
        Debug.Log(Mathf.Exp(1));
        // Prints 1
        Debug.Log(Mathf.Exp(0));
        // Prints 0
        Debug.Log(Mathf.Exp(-Mathf.Infinity));
    }
}
```


            
