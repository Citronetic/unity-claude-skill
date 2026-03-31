This version of Unity is unsupported.



# [IJobForExtensions](Unity.Jobs.IJobForExtensions.html).Run




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

public static void Run(T jobData,
int arrayLength);






### Parameters



| Parameter | Description |
| --- | --- |
| jobData | The job and data to execute. |
| arrayLength | This job's Execute method will be called this many times, with its index argument ranging from 0 to (arrayLength - 1). Typically, this corresponds to the length of an array or array-like container passed in the job struct, but this is not necessarily the case. |





### Description



Performs the job's Execute method immediately on the same thread.





While this method is useful in development or test environments, it is typically a mistake to use it in production; it offers no real benefits over implementing the job code as a simple main-thread function call. To schedule a job to run asynchronously, use [IJobForExtensions.ScheduleByRef](Unity.Jobs.IJobForExtensions.ScheduleByRef.html).

For large job structs, use [IJobForExtensions.RunByRef](Unity.Jobs.IJobForExtensions.RunByRef.html) to avoid any large pass-by-values.

Additional resources: [IJobFor](Unity.Jobs.IJobFor.html).


            
