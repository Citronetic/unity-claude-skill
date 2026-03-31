This version of Unity is unsupported.



# [Object](Object.html).operator !=




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




                [Switch to Manual](../Manual/class-Object.html)







                    public static bool operator !=([Object](Object.html) x,
[Object](Object.html) y);






### Description



Compares if two objects refer to a different object.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Transform target;
    void Update()
    {
        // the target object does not refer to the same object as our transform
        if (target != transform)
        {
            print("Another object");
        }
    }
}
```


            
