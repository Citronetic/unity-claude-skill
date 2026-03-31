This version of Unity is unsupported.



# [IJobForExtensions](Unity.Jobs.IJobForExtensions.html).ScheduleParallel




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

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleParallel(T jobData,
int arrayLength,
int innerloopBatchCount,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependency);






### Parameters



| Parameter | Description |
| --- | --- |
| jobData | The job and data to schedule. |
| arrayLength | This job's Execute method will be called this many times, with its index argument ranging from 0 to (arrayLength - 1). Typically, this corresponds to the length of an array or array-like container passed in the job struct, but this is not necessarily the case. |
| innerloopBatchCount | The number of iterations which workstealing is performed over. For example, a value of 32 means the job queue steals 32
iterations and then performs them in an efficient inner loop. |
| dependency | The JobHandle of the job's dependency. You can use dependencies to make sure that a job executes on worker threads
after the dependency has completed execution and two jobs that read or write to same data don't run in parallel. |





### Returns



**JobHandle**
        The [JobHandle](Unity.Jobs.JobHandle.html) of the scheduled job. You can use the `JobHandle` as a dependency for a later job or to make sure that the job
completes on the main thread.





### Description



Schedules the job to execute concurrently on multiple worker threads.





For large job structs, use [IJobForExtensions.ScheduleParallelByRef](Unity.Jobs.IJobForExtensions.ScheduleParallelByRef.html) to avoid any large pass-by-values.

To process all loop elements on a single worker thread, use [IJobForExtensions.ScheduleByRef](Unity.Jobs.IJobForExtensions.ScheduleByRef.html).

Additional resources: [IJobFor](Unity.Jobs.IJobFor.html).


            
