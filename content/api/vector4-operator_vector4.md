This version of Unity is unsupported.



# [Vector4](Vector4.html).Vector3




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



















### Description



Converts a Vector4 to a [Vector3](Vector3.html).





An implicit conversion of a [Vector4](Vector4.html) to a [Vector3](Vector3.html). The [Vector4.w](Vector4-w.html) is discarded.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Create and display a Vector4.
        Vector4 vector4;        vector4 = new Vector4(1.0f, 2.0f, 3.0f, 4.0f);
        Debug.Log("Vector4: " + vector4);        // Convert the Vector4 into a Vector3.
        Vector3 vector3;
        vector3 = vector4;        // The 4.0f is not copied into the Vector3.
        // Show (1.0f, 2.0f, 3.0f).
        Debug.Log("Vector3: " + vector3);
    }
}
```


            
