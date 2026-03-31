This version of Unity is unsupported.



# [Cloth](Cloth.html).clothSolverFrequency




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







                    public float clothSolverFrequency;






### Description



Number of cloth solver iterations per second.





The solver frequency is specified as iterations per second. A solver frequency value of 240 corresponds to 4 iterations per frame at 60 frames per second. In general, simulation will become more accurate if higher solver frequency value is used. However, simulation time grows roughly linearly with solver frequency. Typically this value is between 120 and 300.


            
