This version of Unity is unsupported.



# [BuoyancyEffector2D](BuoyancyEffector2D.html).linearDamping




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












                    public float linearDamping;






### Description



A force applied to slow linear movement of any [Collider2D](Collider2D.html) in contact with the effector.





Linear damping provides the ability to slow [Collider2D](Collider2D.html) in contact with the effector.  Increasing the linear damping simulates an increasingly viscous fluid making it harder for colliders to move through it.

It is similar to ::Rigidbody2D::linearDamping but is more complex in that damping is applied not only as a function of velocity but also takes into account the [Collider2D](Collider2D.html) submerged area.  The damping force is applied to the center of the submerged area and therefore can generate torque i.e. make the object rotate.


            
