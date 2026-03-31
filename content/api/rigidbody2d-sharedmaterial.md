This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).sharedMaterial




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












                    public [PhysicsMaterial2D](PhysicsMaterial2D.html) sharedMaterial;






### Description



The [PhysicsMaterial2D](PhysicsMaterial2D.html) that is applied to all [Collider2D](Collider2D.html) attached to this [Rigidbody2D](Rigidbody2D.html).





The [PhysicsMaterial2D](PhysicsMaterial2D.html) specified here is applied to all attached [Collider2D](Collider2D.html) unless the [Collider2D](Collider2D.html) specify their own [PhysicsMaterial2D](PhysicsMaterial2D.html) in [Collider2D.sharedMaterial](Collider2D-sharedMaterial.html).  If no [Collider2D.sharedMaterial](Collider2D-sharedMaterial.html) or [Rigidbody2D.sharedMaterial](Rigidbody2D-sharedMaterial.html) is specified then the global [PhysicsMaterial2D](PhysicsMaterial2D.html) is used.  If no global [PhysicsMaterial2D](PhysicsMaterial2D.html) is specified then the defaults are: [PhysicsMaterial2D.friction](PhysicsMaterial2D-friction.html) = 0.4 and [PhysicsMaterial2D.bounciness](PhysicsMaterial2D-bounciness.html) = 0.

In other words, a [PhysicsMaterial2D](PhysicsMaterial2D.html) specified on the [Collider2D](Collider2D.html) has priority over a [PhysicsMaterial2D](PhysicsMaterial2D.html) specified on a [Rigidbody2D](Rigidbody2D.html) which has priority over the global [PhysicsMaterial2D](PhysicsMaterial2D.html).

Additional resources: [Collider2D.sharedMaterial](Collider2D-sharedMaterial.html) & [PhysicsMaterial2D](PhysicsMaterial2D.html).


            
