This version of Unity is unsupported.



# [CharacterController](CharacterController.html).slopeLimit




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







                    public float slopeLimit;






### Description



The character controllers slope limit in degrees.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Set the controller slope limit to 45 degrees
    CharacterController controller;    void Start()
    {
        controller = GetComponent<CharacterController>();
        controller.slopeLimit = 45.0f;
    }
}
```


            
