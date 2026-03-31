This version of Unity is unsupported.



# [Mathf](Mathf.html).Log




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

public static float Log(float f,
float p);






### Parameters



| Parameter | Description |
| --- | --- |
| f | Value to compute the logarithm for. |
| p | Base of the logarithm operation. |





### Returns



**float**
        Result of the logarithm operation.





### Description



Returns the logarithm of a specified number in a specified base.





The logarithm is the inverse function of exponentiation, meaning that it will output the exponent to which `p` needs to be raised to obtain `f`.

This function will return NaN if either:
- The value of `f` is negative.
- The value of `p` is negative, 0, 1 or Infinity.

Additionally, when the above is true, this function will return ±Infinity when:
- `f` equals Infinity (will return +Infinity).
- `f` equals 0 (-Infinity when `p` is in the (1,∞] range, +Infinity when `p` is in the (0,1) range).

Additional resources: [Pow](Mathf.Pow.html).


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
    void Start()
    {
        // Prints 2
        Debug.Log(Mathf.Log(4, 2));
        // Prints NaN
        Debug.Log(Mathf.Log(-4, 2));
        // Prints NaN
        Debug.Log(Mathf.Log(4, -2));
        // Prints NaN
        Debug.Log(Mathf.Log(4, 0));
        // Prints NaN
        Debug.Log(Mathf.Log(4, 1));
        // Prints NaN
        Debug.Log(Mathf.Log(4, Mathf.Infinity));
        // Prints Infinity
        Debug.Log(Mathf.Log(Mathf.Infinity, 2));
        // Prints -Infinity
        Debug.Log(Mathf.Log(0, 2));
        // Prints Infinity
        Debug.Log(Mathf.Log(0, 0.2f));
    }
}
```




---








## Declaration

public static float Log(float f);






### Parameters



| Parameter | Description |
| --- | --- |
| f | Value to compute the logarithm for. |





### Returns



**float**
        Result of the logarithm operation.





### Description



Returns the natural (base e) logarithm of a specified number.





Computing the natural logarithm of `f` is the inverse operation to computing the Exponential of the output of this function. This means that 'Mathf.Exp(x) = f', with x being the output of this function.

Additional resources: [Exp](Mathf.Exp.html).


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
    void Start()
    {
        // natural logarithm of 100
        // prints 4.60517
        Debug.Log(Mathf.Log(100));
    }
}
```


            
