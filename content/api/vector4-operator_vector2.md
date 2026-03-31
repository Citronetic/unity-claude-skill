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



Converts a [Vector2](Vector2.html) to a Vector4.





Vector2s can be implicitly converted to Vector4 (z and w is set to zero in the result).


              


```
using UnityEngine;
using System.Collections.Generic;
public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        Renderer renderer = GetComponent<Renderer>();        // Shader vectors are always defined as Vector4.
        // The value here is converted to a Vector4 from a Vector2.
        renderer.material.SetVector("_SomeVariable", Vector2.one);
    }
}
```


            
