This version of Unity is unsupported.



# [ControllerColliderHit](ControllerColliderHit.html).moveLength




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












                    public float moveLength;






### Description



How far the character has travelled until it hit the collider.





Note that this can be different from what you pass to [CharacterController.Move](CharacterController.Move.html), because the initial movement vector is decomposed into a set of movements, according to [CharacterController.stepOffset](CharacterController-stepOffset.html).

Additional resources: [ControllerColliderHit.moveDirection](ControllerColliderHit-moveDirection.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void OnControllerColliderHit(ControllerColliderHit hit)
    {
        Debug.Log(hit.moveLength);
    }
}
```


            
