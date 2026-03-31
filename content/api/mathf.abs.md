This version of Unity is unsupported.



# [Mathf](Mathf.html).Abs




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

public static float Abs(float f);






### Parameters



| Parameter | Description |
| --- | --- |
| f | Real number whose absolute value will be returned. |





### Returns



**float**
        Non-negative value of `f`.





### Description



Returns the absolute value of `f`.





For a real number `f`, its absolute value is defined as the non-negative value of `f` without regard to its sign.

Additional resources: [Sign](Mathf.Sign.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Prints 10
        Debug.Log(Mathf.Sign(-10.0f));
        // Prints 0
        Debug.Log(Mathf.Sign(0.0f));
        // Prints 10
        Debug.Log(Mathf.Sign(10.0f));
    }
}
```




---








## Declaration

public static int Abs(int value);






### Parameters



| Parameter | Description |
| --- | --- |
| value | Integer number whose absolute value will be returned. |





### Returns



**int**
        Non-negative value of `value`.





### Description



Returns the absolute value of `value`.





For an integer number `value`, its absolute value is defined as its non-negative value without regard to its sign.

Additional resources: [Sign](Mathf.Sign.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Prints 10
        Debug.Log(Mathf.Sign(-10));
        // Prints 0
        Debug.Log(Mathf.Sign(0));
        // Prints 10
        Debug.Log(Mathf.Sign(10));
    }
}
```


            
