This version of Unity is unsupported.



# [CharacterController](CharacterController.html).velocity




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







                    public [Vector3](Vector3.html) velocity;






### Description



The current relative velocity of the Character (see notes).





This allows you to track how fast the character is actually walking, for example
when it is stuck at a wall this value will be the zero vector.

Note: The velocity returned is simply the difference in distance for the current timestep
before and after a call to [CharacterController.Move](CharacterController.Move.html) or [CharacterController.SimpleMove](CharacterController.SimpleMove.html).
The velocity is relative because it won't track movements to the transform that happen
outside of the CharacterController (e.g. character parented under another moving Transform,
such as a moving vehicle).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    CharacterController controller;
    void Start()
    {
        controller = GetComponent<CharacterController>();
    }    void Update()
    {
        Vector3 horizontalVelocity = controller.velocity;
        horizontalVelocity = new Vector3(controller.velocity.x, 0, controller.velocity.z);        // The speed on the x-z plane ignoring any speed
        float horizontalSpeed = horizontalVelocity.magnitude;
        // The speed from gravity or jumping
        float verticalSpeed  = controller.velocity.y;
        // The overall speed
        float overallSpeed = controller.velocity.magnitude;
    }
}
```


            
