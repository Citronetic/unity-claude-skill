This version of Unity is unsupported.



# [BuoyancyEffector2D](BuoyancyEffector2D.html).surfaceLevel




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












                    public float surfaceLevel;






### Description



Defines an arbitrary horizontal line that represents the fluid surface level.





The [Collider2D](Collider2D.html) used by the effector only defines the overall area of effect for the buoyancy forces, but not the actual surface level of the fluid. Any 2D colliders that overlap this area of effect are then tested against the surface level. The surface level is a line which is used to determine if the [Collider2D](Collider2D.html) is submerged, not submerged or partially submerged.  Anything below this line is submerged, anything above this line isn't submerged and anything overlapping this line is partially submerged.

The surface level is defined as a line that extends to infinity along the X-axis and can be configured to by in any position along the Y-axis i.e the surface can be increased or decreased along the Y-axis.  In effect, the surface can be raised or lowered to produce filling or draining fluid effects or simply left at a fixed position.

Typical usage is to use a single effector and associated [Collider2D](Collider2D.html), most likely a [BoxCollider2D](BoxCollider2D.html) however you are not limited to this and can use any number or type of [Collider2D](Collider2D.html) to define the potential buoyancy area(s) but again, the actual surface level is defined by this property.

Rotating the [GameObject](GameObject.html) will not cause the surface level to rotate as it is defined as a world-space line.  This greatly simplifies the intersection calculations and keeps performance high.

The surface level scales with [Transform](Transform.html) scale in the Y-axis so you can set the surface level relative to effector colliders and it will keep its relative position when scaling.

Additional resources: ::Collider2D::usedByEffector.


            
