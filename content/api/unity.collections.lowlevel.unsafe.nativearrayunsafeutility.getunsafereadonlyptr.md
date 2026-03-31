This version of Unity is unsupported.



# [NativeArrayUnsafeUtility](Unity.Collections.LowLevel.Unsafe.NativeArrayUnsafeUtility.html).GetUnsafeReadOnlyPtr




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

public static void* GetUnsafeReadOnlyPtr(NativeArray<T> nativeArray);






## Declaration

public static void* GetUnsafeReadOnlyPtr(ReadOnly<T> nativeArray);






### Parameters



| Parameter | Description |
| --- | --- |
| nativeArray | The NativeArray to check. |





### Returns



**void***
        The memory buffer pointer of the NativeArray.





### Description



Gets a pointer to the memory buffer of a NativeArray or NativeArray.ReadOnly.





When ENABLE_UNITY_COLLECTIONS_CHECKS is set (which is always the case in the Editor, but never in a built player), this method
checks that the [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) associated with the NativeContainer can be read from and isn't written to from another thread. If it can't be read,
a System.InvalidOperationException is raised. While you can write to the returned pointer, this is generally unsafe. When this method call succeeds, you're
only guaranteed that reading from this pointer is safe. Writing to this pointer might lead to race conditions and crashes later during program execution.


            
