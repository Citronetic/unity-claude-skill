This version of Unity is unsupported.



# [NativeArrayUnsafeUtility](Unity.Collections.LowLevel.Unsafe.NativeArrayUnsafeUtility.html).GetUnsafePtr




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

public static void* GetUnsafePtr(NativeArray<T> nativeArray);






### Parameters



| Parameter | Description |
| --- | --- |
| nativeArray | The NativeArray to check. |





### Returns



**void***
        The memory buffer pointer of the NativeArray.





### Description



Gets the pointer to the memory buffer owner of a NativeArray, and checks whether there is write access to the NativeArray. If there is no write access to the NativeArray, an
InvalidOperationException is thrown.


            
