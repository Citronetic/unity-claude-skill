This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).angularVelocity




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












                    public float angularVelocity;






### Description



Angular velocity in degrees per second.





A Rigidbody2D can only rotate around one axis (the Z axis) so the angular velocity is a single float value rather than a vector. Typically, the value of this property is not set directly but rather by applying `torque` to the rigidbody. The angular velocity will also decrease automatically under the effect of [angularDamping](Rigidbody2D-angularDamping.html).

Additional resources: [linearVelocity](Rigidbody2D-linearVelocity.html), [AddTorque](Rigidbody2D.AddTorque.html), [AddForceAtPosition](Rigidbody2D.AddForceAtPosition.html) & [angularDamping](Rigidbody2D-angularDamping.html).


            
