This version of Unity is unsupported.



# [ControllerColliderHit](ControllerColliderHit.html).rigidbody




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












                    public [Rigidbody](Rigidbody.html) rigidbody;






### Description



The rigidbody that was hit by the controller.





Null if we didn't touch a rigidbody but a static collider.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Activate the gravity of other object we touch
    void OnControllerColliderHit(ControllerColliderHit hit)
    {
        if (hit != null)
        {
            hit.rigidbody.useGravity = true;
        }
    }
}
```


            
