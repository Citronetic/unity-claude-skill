This version of Unity is unsupported.



# [Vector2](Vector2.html).Vector2




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
| v | The input Vector3 value to convert to a Vector2. |





### Returns



**Vector2**
        A [Vector2](Vector2.html) initialized with components `v.x` and `v.y`.





### Description



Converts a [Vector3](Vector3.html) to a [Vector2](Vector2.html).





An implicit conversion operator that converts an input [Vector3](Vector3.html) value to a [Vector2](Vector2.html). The [Vector3.x](Vector3-x.html) and [Vector3.y](Vector3-y.html) components are used to initialize the result and the [Vector3.z](Vector3-z.html) component is discarded.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        Vector2 v2 = new Vector2(1, 2);
        Debug.Log("Vector2 is: " + v2);        // convert v2 to v3
        Vector3 v3 = v2;
        Debug.Log("Vector3 is: " + v3);        // convert v3 to new Vector3
        Debug.Log("Set v3 to (3, 4, 5)");
        v3 = new Vector3(3, 4, 5);        // convert v3 to v2
        v2 = v3;
        Debug.Log("Vector2 is: " + v2);
    }
}
```


            
