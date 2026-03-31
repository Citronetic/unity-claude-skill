This version of Unity is unsupported.



# [Vector4](Vector4.html).Vector4




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



Converts a [Vector3](Vector3.html) to a Vector4.





Vector3s can be implicitly converted to Vector4 (w is set to zero in the result).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        // color as a Vector3 (red, green, blue)
        Vector3 color = new Vector3(1.0f, 0.25f, 0f);        // This converts the Vector3 to a Vector4 with the w parameter set to 0
        Vector4 colorWithOpacity = color;
        // set the opacity in the w parameter
        colorWithOpacity.w = 0.75f;
    }
}
```


            
