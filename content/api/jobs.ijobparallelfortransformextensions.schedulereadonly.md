This version of Unity is unsupported.



# [IJobParallelForTransformExtensions](Jobs.IJobParallelForTransformExtensions.html).ScheduleReadOnly




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

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleReadOnly(T jobData,
[Jobs.TransformAccessArray](Jobs.TransformAccessArray.html) transforms,
int batchSize,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| jobData | The job to schedule. |
| transforms | The TransformAccessArray to run the job on. |
| batchSize | Granularity in which workstealing is performed. For example, a value of 32 means the job queue will steal 32 iterations and then perform them in an efficient inner loop. |
| dependsOn | A JobHandle containing any jobs that must finish executing before this job begins. You can combine multiple jobs with
JobHandle.CombineDependencies. Use dependencies to ensure that two jobs that read or write to the same data don't run in parallel. |





### Returns



**JobHandle**
        The handle identifying the scheduled job, which you can use as a dependency for a later job or to ensure completion on the main thread.





### Description



Schedules an [IJobParallelForTransform](Jobs.IJobParallelForTransform.html) job with read-only access to the transform data.





This method assumes the job only requires read-only access to the transform data, and skips any sorting or filtering of the input transforms which would otherwise be necessary for safety purposes. One important consequence is that any null, deleted, or invalid Transforms in the input [TransformAccessArray](Jobs.TransformAccessArray.html) will not be filtered out, and are still passed to worker threads for processing. Jobs that use this scheduling mode should therefore use [TransformAccess.isValid](Jobs.TransformAccess-isValid.html) to check whether a specific transform instance is valid before processing its data.

For large job structs, use [IJobParallelForTransformExtensions.ScheduleReadOnlyByRef](Jobs.IJobParallelForTransformExtensions.ScheduleReadOnlyByRef.html) to avoid any large pass-by-values.


            
