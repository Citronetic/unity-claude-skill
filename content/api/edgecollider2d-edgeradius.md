This version of Unity is unsupported.



# [EdgeCollider2D](EdgeCollider2D.html).edgeRadius




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












                    public float edgeRadius;






### Description



Controls the radius of all edges created by the collider.





The edge radius controls a radius extending around the edge.  When an edge has zero radius it is effectively infinitely thin.  When an edge has a radius greater than zero, each edge acts like a 'capsule' shape with rounded ends.

It is important to know that when using [Rigidbody2D.useAutoMass](Rigidbody2D-useAutoMass.html), changing the edge radius does not change the calculated [Rigidbody2D.mass](Rigidbody2D-mass.html) even though the collision area has changed.  The mass is calculated as if the edge radius is zero i.e.not used.


            
