This version of Unity is unsupported.



# [PhysicsJobOptions2D](PhysicsJobOptions2D.html).useMultithreading




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












                    public bool useMultithreading;






### Description



Should physics simulation use multithreading?





Turning on multithreading executes the simulation steps using the job system, and uses the options in [PhysicsJobOptions2D](PhysicsJobOptions2D.html) to control how to achieve that. Turning off multithreading executes the simulation only on the main thread, and does not use the options in [PhysicsJobOptions2D](PhysicsJobOptions2D.html).


            
