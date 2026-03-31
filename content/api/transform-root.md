This version of Unity is unsupported.



# [Transform](Transform.html).root




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







                    public [Transform](Transform.html) root;






### Description



Returns the topmost transform in the hierarchy.





(This never returns null, if this Transform doesn't have a parent it returns itself.)


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Is a collision between two objects with different roots?
    void OnCollisionEnter(Collision collision)
    {
        if (collision.transform.root != transform.root)
        {
            print("The colliding objects are not in the same hierarchy");
        }
    }
}
```


            
