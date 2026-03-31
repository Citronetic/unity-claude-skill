This version of Unity is unsupported.



# [JobsUtility](Unity.Jobs.LowLevel.Unsafe.JobsUtility.html).ThreadIndexCount




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












                    public static int ThreadIndexCount;






### Description



Gets the maximum number of job workers that can work on a job at the same time.





The job system creates a number of job worker threads no greater than the number of logical CPU cores for the platform. However, because arbitrary
threads can execute jobs via work stealing, the job system allocates extra workers which act as temporary job worker threads. JobsUtility.ThreadIndexCount represents the
maximum number of job worker threads plus the temporary workers that the job system uses. As such, this value is useful to allocate buffers which should be subdivided evenly
between job workers because [JobsUtility.ThreadIndex](Unity.Jobs.LowLevel.Unsafe.JobsUtility.ThreadIndex.html) and Unity.Collections.LowLevel.Unsafe.NativeSetThreadIndex never return a value greater
than JobsUtility.ThreadIndexCount.


            
