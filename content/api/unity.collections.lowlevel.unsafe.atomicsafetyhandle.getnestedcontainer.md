This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).GetNestedContainer




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

public static bool GetNestedContainer([Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to check. |





### Returns



**bool**

          `true` if the given AtomicSafetyHandle is marked as a nested container; `false` otherwise.





### Description



Checks whether an AtomicSafetyHandle represents a nested container.





If the AtomicSafetyHandle is marked as a nested container, it can't be used safely in jobs.

Additional resources: [AtomicSafetyHandle.SetNestedContainer](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.SetNestedContainer.html).


            
