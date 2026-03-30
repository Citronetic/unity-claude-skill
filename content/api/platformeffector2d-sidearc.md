This version of Unity is unsupported.



# [PlatformEffector2D](PlatformEffector2D.html).sideArc




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












                    public float sideArc;






### Description



The angle of an arc that defines the sides of the platform centered on the local 'left' and 'right' of the effector. Any collision normals within this arc are considered for the 'side' behaviours.





Any collision normal with an angle within this arc is always considered for the optional side behaviours, whereas everything outside this arc is never considered for side behaviours.

The default defines an arc that includes local vertical edges i.e. typical side edges.  Setting the arc to its maximum of 180 degrees results in all collision normals being considered for the optional side behaviours.  Setting the arc to its minimum of 0 degrees results in no collision normals being considered for the optional side behaviours.

Additional resources: [useSideBounce](PlatformEffector2D-useSideBounce.html), [useSideFriction](PlatformEffector2D-useSideFriction.html).


            
