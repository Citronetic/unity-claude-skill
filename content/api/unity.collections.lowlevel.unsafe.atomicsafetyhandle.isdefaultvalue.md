This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).IsDefaultValue




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

public static bool IsDefaultValue(ref [Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to check. |





### Returns



**bool**

          `true` if the AtomicSafetyHandle hasn't been initialized and still has its default value; `false` otherwise.





### Description



Checks if an AtomicSafetyHandle has its default value.





An AtomicSafetyHandle still has its default value if it hasn't been initialized by being assigned or passed to [AtomicSafetyHandle.Create](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.Create.html).

By default, an AtomicSafetyHandle variable isn't initialized, which means it doesn't reference any central record and doesn't have a stored a version number.
This changes when you pass the variable to [AtomicSafetyHandle.Create](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.Create.html), or when you assign it from an existing initialized AtomicSafetyHandle.


            
