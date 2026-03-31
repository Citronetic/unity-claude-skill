This version of Unity is unsupported.



# [Vector3](Vector3.html).operator -




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












                    public static [Vector3](Vector3.html) operator -([Vector3](Vector3.html) a,
[Vector3](Vector3.html) b);






### Description



Subtracts one vector from another.





Subtracts each component of `b` from `a`.


              


```
// prints (-5.0,-3.0,-1.0)using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        print(new Vector3(1, 2, 3) - new Vector3(6, 5, 4));
    }
}
```




---





                    public static [Vector3](Vector3.html) operator -([Vector3](Vector3.html) a);






### Description



Negates a vector.





Each component in the result is negated.


              


```
// prints (-1.0f, -2.0f, -3.0f)using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        print(-new Vector3(1.0f, 2.0f, 3.0f));
    }
}
```


            
