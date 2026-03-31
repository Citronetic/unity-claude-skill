This version of Unity is unsupported.



# [ControllerColliderHit](ControllerColliderHit.html).moveDirection




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












                    public [Vector3](Vector3.html) moveDirection;






### Description



The direction the CharacterController was moving in when the collision occured.





This is the direction that the CharacterController was moving in when the collision occured. It can be used to find a reasonable direction to apply forces to touched rigidbodies.

Note that this is not necessarily the same as the movement vector passed to [CharacterController.Move](CharacterController.Move.html) or [CharacterController.SimpleMove](CharacterController.SimpleMove.html). The CharacterController uses a sequence of motions to perform a move in accordance with the move direction and the step Offset, in order to step over obstacles. moveDirection will be the direction of the motion during which the collision was detected.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnControllerColliderHit(ControllerColliderHit hit)
    {
        Debug.Log(hit.moveDirection);
    }
}
```


            
