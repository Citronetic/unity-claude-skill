This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).AddForceAtPosition




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















## Declaration

public void AddForceAtPosition([Vector2](Vector2.html) force,
[Vector2](Vector2.html) position,
[ForceMode2D](ForceMode2D.html) mode = ForceMode2D.Force);






### Parameters



| Parameter | Description |
| --- | --- |
| force | Components of the force in the X and Y axes. |
| position | Position in world space to apply the force. |
| mode | The method used to apply the specified force. |





### Description



Apply a force at a given position in space.





The [AddForce](Rigidbody2D.AddForce.html) function applies a force that acts straight through the rigidbody's centre of mass and so produces only positional movement and no rotation. *AddForceAtPosition* can apply the force at any position in world space and will typically also apply a *torque* to the object which will set it rotating. Note that for the purposes of this function, the rigidbody is just a coordinate space of infinite size, so there is no reason why the force needs to be applied within the confines of the object's graphic or colliders.

Additional resources:: [AddForce](Rigidbody2D.AddForce.html), [AddTorque](Rigidbody2D.AddTorque.html), [AddForceAtPosition](Rigidbody2D.AddForceAtPosition.html), [ForceMode2D](ForceMode2D.html).


            
