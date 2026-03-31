This version of Unity is unsupported.



# [CharacterController](CharacterController.html).Move




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

public [CollisionFlags](CollisionFlags.html) Move([Vector3](Vector3.html) motion);






### Description



Supplies the movement of a GameObject with an attached CharacterController component.





The [CharacterController.Move](CharacterController.Move.html) motion moves the GameObject in the given direction. The given direction requires absolute movement delta values. A collision constrains the [Move](CharacterController.Move.html) from taking place. The return, [CollisionFlags](CollisionFlags.html), indicates the direction of a collision: None, Sides, Above, and Below. [CharacterController.Move](CharacterController.Move.html) does not use gravity.

The example below demonstrates how to use [CharacterController.Move](CharacterController.Move.html). `Update` causes a [Move](CharacterController.Move.html) to re-position the player. In addition, `Jump` changes the player position in a vertical direction.


              


```
// This first example shows how to move using Input System Package (New)                using UnityEngine;
                using UnityEngine.InputSystem;                public class Example : MonoBehaviour
                {
                    private float playerSpeed = 5.0f;
                    private float jumpHeight = 1.5f;
                    private float gravityValue = -9.81f;                    private CharacterController controller;
                    private Vector3 playerVelocity;
                    private bool groundedPlayer;                    [Header("Input Actions")]
                    public InputActionReference moveAction; // expects Vector2
                    public InputActionReference jumpAction; // expects Button                    private void Awake()
                    {
                        controller = gameObject.AddComponent<CharacterController>();
                    }                    private void OnEnable()
                    {
                        moveAction.action.Enable();
                        jumpAction.action.Enable();
                    }                    private void OnDisable()
                    {
                        moveAction.action.Disable();
                        jumpAction.action.Disable();
                    }                    void Update()
                    {
                        groundedPlayer = controller.isGrounded;
                        if (groundedPlayer && playerVelocity.y < 0)
                        {
                            playerVelocity.y = 0f;
                        }                        // Read input
                        Vector2 input = moveAction.action.ReadValue<Vector2>();
                        Vector3 move = new Vector3(input.x, 0, input.y);
                        move = Vector3.ClampMagnitude(move, 1f);                        if (move != Vector3.zero)
                        {
                            transform.forward = move;
                        }                        // Jump
                        if (jumpAction.action.triggered && groundedPlayer)
                        {
                            playerVelocity.y = Mathf.Sqrt(jumpHeight * -2.0f * gravityValue);
                        }                        // Apply gravity
                        playerVelocity.y += gravityValue * Time.deltaTime;                        // Combine horizontal and vertical movement
                        Vector3 finalMove = (move * playerSpeed) + (playerVelocity.y * Vector3.up);
                        controller.Move(finalMove * Time.deltaTime);
                    }
                }
```


            
