This version of Unity is unsupported.



# [Collider2D](Collider2D.html).density




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



The density of the collider used to calculate its mass (when auto mass is enabled).





When using [Rigidbody2D.useAutoMass](Rigidbody2D-useAutoMass.html), increasing the collider density increases its
        mass - as does increasing its area - as the collider mass is calculated as a product of density and area.

Note that by default, [Rigidbody2D.useAutoMass](Rigidbody2D-useAutoMass.html) is disabled, so the mass of the collider is
set directly by [Rigidbody2D.mass](Rigidbody2D-mass.html), and this density value is ignored.

Additional resources: [Rigidbody2D.mass](Rigidbody2D-mass.html), [Rigidbody2D.useAutoMass](Rigidbody2D-useAutoMass.html).


            
