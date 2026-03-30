This version of Unity is unsupported.



# [AnimatorUpdateMode](AnimatorUpdateMode.html).Fixed




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



















### Description



Animator updates in the FixedUpdate loop. This is ideal for physics-driven animations that require frame rate independence.





This mode ensures that animation updates align with the physics engine's update loop, maintaining smooth and consistent physics interactions regardless of the frame rate. By default, it synchronizes with the FixedUpdate loop, but this can be reconfigured for specific project requirements. Essential for animations tightly coupled with physics simulations, such as character rigs and vehicle dynamics. Ensure [Animator.animatePhysics](Animator-animatePhysics.html) is set to true for accurate synchronization with physics calculations and collision responses.


            
