This version of Unity is unsupported.



# [Mathf](Mathf.html).Max




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

public static float Max(float a,
float b);






## Declaration

public static float Max(params float[] values);






### Parameters



| Parameter | Description |
| --- | --- |
| a | First value to compare. |
| b | Second value to compare. |
| values | Array of values to compare. |





### Returns



**float**
        Greatest value found between all compared values.





### Description



Returns the maximum of two or more values.





The resulting value will be the input value closest to 'Mathf.Infinity'.

Additional resources: [Min](Mathf.Min.html).


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
    void Start()
    {
        // Prints Infinity
        Debug.Log(Mathf.Min(0, Mathf.Infinity));
        // Prints 0
        Debug.Log(Mathf.Min(0, -Mathf.Infinity));
        // Prints Infinity
        Debug.Log(Mathf.Min(-Mathf.Infinity, Mathf.Infinity));
        // Prints 10
        Debug.Log(Mathf.Min(0, 1, 5, -1, 8, 10));
    }
}
```




---








## Declaration

public static int Max(int a,
int b);






## Declaration

public static int Max(params int[] values);






### Parameters



| Parameter | Description |
| --- | --- |
| a | First value to compare. |
| b | Second value to compare. |
| values | Array of values to compare. |





### Returns



**int**
        Greatest value found between all compared values.





### Description



Returns the maximum of two or more values.





The resulting value will be the input value closest to 'int.MaxValue'.

Additional resources: [Min](Mathf.Min.html).


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
    void Start()
    {
        // Prints 2147483647
        Debug.Log(Mathf.Max(0, int.MaxValue));
        // Prints 0
        Debug.Log(Mathf.Max(0, int.MinValue));
        // Prints 2147483647
        Debug.Log(Mathf.Max(int.MinValue, int.MaxValue));
        // Prints 10
        Debug.Log(Mathf.Max(0, 1, 5, -1, 8, 10));
    }
}
```


            
