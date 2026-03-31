This version of Unity is unsupported.



# AtomicSafetyErrorType





enumeration


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



Error code for errors related to accessing native container instances in different situations.





Each [NativeContainer](../Manual/JobSystemNativeContainer.html) instance is monitored by an `AtomicSafetyHandle`, which coordinates safe access
to the container. If the container can't be accessed safely, then the `AtomicSafetyHandle` generates an error. The values of this enumeration classify the errors
that are generated in each type of access situation.

You can set custom error messages for each of these error types on a per-type basis. Use `SetCustomErrorMessage` for each value in this enumeration.

Additional resources: [AtomicSafetyHandle.SetCustomErrorMessage](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.SetCustomErrorMessage.html)





### Properties



| Property | Description |
| --- | --- |
| Deallocated | Error caused by main thread attempting to access the native container after the container memory is deallocated. |
| DeallocatedFromJob | Error caused by worker thread attempting to access the native container after the container memory is deallocated |
| NotAllocatedFromJob | Error caused by worker thread attempting to access the native container before the container memory is allocated. |


            
