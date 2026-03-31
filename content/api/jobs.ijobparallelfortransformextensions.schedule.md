This version of Unity is unsupported.



# [IJobParallelForTransformExtensions](Jobs.IJobParallelForTransformExtensions.html).Schedule




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

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) Schedule(T jobData,
[Jobs.TransformAccessArray](Jobs.TransformAccessArray.html) transforms,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| jobData | The job to schedule. |
| transforms | The TransformAccessArray to run the job on. |
| dependsOn | A JobHandle containing any jobs that must finish executing before this job begins. You can combine multiple jobs with
JobHandle.CombineDependencies. Use dependencies to ensure that two jobs that read or write to the same data don't run in parallel. |





### Returns



**JobHandle**
        The handle identifying the scheduled job, which you can use as a dependency for a later job or to ensure completion on the main thread.





### Description



Schedules an [IJobParallelForTransform](Jobs.IJobParallelForTransform.html) job with read-write access to the transform data.





To avoid race conditions, this scheduling mode sorts the input transforms by hierarchy. Transforms with a shared root object are always processed on the same thread, though the order of processing within each hierarchy is undefined. Invalid transforms in the input [TransformAccessArray](Jobs.TransformAccessArray.html) are identified during the sorting stage and will not be passed to IJobParallelForTransform.Execute(), so jobs can safely assume that all [TransformAccess](Jobs.TransformAccess.html) instances are valid when this scheduling mode is used.

If read-only access to transform data is sufficient, use [IJobParallelForTransformExtensions.ScheduleReadOnlyByRef](Jobs.IJobParallelForTransformExtensions.ScheduleReadOnlyByRef.html) instead.

For large job structs, use [IJobParallelForTransformExtensions.ScheduleByRef](Jobs.IJobParallelForTransformExtensions.ScheduleByRef.html) to avoid any large pass-by-values.


            
