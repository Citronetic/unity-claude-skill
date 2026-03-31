This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).GetTempMemoryHandle




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

public static [Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) GetTempMemoryHandle();






### Returns



**AtomicSafetyHandle**
        The AtomicSafetyHandle for temporary memory allocations in the current scope.





### Description



Gets an AtomicSafetyHandle for the temporary memory allocations in a temporary memory scope.





The temporary safety handle is invalidated when the temporary memory is freed. This happens when the active temporary memory scope exists, which happens at least once per frame.
Don't manually call Release on this AtomicSafetyHandle.

Additional resources: [AtomicSafetyHandle.IsTempMemoryHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.IsTempMemoryHandle.html).


            
