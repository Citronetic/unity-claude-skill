This version of Unity is unsupported.



# [SoftJointLimit](SoftJointLimit.html).contactDistance




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












                    public float contactDistance;






### Description



Determines how far ahead in space the solver can "see" the joint limit.





Distance inside the limit value at which the limit will be considered to be active by the solver.

For translational joints the unit is meters.

For rotational joints the unit is degrees.

Setting this low can cause jittering, but might run faster.

Setting this high can reduce jittering, but might run slower. Jointed objects will still fall asleep correctly.

**0 = use defaults**

Pipeline:
[Image: image].


            
