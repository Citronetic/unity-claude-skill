This version of Unity is unsupported.



# [Vector2](Vector2.html).Min




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

public static [Vector2](Vector2.html) Min([Vector2](Vector2.html) lhs,
[Vector2](Vector2.html) rhs);






### Description



Returns a vector that is made from the smallest components of two vectors.





Additional resources: [Max](Vector2.Max.html) function.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Vector2 a = new Vector2(1, 3);
        Vector2 b = new Vector2(4, 2);
        print(Vector2.Min(a, b)); // prints (1.0,2.0)
    }
}
```


            
