This version of Unity is unsupported.



# [Vector3Int](Vector3Int.html).Vector3




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



















### Parameters



| Parameter | Description |
| --- | --- |
| v | The Vector3Int to be converted to a Vector3. |





### Returns



**Vector3**
        The converted Vector3 result.





### Description



Converts a [Vector3Int](Vector3Int.html) to a [Vector3](Vector3.html).





An implicit conversion operator that converts an input [Vector3Int](Vector3Int.html) value to a [Vector3](Vector3.html). The int components of the input are implicitly converted to floats when creating the result.


              


```
// Attach this script to a GameObject.
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Vector3Int a = new Vector3Int(4,5,6);
        Debug.Log("Input Vector3Int is: " + a.ToString());
        Vector3 result = a;
        Debug.Log("Result Vector3 is: " + result.ToString());
    }
}
```


            
