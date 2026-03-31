This version of Unity is unsupported.



# [IJobParallelForTransformExtensions](Jobs.IJobParallelForTransformExtensions.html).RunReadOnly




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

public static void RunReadOnly(T jobData,
[Jobs.TransformAccessArray](Jobs.TransformAccessArray.html) transforms);






### Parameters



| Parameter | Description |
| --- | --- |
| transforms | The TransformAccessArray to run this job on. |
| jobData | The job to run. |





### Description



Runs an [IJobParallelForTransform](Jobs.IJobParallelForTransform.html) job immediately on the main thread, with read-only access to the transform data.





While this method is useful in development or test environments, it is typically a mistake to use it in production; it offers no real benefits over implementing the job code as a simple main-thread function call. To schedule a job to run asynchronously, use [IJobParallelForTransformExtensions.ScheduleReadOnlyByRef](Jobs.IJobParallelForTransformExtensions.ScheduleReadOnlyByRef.html).

This method assumes the job only requires read-only access to the transform data, and skips any sorting or filtering of the input transforms which would otherwise be necessary for safety purposes. One important consequence is that any null, deleted, or invalid Transforms in the input [TransformAccessArray](Jobs.TransformAccessArray.html) will not be filtered out, and are still passed to worker threads for processing. Jobs that use this scheduling mode should therefore use [TransformAccess.isValid](Jobs.TransformAccess-isValid.html) to check whether a specific transform instance is valid before processing its data.

For large job structs, use [IJobParallelForTransformExtensions.RunReadOnlyByRef](Jobs.IJobParallelForTransformExtensions.RunReadOnlyByRef.html) to avoid any large pass-by-values.


            
