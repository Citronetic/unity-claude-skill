This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).GetTempUnsafePtrSliceHandle




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

public static [Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) GetTempUnsafePtrSliceHandle();






### Returns



**AtomicSafetyHandle**
        A shared AtomicSafetyHandle.





### Description



Gets a single shared AtomicSafetyHandle.





For example, a shared AtomicSafetyHandle might be shared with a NativeSlice that points to stack memory.

The shared AtomicSafetyHandle is never disposed, and you can't use it in a job.


            
