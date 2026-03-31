This version of Unity is unsupported.



# [Vector4](Vector4.html).Min




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

public static [Vector4](Vector4.html) Min([Vector4](Vector4.html) lhs,
[Vector4](Vector4.html) rhs);






### Description



Returns a vector that is made from the smallest components of two vectors.





Additional resources: [Max](Vector4.Max.html) function.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Vector4 a = new Vector4(1, 2, 3, 5);
        Vector4 b = new Vector4(4, 3, 2, 0);
        print(Vector4.Min(a, b)); // prints (1.0,2.0,2.0,0.0)
    }
}
```


            
