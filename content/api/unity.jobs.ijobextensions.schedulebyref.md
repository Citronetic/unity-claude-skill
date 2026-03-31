This version of Unity is unsupported.



# [IJobExtensions](Unity.Jobs.IJobExtensions.html).ScheduleByRef




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

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleByRef(ref T jobData,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| jobData | The job and data to schedule. |
| dependsOn | The dependency of the job. Dependencies ensure that a job executes on worker threads after the dependency has completed execution, and
that two jobs reading or writing to same data do not run in parallel. |





### Returns



**JobHandle**
        The handle identifying the scheduled job, which you can use as a dependency for a later job or to ensure completion on the main thread.





### Description



Schedules the job for execution on a worker thread.





This variant passes the job struct by reference instead of by value, which can be faster than [IJobExtensions.Schedule](Unity.Jobs.IJobExtensions.Schedule.html) for larger job structs. Note that worker threads always operate on a local copy of the job struct.

Additional resources: [IJob](Unity.Jobs.IJob.html).


            
