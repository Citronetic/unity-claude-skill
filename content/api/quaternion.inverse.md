This version of Unity is unsupported.



# [Quaternion](Quaternion.html).Inverse




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




                [Switch to Manual](../Manual/class-Quaternion.html)










## Declaration

public static [Quaternion](Quaternion.html) Inverse([Quaternion](Quaternion.html) rotation);






### Description



Returns the Inverse of `rotation`.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Sets this transform to have the opposite rotation of the target    Transform target;
    void Update()
    {
        transform.rotation = Quaternion.Inverse(target.rotation);
    }
}
```


            
