This version of Unity is unsupported.



# [Ray](Ray.html).GetPoint




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

public [Vector3](Vector3.html) GetPoint(float distance);






### Description



Returns a point at `distance` units along the ray.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Ray r = new Ray();
        print(r.GetPoint(10)); // a point 10 units along the ray
    }
}
```


            
