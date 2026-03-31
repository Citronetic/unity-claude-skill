This version of Unity is unsupported.



# EnforceJobResult





enumeration


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



Enumerates the possible values returned by [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) methods that wait for all jobs accessing the native container associated with the handle to finish.





The members of this enum describe whether the job system had to wait for any jobs to finish.

The following methods use this enum as a return type:



          - [AtomicSafetyHandle.EnforceAllBufferJobsHaveCompleted](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.EnforceAllBufferJobsHaveCompleted.html)

          - [AtomicSafetyHandle.EnforceAllBufferJobsHaveCompletedAndDisableReadWrite](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.EnforceAllBufferJobsHaveCompletedAndDisableReadWrite.html)

          - [AtomicSafetyHandle.EnforceAllBufferJobsHaveCompletedAndRelease](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.EnforceAllBufferJobsHaveCompletedAndRelease.html).







### Properties



| Property | Description |
| --- | --- |
| AllJobsAlreadySynced | Indicates that all jobs were already complete at the time of the wait request. |
| DidSyncRunningJobs | Indicates that the job system waited for at least one job to finish. |
| HandleWasAlreadyDeallocated | Indicates that the job system didn't wait because the AtomicSafetyHandle was invalid, likely because the associated container had already been deallocated. |


            
