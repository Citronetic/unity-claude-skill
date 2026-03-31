This version of Unity is unsupported.



# [ControllerColliderHit](ControllerColliderHit.html).gameObject




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












                    public [GameObject](GameObject.html) gameObject;






### Description



The game object that was hit by the controller.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnControllerColliderHit(ControllerColliderHit hit)
    {
        // Objects we touch, move them to position (0, 0, 0)
        hit.gameObject.transform.position = Vector3.zero;
    }
}
```


            
