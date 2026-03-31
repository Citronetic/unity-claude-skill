This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).ValidateNonDefaultHandle




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

public static void ValidateNonDefaultHandle(ref [Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to check. |





### Description



Checks that the handle has been initialized, and if so, checks that it is still valid.





This is almost identical to [AtomicSafetyHandle.IsValidNonDefaultHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.IsValidNonDefaultHandle.html), except that if the AtomicSafetyHandle has been initialized
but isn't valid, then an `ObjectDisposedException` is thrown instead of returning `false`.

If the handle hasn't been initialized, then this method does nothing. Use [AtomicSafetyHandle.IsDefaultValue](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.IsDefaultValue.html) to check whether a handle is uninitialized.


            
