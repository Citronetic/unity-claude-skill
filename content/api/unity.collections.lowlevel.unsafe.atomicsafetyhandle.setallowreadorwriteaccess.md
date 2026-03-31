This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).SetAllowReadOrWriteAccess




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

public static void SetAllowReadOrWriteAccess([Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle,
bool allowReadWriteAccess);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to set read and write access on. |
| allowReadWriteAccess | Use false to disallow read or write access, or true otherwise. |





### Description



Sets the read or write access on an AtomicSafetyHandle.





For example, when a buffer references other data that becomes invalid, then typically the only operation that can be performed safely
is to dispose of the buffer. Calling this method makes sure that any further attempts to read or write the buffer throws an exception.

Additional resources: [AtomicSafetyHandle.GetAllowReadOrWriteAccess](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.GetAllowReadOrWriteAccess.html).


            
