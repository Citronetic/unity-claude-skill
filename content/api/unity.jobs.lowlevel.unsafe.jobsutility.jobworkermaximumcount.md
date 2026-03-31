This version of Unity is unsupported.



# [JobsUtility](Unity.Jobs.LowLevel.Unsafe.JobsUtility.html).JobWorkerMaximumCount




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












                    public static int JobWorkerMaximumCount;






### Description



Maximum number of worker threads available to the Unity JobQueue (Read Only).





This property determines the maximum number of worker threads when you set the [JobWorkerCount](Unity.Jobs.LowLevel.Unsafe.JobsUtility.JobWorkerCount.html) property. This value is read-only at runtime, but you can set it with the command line argument `-job-worker-count value` for the Editor or standalone Players.
Unity ignores this setting if this value exceeds the default value that the runtime selects for the specific platform and hardware.


            
