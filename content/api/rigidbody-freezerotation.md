This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).freezeRotation




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







                    public bool freezeRotation;






### Description



Controls whether physics will change the rotation of the object.





If freezeRotation is enabled, the rotation is not modified by the physics simulation.
This is useful for creating first person shooters,
because the player needs full control of the rotation using the mouse.
Additional resources: [Rigidbody.constraints](Rigidbody-constraints.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Rigidbody m_Rigidbody;    private void Start()
    {
        //Fetch the Rigidbody from the GameObject with this script attached
        m_Rigidbody = GetComponent<Rigidbody>();
        //Stop the Rigidbody from rotating
        m_Rigidbody.freezeRotation = true;
    }
}
```


            
