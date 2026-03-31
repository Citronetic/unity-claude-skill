This version of Unity is unsupported.



# [CharacterController](CharacterController.html).SimpleMove




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










## Declaration

public bool SimpleMove([Vector3](Vector3.html) speed);






### Description



Moves the character with `speed`.





Velocity along the y-axis is ignored.
Speed is in units/s. Gravity is automatically applied.
Returns true if the character is grounded.
It is recommended that you make only one call to [Move](CharacterController.Move.html) or [SimpleMove](CharacterController.SimpleMove.html) per frame.


              


```
using UnityEngine;[RequireComponent(typeof(CharacterController))]
public class CharacterMover : MonoBehaviour
{
    private float speed = 3.0f;
    private float rotationSpeed = 90.0f; // degrees per second    private CharacterController characterController;    void Start()
    {
        characterController = GetComponent<CharacterController>();
    }    void Update()
    {
        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");        // Rotate character
        transform.Rotate(Vector3.up, horizontalInput * rotationSpeed * Time.deltaTime);        // Move character
        Vector3 moveDirection = transform.forward * verticalInput * speed;

        characterController.SimpleMove(moveDirection);
    }
}
```


            
