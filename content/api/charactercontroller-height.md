This version of Unity is unsupported.



# [CharacterController](CharacterController.html).height




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




                [Switch to Manual](../Manual/class-CharacterController.html)







                    public float height;






### Description



The height of the character's capsule.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Set the controller height to 2.0
    CharacterController controller;    void Start()
    {
        controller = GetComponent<CharacterController>();
        controller.height = 2.0f;
    }
}
```


            
