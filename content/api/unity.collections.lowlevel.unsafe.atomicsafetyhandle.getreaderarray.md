This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).GetReaderArray




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

public static int GetReaderArray([Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle,
int maxCount,
IntPtr output);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to return readers for. |
| maxCount | The maximum number of AtomicSafetyHandles to write to the output array. |
| output | A buffer where the job handles are written. |





### Returns



**int**
        The number of readers on the handle, which might be greater than the maximum count provided.





### Description



Fetches the job handles of all jobs that read from an AtomicSafetyHandle.





This is a debugging method used to produce better error messages and is not intended to be called from user code.


            
