This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).inertiaTensorRotation




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




                [Switch to Manual](../Manual/class-Rigidbody.html)







                    public [Quaternion](Quaternion.html) inertiaTensorRotation;






### Description



The rotation of the inertia tensor.





If you don't set inertia tensor rotation from a script it will be calculated automatically from all colliders attached to the rigidbody.


              


```
// Resets the inertia tensor to be the coordinate system of the transformusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void ResetTensor()
    {
        GetComponent<Rigidbody>().inertiaTensorRotation = Quaternion.identity;
    }
}
```


            
