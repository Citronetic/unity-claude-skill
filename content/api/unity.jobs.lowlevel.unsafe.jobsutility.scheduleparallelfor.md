This version of Unity is unsupported.



# [JobsUtility](Unity.Jobs.LowLevel.Unsafe.JobsUtility.html).ScheduleParallelFor




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















## Declaration

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleParallelFor(ref [Unity.Jobs.LowLevel.Unsafe.JobsUtility.JobScheduleParameters](Unity.Jobs.LowLevel.Unsafe.JobsUtility.JobScheduleParameters.html) parameters,
int arrayLength,
int innerloopBatchCount);






### Returns



**JobHandle**
        A [JobHandle](Unity.Jobs.JobHandle.html) to the new job.





### Description



Schedules a [IJobParallelFor](Unity.Jobs.IJobParallelFor.html) job.


            
