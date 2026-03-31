This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).Release




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

public static void Release([Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to release. |





### Description



Releases a previously created AtomicSafetyHandle.





After this call, this AtomicSafetyHandle and copies of it are no longer valid. [AtomicSafetyHandle.IsHandleValid](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.IsHandleValid.html) returns false.

You must call [AtomicSafetyHandle.CheckDeallocateAndThrow](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.CheckDeallocateAndThrow.html) before calling Release. Don't call this method for the handle returned by
[AtomicSafetyHandle.GetTempMemoryHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.GetTempMemoryHandle.html) or [AtomicSafetyHandle.GetTempUnsafePtrSliceHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.GetTempUnsafePtrSliceHandle.html), because the lifetime of those handles is automatically managed by the engine.


            
