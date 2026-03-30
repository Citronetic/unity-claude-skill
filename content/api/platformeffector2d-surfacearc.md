This version of Unity is unsupported.



# [PlatformEffector2D](PlatformEffector2D.html).surfaceArc




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












                    public float surfaceArc;






### Description



The angle of an arc that defines the surface of the platform centered of the local 'up' of the effector.





Any collision normal with an angle within this arc is never considered for one-way whereas everything outside this arc is considered for one-way.

The default defines an arc that includes collisions from the local horizontal to the local vertical.  If collisions with the local vertical sides are not required then you can reduce the arc by a few degrees.

Setting the arc to its maximum of 360 degrees results in all collision normals being the surface therefore no one-way can occur.  Setting the arc to its minimum of 0 degrees results in all collision normals being considered outside the surface therefore everything is considered for the optional one-way behaviour.


            
