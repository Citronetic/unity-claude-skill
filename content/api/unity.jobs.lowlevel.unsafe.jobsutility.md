This version of Unity is unsupported.



# JobsUtility





class in
          Unity.Jobs.LowLevel.Unsafe



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Provides methods for creating, running, and debugging jobs.





### Static Properties



| Property | Description |
| --- | --- |
| CacheLineSize | The size of a cache line. |
| IsExecutingJob | Checks if this is in a job. |
| JobCompilerEnabled | Set whether to run jobs in Mono or Burst. |
| JobDebuggerEnabled | Set whether to use the jobs debugger at runtime. |
| JobWorkerCount | Current number of worker threads available to the Unity JobQueue. |
| JobWorkerMaximumCount | Maximum number of worker threads available to the Unity JobQueue (Read Only). |
| MaxJobThreadCount | The maximum number of job threads that the job system can create. |
| ThreadIndex | Gets the index for the current thread when executing a job, otherwise 0. |
| ThreadIndexCount | Gets the maximum number of job workers that can work on a job at the same time. |





### Static Methods



| Method | Description |
| --- | --- |
| CreateJobReflectionData | Creates job reflection data. |
| GetJobRange | Gets the begin index and end index of a range. |
| GetWorkStealingRange | Gets a work stealing range. |
| PatchBufferMinMaxRanges | Injects debug checks for min and max ranges of a native array. |
| ResetJobWorkerCount | Reset JobWorkerCount to the Unity adjusted value. |
| Schedule | Schedules a single IJob. |
| ScheduleParallelFor | Schedules a IJobParallelFor job. |
| ScheduleParallelForDeferArraySize | Schedules a IJobParallelFor job. |
| ScheduleParallelForTransform | Schedules an IJobParallelForTransform job. |
| ScheduleParallelForTransformReadOnly | Schedules an IJobParallelForTransform job with read-only access to the transform data. |


            
