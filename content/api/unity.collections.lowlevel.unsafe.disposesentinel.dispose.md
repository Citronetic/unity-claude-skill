This version of Unity is unsupported.



# [DisposeSentinel](Unity.Collections.LowLevel.Unsafe.DisposeSentinel.html).Dispose




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

public static void Dispose(ref [Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) safety,
ref [Unity.Collections.LowLevel.Unsafe.DisposeSentinel](Unity.Collections.LowLevel.Unsafe.DisposeSentinel.html) sentinel);






### Parameters



| Parameter | Description |
| --- | --- |
| safety | The AtomicSafetyHandle returned when invoking the Create method. |
| sentinel | The DisposeSentinel to clear. |





### Description



Releases the `AtomicSafetyHandle` and clears the `DisposeSentinel`.





If the `AtomicSafetyHandle` can't be released, which usually happens either because a job is accessing the data or because the handle
has already been released, an exception is thrown.


            
