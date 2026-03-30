This version of Unity is unsupported.



# [BuoyancyEffector2D](BuoyancyEffector2D.html).density




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












                    public float density;






### Description



The density of the fluid used to calculate the buoyancy forces.





Buoyancy forces are calculated by comparing the density of the effector to the [Collider2D.density](Collider2D-density.html) of the [Collider2D](Collider2D.html).  If the collider is less dense than the effector then the collider will float i.e. become more buoyant.  If the collider is more dense than the effector then the collider will sink i.e. become less buoyant.  If the collider is equally dense as the effector then there is no buoyancy forces applied and the collider will neither float or sink.

Note that the [Collider2D.density](Collider2D-density.html) can only be set when [Rigidbody2D.useAutoMass](Rigidbody2D-useAutoMass.html) is true.  This provides the ability to fine-tune the collider density versus the effector density.  If this is not required then [Rigidbody2D.useAutoMass](Rigidbody2D-useAutoMass.html) can be set to false in which case the [Collider2D.density](Collider2D-density.html) is fixed at 1 therefore an effector density more than this will cause the collider to float whereas an effector density less than this will cause the collider to sink.


            
