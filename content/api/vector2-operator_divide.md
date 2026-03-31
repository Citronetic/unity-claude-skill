This version of Unity is unsupported.



# [Vector2](Vector2.html).operator /




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












                    public static [Vector2](Vector2.html) operator /([Vector2](Vector2.html) a,
float d);






### Description



Divides a vector by a number.





Divides each component of `a` by a number `d`.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // make the vector twice shorter: prints (0.5,1.0)
        print(new Vector2(1, 2) / 2.0f);
    }
}
```




---





                    public static [Vector2](Vector2.html) operator /([Vector2](Vector2.html) a,
[Vector2](Vector2.html) b);






### Description



Divides a vector by another vector.





Divides each component of `a` by its matching component from `b`.


            
