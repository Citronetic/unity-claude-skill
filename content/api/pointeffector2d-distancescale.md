This version of Unity is unsupported.



# [PointEffector2D](PointEffector2D.html).distanceScale




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












                    public float distanceScale;






### Description



The scale applied to the calculated distance between source and target.





When the distance is calculated between source and target for distance-based force calculations (such as inverse-linear or inverse-squared), it is then scaled by this value.  This changes the effective distance used, it does not change the actual distance in which the effector works, as that is always controlled by the collider.

This can be useful when using very large or very small colliders, allowing you to shrink or expand the distance calculation, changing the magnitude of the force applied.


            
