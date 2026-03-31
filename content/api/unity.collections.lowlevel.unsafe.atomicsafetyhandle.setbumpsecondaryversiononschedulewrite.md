This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).SetBumpSecondaryVersionOnScheduleWrite




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

public static void SetBumpSecondaryVersionOnScheduleWrite([Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle,
bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to check. |
| value | Use true to bump the secondary version number on schedule. |





### Description



Sets whether to automatically bump the secondary version when scheduling a job that has write access to the AtomicSafetyHandle.





For example, NativeList sets this on its AtomicSafetyHandle, which cause any aliased NativeArrays (created using `AsArray()`) to be
invalidated whenever a job is scheduled that uses this NativeList without the `[ReadOnly]` attribute.

For more information about container version numbers, refer to [Copying NativeContainer structures](../Manual/job-system-copy-nativecontainer.html).


            
