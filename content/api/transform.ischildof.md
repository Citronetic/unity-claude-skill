This version of Unity is unsupported.



# [Transform](Transform.html).IsChildOf




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




                [Switch to Manual](../Manual/class-Transform.html)










## Declaration

public bool IsChildOf([Transform](Transform.html) parent);






### Description



Is this transform a child of `parent`?





Returns a boolean value that indicates whether the transform is a child of a given transform.
true if this transform is a child, deep child (child of a child) or identical to this transform, otherwise false.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnTriggerEnter(Collider col)
    {
        // Ignore trigger events if between this collider and colliders in children
        // Eg. when you have a complex character with multiple triggers colliders.
        if (col.transform.IsChildOf(transform))
        {
            return;
        }        print("Do something here");
    }
}
```


            
