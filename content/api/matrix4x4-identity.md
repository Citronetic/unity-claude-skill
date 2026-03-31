This version of Unity is unsupported.



# [Matrix4x4](Matrix4x4.html).identity




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












                    public static [Matrix4x4](Matrix4x4.html) identity;






### Description



Returns the identity matrix (Read Only).





This is a matrix that effectively does nothing when applied.
It has 1s in the main diagonal and 0s in all other elements:


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // will print:
        // 1.00000 0.00000 0.00000 0.00000
        // 0.00000 1.00000 0.00000 0.00000
        // 0.00000 0.00000 1.00000 0.00000
        // 0.00000 0.00000 0.00000 1.00000
        var matrix = Matrix4x4.identity;
        Debug.Log(matrix);
    }
}
```





Additional resources: [Matrix4x4.zero](Matrix4x4-zero.html), [isIdentity](Matrix4x4-isIdentity.html).


            
