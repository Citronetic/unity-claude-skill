This version of Unity is unsupported.



# [JobsUtility](Unity.Jobs.LowLevel.Unsafe.JobsUtility.html).JobCompilerEnabled




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












                    public static bool JobCompilerEnabled;






### Description



Set whether to run jobs in Mono or Burst.





When disabled, this forces jobs that have already been compiled with Burst to run in Mono instead. For example, if you want to debug jobs
or want to compare behavior or performance.


            
