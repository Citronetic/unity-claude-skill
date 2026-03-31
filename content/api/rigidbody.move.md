This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).Move




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










## Declaration

public void Move([Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The new position for the Rigidbody. |
| rotation | The new rotation for the Rigidbody. |





### Description



Moves the Rigidbody to `position` and rotates the Rigidbody to `rotation`.





Use [Rigidbody.Move](Rigidbody.Move.html) to move and rotate a [Rigidbody](Rigidbody.html), complying with the Rigidbody's interpolation setting.

If you enable Rigidbody interpolation on the [Rigidbody](Rigidbody.html), calling [Rigidbody.Move](Rigidbody.Move.html) results in a smooth transition between the two positions and rotations in any intermediate frames that Unity renders. Use [Rigidbody.Move](Rigidbody.Move.html) if you want to continuously move and rotate a Rigidbody in each [FixedUpdate](PlayerLoop.FixedUpdate.html).

To teleport a Rigidbody from one position and rotation to another position and rotation, without Unity rendering intermediate positions, set [Rigidbody.position](Rigidbody-position.html) and [Rigidbody.rotation](Rigidbody-rotation.html) instead.


            
