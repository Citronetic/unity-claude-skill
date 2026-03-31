This version of Unity is unsupported.



# [Mathf](Mathf.html).Min




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

public static float Min(float a,
float b);






## Declaration

public static float Min(params float[] values);






### Parameters



| Parameter | Description |
| --- | --- |
| a | First value to compare. |
| b | Second value to compare. |
| values | Array of values to compare. |





### Returns



**float**
        Smallest value found between all compared values.





### Description



Returns the minimum of two or more values.





The resulting value will be the input value closest to '-Mathf.Infinity'.

Additional resources: [Max](Mathf.Max.html).


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
    void Start()
    {
        // Prints 0
        Debug.Log(Mathf.Min(0, Mathf.Infinity));
        // Prints -Inifnity
        Debug.Log(Mathf.Min(0, -Mathf.Infinity));
        // Prints -Infinity
        Debug.Log(Mathf.Min(-Mathf.Infinity, Mathf.Infinity));
        // Prints -1
        Debug.Log(Mathf.Min(0, 1, 5, -1, 8, 10));
    }
}
```




---








## Declaration

public static int Min(int a,
int b);






## Declaration

public static int Min(params int[] values);






### Parameters



| Parameter | Description |
| --- | --- |
| a | First value to compare. |
| b | Second value to compare. |
| values | Array of values to compare. |





### Returns



**int**
        Smallest value found between all compared values.





### Description



Returns the minimum of two or more values.





The resulting value will be the input value closest to 'int.MinValue'.

Additional resources: [Max](Mathf.Max.html).


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
    void Start()
    {
        // Prints 0
        Debug.Log(Mathf.Min(0, int.MaxValue));
        // Prints -2147483648
        Debug.Log(Mathf.Min(0, int.MinValue));
        // Prints -2147483648
        Debug.Log(Mathf.Min(int.MinValue, int.MaxValue));
        // Prints -1
        Debug.Log(Mathf.Min(0, 1, 5, -1, 8, 10));
    }
}
```


            
