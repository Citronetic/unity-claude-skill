This version of Unity is unsupported.



# NativeArrayUnsafeUtility





class in
          Unity.Collections.LowLevel.Unsafe



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Contains [unsafe](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsafe) methods for
working with [NativeArray](Unity.Collections.NativeArray_1.html) instances.





This class contains methods that you can use to perform unsafe operations that ignore the job safety system. For example, if you are
implementing your own [custom native container](../Manual/job-system-custom-nativecontainer.html), you might want to call `NativeArray` methods that cause the safety
system to produce errors, even though you're implementing these methods safely. `NativeArrayUnsafeUtility` allows you to perform these operations without
triggering errors in the safety system.





### Static Methods



| Method | Description |
| --- | --- |
| ConvertExistingDataToNativeArray | Converts a buffer to a NativeArray. |
| GetAtomicSafetyHandle | Gets the AtomicSafetyHandle that is used for safety control on a NativeArray. |
| GetUnsafeBufferPointerWithoutChecks | Gets the pointer to the data owner of a NativeArray, without performing checks. |
| GetUnsafePtr | Gets the pointer to the memory buffer owner of a NativeArray, and checks whether there is write access to the NativeArray. If there is no write access to the NativeArray, an
InvalidOperationException is thrown. |
| GetUnsafeReadOnlyPtr | Gets a pointer to the memory buffer of a NativeArray or NativeArray.ReadOnly. |
| SetAtomicSafetyHandle | Sets a new AtomicSafetyHandle on a NativeArray. |


            
