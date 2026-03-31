This version of Unity is unsupported.



# [Vector4](Vector4.html).operator *




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












                    public static [Vector4](Vector4.html) operator *([Vector4](Vector4.html) a,
float d);






### Description



Multiplies a vector by a number.





Multiplies each component of `a` by a number `d`.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // make the vector twice longer: prints (2.0,4.0,6.0,8.0)
        print(new Vector4(1, 2, 3, 4) * 2.0f);
    }
}
```




---





                    public static [Vector4](Vector4.html) operator *(float d,
[Vector4](Vector4.html) a);






### Description



Multiplies a vector by a number.





Multiplies each component of `a` by a number `d`.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // make the vector twice longer: prints (2.0,4.0,6.0,8.0)
        print(2.0f * new Vector4(1, 2, 3, 4));
    }
}
```


            
