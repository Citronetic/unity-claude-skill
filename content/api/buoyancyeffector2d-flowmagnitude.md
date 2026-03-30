This version of Unity is unsupported.



# [BuoyancyEffector2D](BuoyancyEffector2D.html).flowMagnitude




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












                    public float flowMagnitude;






### Description



The magnitude of the force used to similate fluid flow.





Fluid flow can be defined to move in any direction with a specific magnitude and a random variation on that magnitude.

This property defines the size of the force to be applied in the direction defined by [flowAngle](BuoyancyEffector2D-flowAngle.html).  This magnitude can be randomly varied by using [flowVariation](BuoyancyEffector2D-flowVariation.html).

The flow forces are applied to the center of any submerged region of a [Collider2D](Collider2D.html) so it will not produce any torque (rotation) if the [Collider2D](Collider2D.html) is fully submerged (fully below the [surfaceLevel](BuoyancyEffector2D-surfaceLevel.html)) but will produce torque if the [Collider2D](Collider2D.html) is partially submerged (overlapping the [surfaceLevel](BuoyancyEffector2D-surfaceLevel.html)).

Additional resources: [flowAngle](BuoyancyEffector2D-flowAngle.html), [flowVariation](BuoyancyEffector2D-flowVariation.html).


            
