This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).EnforceAllBufferJobsHaveCompletedAndDisableReadWrite




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

public static [Unity.Collections.LowLevel.Unsafe.EnforceJobResult](Unity.Collections.LowLevel.Unsafe.EnforceJobResult.html) EnforceAllBufferJobsHaveCompletedAndDisableReadWrite([Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to check. |





### Returns



**EnforceJobResult**
        Whether the job system waited for any jobs to finish.





### Description



Waits for all jobs running against an [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) to complete and then disables the read and write access on the AtomicSafetyHandle.





When read and write acess is disabled, you can only dispose of the AtomicSafetyHandle.


            
