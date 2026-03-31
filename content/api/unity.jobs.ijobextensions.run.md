This version of Unity is unsupported.



# [IJobExtensions](Unity.Jobs.IJobExtensions.html).Run




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

public static void Run(T jobData);






### Parameters



| Parameter | Description |
| --- | --- |
| jobData | The job and data to run. |





### Description



Performs the job's Execute method immediately on the same thread.





While this method is useful in development or test environments, it is typically a mistake to use it in production; it offers no real benefits over implementing the job code as a simple main-thread function call. To schedule a job to run asynchronously, use [IJobExtensions.ScheduleByRef](Unity.Jobs.IJobExtensions.ScheduleByRef.html).

For large job structs, use [IJobExtensions.RunByRef](Unity.Jobs.IJobExtensions.RunByRef.html) to avoid any large pass-by-values.

Additional resources: [IJob](Unity.Jobs.IJob.html).


            
