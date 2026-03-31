This version of Unity is unsupported.



# [Matrix4x4](Matrix4x4.html).Scale




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

public static [Matrix4x4](Matrix4x4.html) Scale([Vector3](Vector3.html) vector);






### Description



Creates a scaling matrix.





Returned matrix is such that scales along coordinate axes by a vector `v`.
The matrix looks like this:


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        Vector3 scale = new Vector3(1, 2, 1);
        Matrix4x4 scaleMatrix = Matrix4x4.Scale(scale);        Debug.Log(scaleMatrix);
    }
}
```





Additional resources: [TRS](Matrix4x4.TRS.html), [Rotate](Matrix4x4.Rotate.html), [Translate](Matrix4x4.Translate.html), [SetTRS](Matrix4x4.SetTRS.html) functions.


            
