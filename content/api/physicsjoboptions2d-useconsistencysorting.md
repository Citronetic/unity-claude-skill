This version of Unity is unsupported.



# [PhysicsJobOptions2D](PhysicsJobOptions2D.html).useConsistencySorting




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












                    public bool useConsistencySorting;






### Description



Should physics simulation sort multi-threaded results to maintain processing order consistency?





When executing simulation steps on multiple CPU threads, separate batches of data are produced.  Processing these separate batches reduces determinism in processing order, although produces faster results.  If maintaining a consistent processing order becomes important to the simulation, then set this option to true. However, this involves sorting results, which can reduce overall performance.


            
