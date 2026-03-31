This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).IsHandleValid




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

public static bool IsHandleValid(ref [Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to check. |





### Returns



**bool**

          `true` if the AtomicSafetyHandle is valid, `false` otherwise.





### Description



Checks if an AtomicSafetyHandle is valid.





An `AtomicSafetyHandle` is invalid under the following conditions:

* The version number it stores no longer matches the version number of the associated entry in the safety system.
* [AtomicSafetyHandle.Release](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.Release.html) is called on the `AtomicSafetyHandle`, or on another `AtomicSafetyHandle` that references the same memory region.
* The secondary version number it stores no longer matches the secondary version number of the associated entry in the safety system. This situation happens when [AtomicSafetyHandle.CheckWriteAndBumpSecondaryVersion](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.CheckWriteAndBumpSecondaryVersion.html)
or AtomicSafetyHandle.SetBumpSecondaryVersionOnSchedule are called on the `AtomicSafetyHandle`.

For more information about container version numbers, refer to [Copying NativeContainer structures](../Manual/job-system-copy-nativecontainer.html).


            
