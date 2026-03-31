This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).position




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







                    public [Vector3](Vector3.html) position;






### Description



The position of the rigidbody.





[Rigidbody.position](Rigidbody-position.html) allows you to get and set the position of a Rigidbody using the physics engine. If you change the position of a Rigidbody using [Rigidbody.position](Rigidbody-position.html), the transform will be updated after the next physics simulation step. This is faster than updating the position using [Transform.position](Transform-position.html), as the latter will cause all attached Colliders to recalculate their positions relative to the Rigidbody.

If you want to continuously move a rigidbody use [Rigidbody.MovePosition](Rigidbody.MovePosition.html) instead, which takes interpolation into account.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        GetComponent<Rigidbody>().position = Vector3.zero;
    }
}
```


            
