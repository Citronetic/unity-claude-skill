This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnControllerColliderHit(ControllerColliderHit)




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Parameters



| Parameter | Description |
| --- | --- |
| hit | The ControllerColliderHit data associated with this collision. |





### Description



OnControllerColliderHit is called when the [CharacterController](CharacterController.html) component hits a collider while performing a Move.





Use this to implement behaviour like pushing rigidbodies, playing sounds, or triggering events in response to objects colliding with the character.

    Additional resources: [CharacterController](CharacterController.html), [Collider](Collider.html)


              


```
// This script pushes all rigidbodies that the character touchesusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public float pushPower = 2.0F;    void OnControllerColliderHit(ControllerColliderHit hit)
    {
        Rigidbody body = hit.collider.attachedRigidbody;        // no rigidbody
        if (body == null || body.isKinematic)
            return;        // We dont want to push objects below us
        if (hit.moveDirection.y < -0.3f)
            return;        // Calculate push direction from move direction,
        // we only push objects to the sides never up and down
        Vector3 pushDir = new Vector3(hit.moveDirection.x, 0, hit.moveDirection.z);        // If you know how fast your character is trying to move,
        // then you can also multiply the push velocity by that.        // Apply the push
        body.velocity = pushDir * pushPower;
    }
}
```


            
