This version of Unity is unsupported.



# [ContactPoint2D](ContactPoint2D.html).separation




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












                    public float separation;






### Description



Gets the distance between the colliders at the contact point.





Unity's physics engine tracks the distances between all potentially overlapping colliders. Once a given collider pair has overlapped (collided), contacts are immediately generated and an OnCollisionEnter2D event is sent. While the collider pair is still active, the distance between the colliders can be greater than zero, equal to zero, or even less than zero when the colliders are still apart, touching, or overlapping respectively.


            
