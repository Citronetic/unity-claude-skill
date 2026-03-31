This version of Unity is unsupported.



# [Vector3](Vector3.html).Scale




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















## Declaration

public static [Vector3](Vector3.html) Scale([Vector3](Vector3.html) a,
[Vector3](Vector3.html) b);






### Description



Multiplies two vectors component-wise.





Every component in the result is a component of `a` multiplied by the same component of `b`.


              


```
// Calculate the two vectors generating a result.
// This will compute Vector3(2, 6, 12)using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        print(Vector3.Scale(new Vector3(1, 2, 3), new Vector3(2, 3, 4)));
    }
}
```




---








## Declaration

public void Scale([Vector3](Vector3.html) scale);






### Description



Multiplies every component of this vector by the same component of `scale`.


            
