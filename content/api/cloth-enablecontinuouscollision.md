This version of Unity is unsupported.



# [Cloth](Cloth.html).enableContinuousCollision




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




                [Switch to Manual](../Manual/class-Cloth.html)







                    public bool enableContinuousCollision;






### Description



Enable continuous collision to improve collision stability.





Continuous collision is around 2x more computationally expensive than discrete collision, but it is necessary to detect collision between fast moving objects. Continuous collision analyzes the trajectory of particles and capsules to determine when a contact occurs. After the first time of contact, the particle is moved with the shape until the end of the iteration.


            
