This version of Unity is unsupported.



# [BuoyancyEffector2D](BuoyancyEffector2D.html).flowVariation




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












                    public float flowVariation;






### Description



The random variation of the force used to similate fluid flow.





Fluid flow can be defined to move in any direction with a specific magnitude and a random variation on that magnitude.

This property defines the random variation in addition to [flowMagnitude](BuoyancyEffector2D-flowMagnitude.html) of the force to be applied in the direction defined by [flowAngle](BuoyancyEffector2D-flowAngle.html).

The flow forces are applied to the center of any submerged region of a [Collider2D](Collider2D.html) so it will not produce any torque (rotation) if the [Collider2D](Collider2D.html) is fully submerged (fully below the [surfaceLevel](BuoyancyEffector2D-surfaceLevel.html)) but will produce torque if the [Collider2D](Collider2D.html) is partially submerged (overlapping the [surfaceLevel](BuoyancyEffector2D-surfaceLevel.html)).

Additional resources: [flowAngle](BuoyancyEffector2D-flowAngle.html), [flowMagnitude](BuoyancyEffector2D-flowMagnitude.html).


            
