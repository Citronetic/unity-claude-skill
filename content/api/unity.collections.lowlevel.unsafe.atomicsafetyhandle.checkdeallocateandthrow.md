This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).CheckDeallocateAndThrow




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

public static void CheckDeallocateAndThrow([Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The  AtomicSafetyHandle to check. |





### Description



Check if an AtomicSafetyHandle can be deallocated.





Throws an exception if the AtomicSafetyHandle has already been destroyed or a job is currently accessing the data.


            
