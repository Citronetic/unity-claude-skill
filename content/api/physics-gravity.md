This version of Unity is unsupported.



# [Physics](Physics.html).gravity




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












                    public static [Vector3](Vector3.html) gravity;






### Description



The gravity applied to all rigid bodies in the Scene.





Gravity can be turned off for an individual rigidbody using its [Rigidbody.useGravity](Rigidbody-useGravity.html) property.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        Physics.gravity = new Vector3(0, -1.0F, 0);
    }
}
```





ParticleSystem.gravityModifiers is  Obsolete.


            
