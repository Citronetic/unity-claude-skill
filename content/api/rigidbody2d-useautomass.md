This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).useAutoMass




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












                    public bool useAutoMass;






### Description



Should the total rigid-body [mass](Rigidbody2D-mass.html) be automatically calculated from the [Collider2D.density](Collider2D-density.html) of attached colliders?





When false, the explicitly set [mass](Rigidbody2D-mass.html) is used for the rigid-body mass.  When true, the mass is automatically calculated from all attached [Collider2D](Collider2D.html) as a product of their [Collider2D.density](Collider2D-density.html) and area.

When true, inside the Unity editor, the [Collider2D.density](Collider2D-density.html) property will appear on any attached [Collider2D](Collider2D.html) and the [mass](Rigidbody2D-mass.html) property will become read-only.

When false, the [mass](Rigidbody2D-mass.html) property can be written to and the [Collider2D.density](Collider2D-density.html) property is not shown.

Additional resources: [mass](Rigidbody2D-mass.html), [Collider2D.density](Collider2D-density.html).


            
